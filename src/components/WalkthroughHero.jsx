import React, { useRef, useEffect, useState } from 'react';
import { gsap, ScrollTrigger } from '../utils/gsapSetup';
import { WALKTHROUGH_CONFIG } from '../config';
import VideoStage from './VideoStage';
import ParallaxMidground from './ParallaxMidground';
import EmergingEntrance from './EmergingEntrance';
import ScrollCopyTimeline from './ScrollCopyTimeline';

/**
 * WalkthroughHero
 * ---------------
 * Pinned 450vh scroll track with a locked 100vh viewport stage.
 * 
 * GSAP ScrollTrigger drives:
 * - progress (0.0 to 1.0)
 * - scrub smoothing (0.5s)
 * - Parallax depth separation between video (1.0 -> 1.15 scale),
 *   mid-ground cutouts, entrance portals, and foreground company profile copy.
 * - Clean pin release at progress = 1.0 flowing directly into the product catalog.
 */
export default function WalkthroughHero({ onShopNow, onOpenCompanyProfile }) {
  const trackRef = useRef(null);
  const stageRef = useRef(null);
  const videoStageRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleMotionChange);

    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    if (isReducedMotion) return;

    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    // Create GSAP ScrollTrigger for pinned 450vh track
    const trigger = ScrollTrigger.create({
      trigger: track,
      start: 'top top',
      end: 'bottom bottom',
      pin: stage,
      pinSpacing: true, // Ensures zero layout shift or content jump upon release
      scrub: WALKTHROUGH_CONFIG.scrubSmooth || 0.5,
      anticipatePin: 1,
      fastScrollEnd: true,
      onUpdate: (self) => {
        setScrollProgress(self.progress);
      },
    });

    return () => {
      trigger.kill();
    };
  }, [isReducedMotion]);

  // Slow scale-up parallax on the walkthrough camera (1.0 -> 1.15)
  const videoScale = 1.0 + scrollProgress * 0.15;

  return (
    <section
      id="walkthrough"
      ref={trackRef}
      className="relative w-full"
      style={{
        // 450vh creates deliberate, cinematic walkthrough pacing
        height: isReducedMotion ? '100vh' : `${WALKTHROUGH_CONFIG.scrollTrackVh}vh`,
      }}
      aria-label="Interactive DuraCoat Centre Store Walkthrough"
    >
      {/* Pinned 100vh Stage */}
      <div
        ref={stageRef}
        className="w-full h-screen overflow-hidden relative bg-[#07090E]"
      >
        {/* Layer 1: Background Video / Canvas Walkthrough (Slowest, 1.0 -> 1.15 scale) */}
        <VideoStage
          ref={videoStageRef}
          progress={scrollProgress}
          scale={videoScale}
          isReducedMotion={isReducedMotion}
        />

        {/* Layer 2: Emerging Entrance & Depth-of-Field Aperture (0.0 -> 0.45) */}
        <EmergingEntrance
          progress={scrollProgress}
          isReducedMotion={isReducedMotion}
        />

        {/* Layer 3: Mid-ground Floating Paint Cans & Hardware Tools (Medium Speed) */}
        <ParallaxMidground
          progress={scrollProgress}
          isReducedMotion={isReducedMotion}
        />

        {/* Layer 4: Foreground Scroll-Synced Timeline Copy (Company Profile Narrative & CTA) */}
        <ScrollCopyTimeline
          progress={scrollProgress}
          isReducedMotion={isReducedMotion}
          onShopNow={onShopNow}
          onOpenCompanyProfile={onOpenCompanyProfile}
        />
      </div>
    </section>
  );
}


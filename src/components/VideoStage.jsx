import React, { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import { WALKTHROUGH_CONFIG } from '../config';

/**
 * VideoStage
 * ----------
 * The core background visual layer.
 * 
 * Performance & Video Scrubbing Implementation:
 * 1. Standard MP4 videos scrub choppily because keyframes (I-frames) are typically spaced
 *    far apart (e.g. 5–10 seconds), forcing browsers to decode intermediate P/B frames sequentially.
 * 2. To achieve 60fps cinematic scrubbing, we re-encode the MP4 with all intra-frames (every frame is an I-frame)
 *    using: `ffmpeg -i input.mp4 -g 1 -an -c:v libx264 -crf 20 -preset fast output.mp4`.
 * 3. Scrubbing is decoupled from the scroll event using a continuous requestAnimationFrame loop
 *    with linear interpolation (lerp) to avoid discrete time jumps and ensure buttery smooth acceleration.
 * 4. An optional Canvas image-sequence mode is included for low-power devices or browsers with strict video seek policies.
 */
const VideoStage = forwardRef(function VideoStage({ progress = 0, scale = 1.0, isReducedMotion = false }, ref) {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [duration, setDuration] = useState(10);
  const targetTimeRef = useRef(0.01);
  const currentTimeRef = useRef(0.01);
  const rafIdRef = useRef(null);
  const imagesRef = useRef([]);

  const isCanvasMode = WALKTHROUGH_CONFIG.canvasMode?.enabled;
  const videoSource = WALKTHROUGH_CONFIG.optimizedVideoSrc || WALKTHROUGH_CONFIG.videoSrc;

  // Expose methods to parent
  useImperativeHandle(ref, () => ({
    videoElement: videoRef.current,
    canvasElement: canvasRef.current,
    isReady: isVideoReady,
  }));

  // Update target time when scroll progress changes
  useEffect(() => {
    if (isReducedMotion) return;

    if (isCanvasMode) {
      // Canvas frame index mapping (0 to frameCount - 1)
      const frameCount = WALKTHROUGH_CONFIG.canvasMode.frameCount || 240;
      const targetFrame = Math.min(Math.max(Math.floor(progress * (frameCount - 1)), 0), frameCount - 1);
      targetTimeRef.current = targetFrame;
    } else {
      // Video currentTime mapping (0 to duration)
      const clamped = Math.min(Math.max(progress, 0), 1);
      targetTimeRef.current = clamped * (duration || 10);
    }
  }, [progress, duration, isCanvasMode, isReducedMotion]);

  // Video metadata and preload setup
  useEffect(() => {
    const video = videoRef.current;
    if (!video || isCanvasMode) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

    const handleLoadedMetadata = () => {
      if (video.duration && !isNaN(video.duration)) {
        setDuration(video.duration);
      }
      setIsVideoReady(true);
      try {
        video.currentTime = 0.01;
      } catch (e) {}
    };

    const handleCanPlay = () => {
      setIsVideoReady(true);
    };

    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('canplay', handleCanPlay);

    // Initial load prime
    video.load();

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, [isCanvasMode]);

  // Canvas Image Sequence Preloader (Optional Mode)
  useEffect(() => {
    if (!isCanvasMode) return;
    const { frameCount, framePath } = WALKTHROUGH_CONFIG.canvasMode;
    const loadedImages = [];
    let loadedCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = framePath(i);
      img.onload = () => {
        loadedCount++;
        if (loadedCount >= Math.min(24, frameCount)) {
          setIsVideoReady(true);
        }
      };
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;
  }, [isCanvasMode]);

  // Continuous rAF Scrubbing Loop (Linear Interpolation)
  useEffect(() => {
    if (isReducedMotion) return;

    let isRunning = true;

    const tick = () => {
      if (!isRunning) return;

      const target = targetTimeRef.current;
      const current = currentTimeRef.current;
      const diff = target - current;

      if (isCanvasMode) {
        // Draw frame to canvas
        const frameIndex = Math.round(target);
        const img = imagesRef.current[frameIndex];
        const canvas = canvasRef.current;
        if (img && img.complete && canvas) {
          const ctx = canvas.getContext('2d');
          if (ctx) {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
          }
        }
      } else {
        // Scrub videocurrentTime with 0.15 lerp dampening
        if (Math.abs(diff) > 0.005) {
          currentTimeRef.current += diff * 0.15;
          const video = videoRef.current;
          if (video && video.readyState >= 2) {
            try {
              if ('fastSeek' in video) {
                video.fastSeek(currentTimeRef.current);
              } else {
                video.currentTime = currentTimeRef.current;
              }
            } catch (err) {}
          }
        }
      }

      rafIdRef.current = requestAnimationFrame(tick);
    };

    rafIdRef.current = requestAnimationFrame(tick);

    return () => {
      isRunning = false;
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [isCanvasMode, isReducedMotion]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
      {/* Video or Canvas Layer with Scale Parallax */}
      <div
        className="w-full h-full will-change-transform transition-transform duration-100 ease-out"
        style={{
          transform: `scale(${isReducedMotion ? 1.0 : scale}) translateZ(0)`,
        }}
      >
        {isCanvasMode ? (
          <canvas
            ref={canvasRef}
            width={1280}
            height={720}
            className="w-full h-full object-cover"
          />
        ) : (
          <video
            ref={videoRef}
            preload="auto"
            muted
            playsInline
            webkit-playsinline="true"
            poster={WALKTHROUGH_CONFIG.posterSrc}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              isVideoReady ? 'opacity-85' : 'opacity-40'
            }`}
          >
            {/* Primary seek-optimized source */}
            {WALKTHROUGH_CONFIG.optimizedVideoSrc && (
              <source src={WALKTHROUGH_CONFIG.optimizedVideoSrc} type="video/mp4" />
            )}
            {/* Fallback to original user video */}
            <source src={WALKTHROUGH_CONFIG.videoSrc} type="video/mp4" />
          </video>
        )}
      </div>

      {/* Cinematic Grade Overlay: Soft Vignette + Contrast Lift + Gradient Mask */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 50% 35%, rgba(7, 9, 14, 0.25) 0%, rgba(7, 9, 14, 0.65) 55%, rgba(7, 9, 14, 0.95) 100%),
            linear-gradient(180deg, rgba(7, 9, 14, 0.85) 0%, rgba(7, 9, 14, 0.1) 25%, rgba(7, 9, 14, 0.2) 60%, rgba(7, 9, 14, 0.95) 100%)
          `,
        }}
      />

      {/* Subtle Architectural Construction Grid Texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `
            linear-gradient(rgba(245, 158, 11, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 158, 11, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Loading State Pill (fades away as soon as metadata buffers) */}
      {!isVideoReady && (
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-gray-300">
          <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
          <span>Calibrating walkthrough stage…</span>
        </div>
      )}
    </div>
  );
});

export default VideoStage;


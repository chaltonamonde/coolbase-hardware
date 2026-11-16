import React, { useState, useEffect, useRef } from 'react';
import { Palette, Shield, Truck, Award } from 'lucide-react';

export default function AnimatedStats() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const containerRef = useRef(null);

  const stats = [
    {
      id: 'shades',
      target: 10000,
      suffix: '+',
      label: 'Custom Architectural Shades',
      subtext: 'Computerized automated tinting in 5 minutes',
      icon: Palette,
    },
    {
      id: 'materials',
      target: 52,
      suffix: '+',
      label: 'Certified Material Lines',
      subtext: 'Cement, TMT steel, aggregates & coatings',
      icon: Shield,
    },
    {
      id: 'zones',
      target: 7,
      suffix: '',
      label: 'Regional Delivery Zones',
      subtext: 'Siaya, Ugunja, Bondo, Yala, Sega & beyond',
      icon: Truck,
    },
    {
      id: 'established',
      target: 2020,
      prefix: 'Est. ',
      suffix: '',
      label: 'Heritage & Trade Trust',
      subtext: 'Verified contractor procurement partner',
      icon: Award,
    },
  ];

  const [counts, setCounts] = useState(() =>
    stats.reduce((acc, curr) => ({ ...acc, [curr.id]: 0 }), {})
  );

  useEffect(() => {
    // Check reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setCounts(stats.reduce((acc, curr) => ({ ...acc, [curr.id]: curr.target }), {}));
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1800; // 1.8s duration
          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quart
            const easeProgress = 1 - Math.pow(1 - progress, 4);

            const nextCounts = {};
            stats.forEach((s) => {
              if (s.id === 'established') {
                // Count up smoothly to 2020
                nextCounts[s.id] = Math.floor(1990 + easeProgress * (s.target - 1990));
              } else {
                nextCounts[s.id] = Math.floor(easeProgress * s.target);
              }
            });

            setCounts(nextCounts);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCounts(stats.reduce((acc, curr) => ({ ...acc, [curr.id]: curr.target }), {}));
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section
      ref={containerRef}
      className="relative py-16 sm:py-20 bg-[#070B13] border-t border-b border-white/[0.06] overflow-hidden"
      aria-label="Key Performance Statistics"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => {
            const Icon = s.icon;
            const value = counts[s.id] || 0;

            return (
              <div
                key={s.id}
                className="p-7 rounded-2xl bg-[#0C121E]/70 border border-white/[0.08] hover:border-[#E5A93C]/35 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[#F7CA68] group-hover:bg-[#E5A93C] group-hover:text-black transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500">
                    Metric
                  </span>
                </div>

                <div>
                  <div className="text-3xl sm:text-4xl font-display font-bold text-gold-gradient tracking-tight">
                    {s.prefix || ''}
                    {value.toLocaleString()}
                    {s.suffix || ''}
                  </div>
                  <h3 className="text-sm font-display font-bold text-white mt-1.5 mb-1 tracking-tight">
                    {s.label}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed font-normal">
                    {s.subtext}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

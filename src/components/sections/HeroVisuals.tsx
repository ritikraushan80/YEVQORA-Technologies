'use client';

import React from 'react';
import { HeartPulse, Landmark, ShoppingCart, GraduationCap, Trophy, Truck } from 'lucide-react';

/** Places a visual on the right side of the hero, between the navbar and the CTA, clear of the social bar. */
const VisualFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{ ['--hero-visual' as string]: 'clamp(280px, 36vw, 400px)' }}
    className="absolute right-[-18%] sm:right-[-6%] md:right-[7%] top-1/2 -translate-y-1/2 md:top-[84px] md:translate-y-0 w-[min(88vw,560px)] md:w-[var(--hero-visual)] aspect-square opacity-40 sm:opacity-70 md:opacity-100 pointer-events-none select-none"
  >
    {children}
  </div>
);

/* ---------- Slide 3: Every industry ---------- */
const industries = [
  { icon: HeartPulse, label: 'Healthcare', tint: 'from-rose-400 to-pink-600' },
  { icon: Landmark, label: 'FinTech', tint: 'from-emerald-400 to-teal-600' },
  { icon: ShoppingCart, label: 'E-Commerce', tint: 'from-amber-400 to-orange-600' },
  { icon: GraduationCap, label: 'Education', tint: 'from-sky-400 to-blue-600' },
  { icon: Trophy, label: 'Sports', tint: 'from-violet-400 to-purple-600' },
  { icon: Truck, label: 'Logistics', tint: 'from-cyan-400 to-indigo-600' },
];

const RADIUS = 40; // % of the frame

const industryPos = industries.map((_, i) => {
  const angle = (i / industries.length) * Math.PI * 2 - Math.PI / 2;
  return { left: 50 + Math.cos(angle) * RADIUS, top: 50 + Math.sin(angle) * RADIUS };
});

export const IndustryVisual: React.FC = () => (
  <VisualFrame>
    {/* ambient glow */}
    <div className="absolute inset-[-6%] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.5)_0%,rgba(99,102,241,0.22)_42%,transparent_70%)] blur-2xl" />

    {/* twinkling stars */}
    {[
      [10, 20], [90, 16], [94, 66], [6, 72], [34, 96], [72, 96], [52, 3], [3, 46],
    ].map(([l, t], i) => (
      <span
        key={i}
        className="orb-twinkle absolute size-[4px] rounded-full bg-white"
        style={{ left: `${l}%`, top: `${t}%`, animationDelay: `${i * 0.4}s` }}
      />
    ))}

    {/* static + slowly spinning rings */}
    <div className="absolute inset-[3%] rounded-full border border-white/10" />
    <div className="orb-orbit-slow absolute inset-[14%] rounded-full border border-dashed border-white/20" />
    <div className="absolute inset-[27%] rounded-full border border-white/10" />

    {/* orbiting industry tiles + connecting spokes */}
    <div className="orb-orbit absolute inset-0">
      <svg viewBox="0 0 100 100" className="absolute inset-0 size-full overflow-visible" aria-hidden="true">
        <defs>
          <linearGradient id="spoke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c4b5fd" />
            <stop offset="100%" stopColor="#f0abfc" />
          </linearGradient>
        </defs>
        {industryPos.map((p, i) => (
          <g key={i}>
            <line x1="50" y1="50" x2={p.left} y2={p.top} stroke="white" strokeOpacity="0.1" strokeWidth="0.5" />
            <line
              x1="50"
              y1="50"
              x2={p.left}
              y2={p.top}
              stroke="url(#spoke)"
              strokeWidth="0.6"
              strokeLinecap="round"
              className="hero-dash"
              style={{ animationDelay: `${i * 0.25}s` }}
            />
          </g>
        ))}
      </svg>

      {industries.map(({ icon: Icon, label, tint }, i) => (
        <div
          key={label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${industryPos[i].left}%`, top: `${industryPos[i].top}%` }}
        >
          <div className="orb-orbit-rev flex flex-col items-center gap-[7px]">
            <div className="relative">
              <span className={`absolute inset-0 rounded-[18px] bg-gradient-to-br ${tint} opacity-60 blur-md`} />
              <div className={`relative size-[clamp(46px,5vw,60px)] rounded-[18px] bg-gradient-to-br ${tint} border border-white/30 flex items-center justify-center text-white shadow-[0_10px_28px_rgba(0,0,0,0.45)]`}>
                <span className="absolute inset-0 rounded-[18px] bg-gradient-to-b from-white/35 to-transparent" />
                <Icon className="relative w-[46%] h-[46%]" strokeWidth={2} />
              </div>
            </div>
            <span className="whitespace-nowrap rounded-full border border-white/15 bg-black/35 backdrop-blur-sm px-[9px] py-[2px] text-[11px] font-medium text-white/85">
              {label}
            </span>
          </div>
        </div>
      ))}
    </div>

    {/* centre mark */}
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[24%]">
      <span className="scene-ping absolute inset-[-14%] rounded-full bg-fuchsia-400/30" />
      <span className="scene-ping absolute inset-[-34%] rounded-full bg-indigo-400/20" style={{ animationDelay: '0.9s' }} />
      <div className="relative size-full rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/35 backdrop-blur-md flex items-center justify-center shadow-[0_0_70px_rgba(168,85,247,0.65)]">
        <img src="/images/yevqora-mark.png" alt="" className="w-[54%] h-[54%] object-contain" />
      </div>
    </div>
  </VisualFrame>
);

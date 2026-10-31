'use client';

import React from 'react';
import { Check, Globe, Code2, Bell } from 'lucide-react';

/* Animated illustrations shown inside the Services for Growth cards.
   Keyframes (scene-*) live in globals.css. */

/* ---------- AI: glowing AI chip with circuit traces ---------- */
const chipTraces = [
  // [path, end x, end y]
  ['M110,85 H70 V50 H32', 32, 50],
  ['M110,105 H24', 24, 105],
  ['M110,125 H70 V160 H32', 32, 160],
  ['M190,85 H230 V50 H268', 268, 50],
  ['M190,105 H276', 276, 105],
  ['M190,125 H230 V160 H268', 268, 160],
  ['M130,70 V30 H100 V12', 100, 12],
  ['M170,70 V30 H200 V12', 200, 12],
  ['M130,140 V180 H100 V198', 100, 198],
  ['M170,140 V180 H200 V198', 200, 198],
] as const;

export const AiScene: React.FC = () => (
  <div className="relative z-10 w-[360px] h-[220px] flex items-center justify-center">
    <div className="absolute size-[190px] rounded-full bg-white/25 blur-3xl" />
    <svg viewBox="0 0 300 210" className="relative w-[330px] h-[231px] overflow-visible">
      <defs>
        <linearGradient id="chipFill" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#c7d2fe" />
        </linearGradient>
      </defs>

      {/* circuit traces */}
      {chipTraces.map(([d, x, y], i) => (
        <g key={i}>
          <path d={d} fill="none" stroke="white" strokeOpacity="0.28" strokeWidth="2" strokeLinejoin="round" />
          <path
            d={d}
            fill="none"
            stroke="white"
            strokeOpacity="0.95"
            strokeWidth="2"
            strokeLinejoin="round"
            className="hero-dash"
            style={{ animationDelay: `${i * 0.18}s` }}
          />
          <circle cx={x} cy={y} r="9" fill="white" className="scene-ping" style={{ animationDelay: `${(i % 5) * 0.4}s`, transformOrigin: `${x}px ${y}px` }} />
          <circle cx={x} cy={y} r="4.5" fill="white" />
        </g>
      ))}

      {/* spinning ring around the chip */}
      <g style={{ transformOrigin: '150px 105px' }} className="animate-[spin_14s_linear_infinite]">
        <circle cx="150" cy="105" r="58" fill="none" stroke="white" strokeOpacity="0.4" strokeWidth="1.3" strokeDasharray="3 7" />
        <circle cx="150" cy="47" r="4.5" fill="#fde68a" />
      </g>

      {/* chip */}
      <rect x="112" y="67" width="76" height="76" rx="16" fill="url(#chipFill)" />
      <rect x="112" y="67" width="76" height="76" rx="16" fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.9" />
      <rect x="121" y="76" width="58" height="58" rx="11" fill="#4338ca" fillOpacity="0.92" />
      <text x="150" y="116" textAnchor="middle" fontSize="30" fontWeight="800" fill="white" fontFamily="Onest, sans-serif">
        AI
      </text>
      <circle cx="150" cy="105" r="46" fill="white" fillOpacity="0.1" className="scene-ping" style={{ transformOrigin: '150px 105px' }} />
    </svg>
  </div>
);

/* ---------- Mobile: phone with live UI ---------- */
export const MobileScene: React.FC = () => (
  <div className="relative z-10 w-[360px] h-[220px] flex items-center justify-center">
    {/* floating notification */}
    <div className="absolute left-0 top-[16px] scene-pop flex items-center gap-[8px] rounded-[12px] bg-white/95 text-[#064e3b] px-[10px] py-[7px] shadow-xl">
      <span className="size-[20px] rounded-full bg-emerald-500 text-white flex items-center justify-center">
        <Check className="w-3 h-3" strokeWidth={3} />
      </span>
      <span className="text-[11px] font-semibold leading-tight">
        Build live
        <br />
        <span className="font-normal text-[10px] opacity-70">iOS &amp; Android</span>
      </span>
    </div>

    <div className="absolute right-0 bottom-[22px] scene-pop-delay flex items-center gap-[6px] rounded-full bg-white/95 text-[#064e3b] px-[10px] py-[6px] shadow-xl text-[11px] font-semibold">
      <Bell className="w-3 h-3 text-amber-500" />4.9 rating
    </div>

    {/* phone */}
    <div className="relative hero-float w-[112px] h-[204px] rounded-[24px] bg-[#04201a] border-[3px] border-white/80 shadow-[0_20px_40px_rgba(0,0,0,0.35)] p-[7px]">
      <div className="size-full rounded-[17px] bg-gradient-to-b from-[#0e3b30] to-[#06241d] p-[8px] flex flex-col gap-[7px] overflow-hidden">
        <span className="mx-auto h-[3px] w-[30%] rounded-full bg-white/40" />
        <div className="h-[44px] rounded-[10px] bg-gradient-to-br from-emerald-300 to-teal-400 p-[6px] flex items-end gap-[3px]">
          {[40, 70, 52, 88, 62].map((h, i) => (
            <span
              key={i}
              className="flex-1 rounded-sm bg-white/90 scene-bar"
              style={{ height: `${h}%`, animationDelay: `${i * 0.18}s` }}
            />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-[5px]">
          {['bg-amber-300', 'bg-pink-300', 'bg-sky-300', 'bg-violet-300', 'bg-orange-300', 'bg-lime-300'].map((c, i) => (
            <span key={i} className={`aspect-square rounded-[6px] ${c} scene-tile`} style={{ animationDelay: `${i * 0.2}s` }} />
          ))}
        </div>
        <span className="h-[5px] rounded-full bg-white/20" />
        <span className="h-[5px] w-[65%] rounded-full bg-white/15" />
      </div>
    </div>
  </div>
);

/* ---------- Web: browser with typing code ---------- */
export const WebScene: React.FC = () => (
  <div className="relative z-10 w-[360px] h-[220px] flex items-end justify-center">
    {/* floating code chip */}
    <div className="absolute left-[14px] top-[6px] scene-pop flex items-center gap-[6px] rounded-[12px] bg-white/95 text-[#0c4a6e] px-[10px] py-[6px] shadow-xl text-[11px] font-semibold">
      <Code2 className="w-3.5 h-3.5 text-sky-600" />
      Deployed
    </div>

    {/* spinning globe */}
    <div className="absolute right-[10px] bottom-[10px] size-[50px] rounded-full bg-white/95 shadow-xl flex items-center justify-center scene-pop-delay">
      <Globe className="w-[30px] h-[30px] text-sky-600 animate-[spin_9s_linear_infinite]" />
    </div>

    {/* browser */}
    <div className="relative hero-float-delay w-[200px] h-[140px] mb-[8px] rounded-[14px] bg-[#071a33]/90 border border-white/40 shadow-[0_20px_40px_rgba(0,0,0,0.35)] overflow-hidden">
      <div className="flex items-center gap-[5px] px-[10px] py-[7px] bg-white/10 border-b border-white/15">
        <span className="size-[6px] rounded-full bg-rose-400" />
        <span className="size-[6px] rounded-full bg-amber-400" />
        <span className="size-[6px] rounded-full bg-emerald-400" />
        <span className="ml-[6px] h-[6px] flex-1 rounded-full bg-white/20" />
      </div>
      <div className="p-[12px] flex flex-col gap-[8px]">
        <div className="h-[6px] rounded-full bg-fuchsia-300 scene-type" style={{ ['--w' as string]: '48%' }} />
        <div className="h-[6px] rounded-full bg-sky-300 scene-type ml-[14px]" style={{ ['--w' as string]: '70%', animationDelay: '0.5s' }} />
        <div className="h-[6px] rounded-full bg-emerald-300 scene-type ml-[14px]" style={{ ['--w' as string]: '56%', animationDelay: '1s' }} />
        <div className="h-[6px] rounded-full bg-amber-300 scene-type" style={{ ['--w' as string]: '34%', animationDelay: '1.5s' }} />
        <span className="h-[12px] w-[2px] bg-white scene-blink" />
      </div>
    </div>
  </div>
);

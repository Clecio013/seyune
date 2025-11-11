'use client';

import React from 'react';

interface BonusCoverProps {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  gradient?: 'gold' | 'green' | 'blue' | 'purple' | 'orange';
  pattern?: 'dots' | 'lines' | 'grid' | 'waves';
}

const gradients = {
  gold: 'from-amber-600 via-yellow-500 to-amber-600',
  green: 'from-emerald-600 via-green-500 to-emerald-600',
  blue: 'from-blue-600 via-cyan-500 to-blue-600',
  purple: 'from-purple-600 via-pink-500 to-purple-600',
  orange: 'from-orange-600 via-amber-500 to-orange-600',
};

export function BonusCover({
  title,
  subtitle = 'GUIA EXCLUSIVO',
  icon,
  gradient = 'gold',
  pattern = 'dots',
}: BonusCoverProps) {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-zinc-950 via-zinc-900 to-black overflow-hidden">
      {/* Pattern Background */}
      {pattern === 'dots' && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: '24px 24px',
          }}
        />
      )}
      {pattern === 'lines' && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              currentColor,
              currentColor 1px,
              transparent 1px,
              transparent 12px
            )`,
          }}
        />
      )}
      {pattern === 'grid' && (
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(currentColor 1px, transparent 1px),
              linear-gradient(90deg, currentColor 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />
      )}
      {pattern === 'waves' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="wave"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 50 Q 25 30, 50 50 T 100 50"
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave)" />
        </svg>
      )}

      {/* Gradient Accent Top */}
      <div
        className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${gradients[gradient]}`}
      />

      {/* Content Container */}
      <div className="relative h-full flex flex-col justify-between p-8">
        {/* Top Section */}
        <div className="space-y-6">
          {/* Logo/Brand */}
          <div className="flex items-center gap-3">
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${gradients[gradient]} flex items-center justify-center shadow-lg`}
            >
              <span className="text-black font-black text-xl">45</span>
            </div>
            <div>
              <div className="text-amber-400 text-xs font-bold tracking-wider uppercase">
                Projeto 45 Dias
              </div>
              <div className="text-zinc-400 text-xs uppercase tracking-wide">
                {subtitle}
              </div>
            </div>
          </div>

          {/* Icon (if provided) */}
          {icon && (
            <div className="flex justify-center py-8">
              <div
                className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${gradients[gradient]} flex items-center justify-center shadow-2xl`}
              >
                {icon}
              </div>
            </div>
          )}
        </div>

        {/* Title */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-black text-white leading-tight tracking-tight min-h-[3.5rem] flex items-end">
            {title}
          </h3>

          {/* Bottom Accent Line */}
          <div className="flex items-center gap-3">
            <div
              className={`h-1 flex-grow bg-gradient-to-r ${gradients[gradient]} rounded-full`}
            />
            <div className="text-zinc-500 text-xs font-bold whitespace-nowrap">
              BY SEYUNE
            </div>
          </div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div
        className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradients[gradient]} opacity-20 blur-3xl`}
      />
      <div
        className={`absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr ${gradients[gradient]} opacity-20 blur-3xl`}
      />
    </div>
  );
}

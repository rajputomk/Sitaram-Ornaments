import React from 'react';

export default function Logo({ size = 44, showText = true }) {
    return (
        <a href="#home" className="flex items-center gap-3 group" aria-label="Sitaram Ojarwala home">
            <span
                className="relative grid place-items-center rounded-xl font-display font-bold text-[#0F172A] shadow-lg shadow-amber/20 transition-transform duration-300 group-hover:scale-[1.04]"
                style={{
                    width: size,
                    height: size,
                    fontSize: size * 0.5,
                    background: 'linear-gradient(145deg, #FCD34D 0%, #F59E0B 45%, #D97706 100%)',
                }}
            >
                S
                <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/40" />
            </span>
            {showText && (
                <span className="flex flex-col leading-tight">
                    <span className="font-display text-base font-semibold tracking-tight text-white">Sitaram Ojarwala</span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-[#94A3B8]">Jewellery Machinery</span>
                </span>
            )}
        </a>
    );
}

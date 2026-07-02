import React, { useEffect, useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import Logo from './Logo';

const LINKS = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Categories', href: '#categories' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [open]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
                scrolled ? 'glass border-b border-white/[0.08] py-3' : 'border-b border-transparent py-5'
            }`}
        >
            <nav className="mx-auto flex max-w-content items-center justify-between px-5 sm:px-8">
                <Logo />
                <ul className="hidden items-center gap-9 lg:flex">
                    {LINKS.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                className="relative text-sm font-medium text-[#94A3B8] transition-colors duration-300 hover:text-white after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-amber after:transition-all after:duration-300 hover:after:w-full"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="flex items-center gap-3">
                    <a
                        href="tel:+917942557253"
                        className="hidden items-center gap-2 rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-[#0F172A] shadow-lg shadow-amber/20 transition-all duration-300 hover:bg-amber-hover hover:-translate-y-0.5 sm:inline-flex"
                    >
                        <Phone className="h-4 w-4" strokeWidth={2.2} />
                        Call Now
                    </a>
                    <button
                        onClick={() => setOpen((v) => !v)}
                        className="grid h-11 w-11 place-items-center rounded-full border border-white/[0.08] text-white lg:hidden"
                        aria-label={open ? 'Close menu' : 'Open menu'}
                        aria-expanded={open}
                    >
                        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            <div
                className={`glass overflow-hidden border-t border-white/[0.08] transition-all duration-400 lg:hidden ${
                    open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
                <ul className="flex flex-col gap-1 px-5 py-4">
                    {LINKS.map((l) => (
                        <li key={l.href}>
                            <a
                                href={l.href}
                                onClick={() => setOpen(false)}
                                className="block rounded-xl px-4 py-3 text-base font-medium text-[#94A3B8] transition-colors hover:bg-white/5 hover:text-white"
                            >
                                {l.label}
                            </a>
                        </li>
                    ))}
                    <li className="mt-2">
                        <a
                            href="tel:+917942557253"
                            onClick={() => setOpen(false)}
                            className="flex items-center justify-center gap-2 rounded-full bg-amber px-5 py-3 text-base font-semibold text-[#0F172A]"
                        >
                            <Phone className="h-4 w-4" /> Call Now
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}

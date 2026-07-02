import React, { useEffect, useRef, useState } from 'react';
import {
    ArrowRight, ArrowUpRight, Phone, MessageCircle, Mail, MapPin, Clock, FileCheck2,
    ShieldCheck, BadgeCheck, Truck, Headphones, Wallet, ChevronLeft, ChevronRight, X,
    Wrench, Gauge, Boxes, Flame, Hammer, Layers, CircleDashed, Sparkles, Stamp, Scale, Magnet, Cog,
    Factory, Store, Gem, Package, Globe, Users, Instagram, Facebook,
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FloatingButtons from '../components/FloatingButtons';
import Logo from '../components/Logo';
import { useReveal, useCountUp } from '../hooks/useReveal';

const IMG = {
    hero: 'https://images.unsplash.com/photo-1681220639947-ec6658aa31e3?w=1344&h=768&fit=crop&q=80',
    about: 'https://images.unsplash.com/photo-1528918479729-b8470dccbcd5?w=1216&h=896&fit=crop&q=80',
    testing: 'https://images.unsplash.com/photo-1699631559121-d8fc97c1128b?w=1280&h=832&fit=crop&q=80',
    furnace: 'https://images.unsplash.com/photo-1497244611283-464fcfcd2316?w=1280&h=832&fit=crop&q=80',
    casting: 'https://images.unsplash.com/photo-1650785468226-e415afc2bd9e?w=1280&h=832&fit=crop&q=80',
    buff: 'https://images.unsplash.com/photo-1664135974261-5ad2cd0cc0c5?w=1280&h=832&fit=crop&q=80',
    press: 'https://images.unsplash.com/photo-1676622097027-7fa711ed38a5?w=1280&h=832&fit=crop&q=80',
    rolling: 'https://images.unsplash.com/photo-1464405545752-8b5340bb1434?w=1280&h=832&fit=crop&q=80',
    tools: 'https://images.unsplash.com/photo-1675009406964-445f72c83346?w=1024&h=1024&fit=crop&q=80',
    bench: 'https://images.unsplash.com/photo-1624588057318-5f1b2eb81012?w=896&h=1216&fit=crop&q=80',
    dies: 'https://images.unsplash.com/photo-1677913820379-8b27b407e447?w=1024&h=1024&fit=crop&q=80',
    scale: 'https://images.unsplash.com/photo-1677641905377-e3f6087b8b7a?w=896&h=1216&fit=crop&q=80',
};

const CATEGORIES = [
    { name: 'Jewellery Making Tools', desc: 'Precision hand tools for daily workshop craftsmanship.', icon: Wrench, img: IMG.tools },
    { name: 'Gold Testing Machines', desc: 'Accurate purity analysis and karat verification.', icon: Gauge, img: IMG.testing },
    { name: 'Jewellery Casting Machines', desc: 'Reliable vacuum and centrifugal casting systems.', icon: Boxes, img: IMG.casting },
    { name: 'Gold Melting Furnaces', desc: 'High-temperature furnaces for consistent melts.', icon: Flame, img: IMG.furnace },
    { name: 'Hydraulic Coin Press Machines', desc: 'Powerful presses for coins and stamping.', icon: Hammer, img: IMG.press },
    { name: 'Rolling Machines', desc: 'Smooth sheet and wire rolling mills.', icon: Layers, img: IMG.rolling },
    { name: 'Buffing Machines', desc: 'Durable buffing units for a flawless finish.', icon: CircleDashed, img: IMG.buff },
    { name: 'Polishing Machines', desc: 'Professional polishing for mirror shine.', icon: Sparkles, img: IMG.buff },
    { name: 'Jewellery Dies', desc: 'Custom dies and stamping molds.', icon: Stamp, img: IMG.dies },
    { name: 'Jewellery Weighing Machines', desc: 'Precise digital scales for gold and stones.', icon: Scale, img: IMG.scale },
    { name: 'Magnetic Polishers', desc: 'Gentle, thorough magnetic pin polishing.', icon: Magnet, img: IMG.tools },
    { name: 'Casting Equipment', desc: 'Complete casting accessories and support gear.', icon: Cog, img: IMG.casting },
];

const FEATURED = [
    { name: 'Gold Testing Machine', tag: 'Testing Equipment', img: IMG.testing },
    { name: 'Gold Melting Furnace', tag: 'Furnaces', img: IMG.furnace },
    { name: 'Jewellery Casting Machine', tag: 'Casting', img: IMG.casting },
    { name: 'Vacuum Buff Polishing Machine', tag: 'Polishing', img: IMG.buff },
    { name: 'Hydraulic Coin Press', tag: 'Pressing', img: IMG.press },
    { name: 'Rolling Machine', tag: 'Rolling Mills', img: IMG.rolling },
];

const INDUSTRIES = [
    { name: 'Jewellery Manufacturers', icon: Factory },
    { name: 'Goldsmith Workshops', icon: Hammer },
    { name: 'Retail Jewellery Stores', icon: Store },
    { name: 'Wholesalers', icon: Package },
    { name: 'Dealers', icon: Users },
    { name: 'Exporters', icon: Globe },
];

const WHY = [
    { title: 'Trusted Since 2013', desc: 'Over a decade of dependable supply to businesses nationwide.', icon: ShieldCheck },
    { title: 'Premium Quality', desc: 'Machinery and tools selected for durability and precision.', icon: Gem },
    { title: 'Competitive Pricing', desc: 'Fair wholesale rates that protect your margins.', icon: Wallet },
    { title: 'GST Registered', desc: 'Fully compliant billing for hassle-free business.', icon: BadgeCheck },
    { title: 'Fast Delivery', desc: 'Prompt dispatch across India from Ahmedabad.', icon: Truck },
    { title: 'Excellent Support', desc: 'Responsive assistance before and after every order.', icon: Headphones },
];

const STATS = [
    { value: 2013, label: 'Established', suffix: '' },
    { value: 10, label: 'Years Experience', suffix: '+' },
    { value: null, label: 'Wholesale Trader', text: 'Business' },
    { value: null, label: 'Fully Compliant', text: 'GST' },
];

const GALLERY = [IMG.tools, IMG.bench, IMG.furnace, IMG.dies, IMG.casting, IMG.scale, IMG.press, IMG.rolling, IMG.buff];

const TRUST = ['Since 2013', 'GST Registered', 'Wholesale Supplier', 'Ahmedabad'];

function SectionEyebrow({ children }) {
    return (
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-amber">
            <span className="h-px w-8 bg-amber/60" />
            {children}
        </span>
    );
}

function StatCard({ stat }) {
    const ref = useRef(null);
    useCountUp(stat.value ?? 0, ref);
    return (
        <div className="reveal flex min-h-[9rem] flex-col justify-center rounded-2xl border border-white/[0.08] bg-[#1E293B] p-6 sm:min-h-[10rem] sm:p-8">
            <div className="font-display font-bold leading-tight text-white" style={{ fontSize: stat.value != null ? 'clamp(2rem, 5vw, 3rem)' : 'clamp(1.5rem, 3.5vw, 2.25rem)' }}>
                {stat.value != null ? (
                    <>
                        <span ref={ref}>0</span>
                        {stat.suffix}
                    </>
                ) : (
                    stat.text
                )}
            </div>
            <p className="mt-2 text-sm font-medium text-[#94A3B8]">{stat.label}</p>
        </div>
    );
}

export default function HomePage() {
    useReveal();
    const trackRef = useRef(null);
    const [lightbox, setLightbox] = useState(null);

    const scrollCarousel = (dir) => {
        const el = trackRef.current;
        if (!el) return;
        el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: 'smooth' });
    };

    useEffect(() => {
        if (lightbox == null) return;
        const onKey = (e) => {
            if (e.key === 'Escape') setLightbox(null);
            if (e.key === 'ArrowRight') setLightbox((i) => (i + 1) % GALLERY.length);
            if (e.key === 'ArrowLeft') setLightbox((i) => (i - 1 + GALLERY.length) % GALLERY.length);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [lightbox]);

    return (
        <div className="min-h-screen bg-[#0F172A] text-white">
            <Navbar />
            <FloatingButtons />

            {/* HERO */}
            <section id="home" className="relative flex min-h-[100dvh] items-center overflow-hidden pt-28 pb-16">
                <div className="absolute inset-0 -z-10">
                    <img src={IMG.hero} alt="Jewellery machinery workshop" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/90 to-[#0F172A]/60" />
                    <div className="absolute inset-0 bg-[#0F172A]/55" />
                </div>
                <div className="mx-auto grid w-full max-w-content items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
                    <div className="reveal in-view">
                        <SectionEyebrow>Established 2013 · Ahmedabad</SectionEyebrow>
                        <h1 className="fluid-hero mt-6 font-display font-bold leading-[1.08] tracking-tight text-white">
                            Trusted Jewellery Machinery & Tools Supplier <span className="text-amber">Since 2013</span>
                        </h1>
                        <p className="mt-6 max-w-xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
                            Providing reliable jewellery machinery, testing equipment, furnaces, casting machines,
                            polishing equipment and professional tools for manufacturers, wholesalers and dealers across India.
                        </p>
                        <div className="mt-9 flex flex-wrap gap-4">
                            <a href="#categories" className="inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-[#0F172A] shadow-lg shadow-amber/25 transition-all duration-300 hover:bg-amber-hover hover:-translate-y-0.5">
                                Explore Categories <ArrowRight className="h-4 w-4" />
                            </a>
                            <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-white/[0.14] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-amber hover:text-amber">
                                Contact Us
                            </a>
                        </div>
                    </div>
                    <div className="reveal in-view relative hidden lg:block">
                        <div className="overflow-hidden rounded-3xl border border-white/[0.08] shadow-2xl shadow-black/50">
                            <img src={IMG.about} alt="Premium gold casting machinery" className="h-[460px] w-full object-cover" />
                        </div>
                        <div className="glass absolute -bottom-6 -left-6 rounded-2xl border border-white/[0.08] px-6 py-4">
                            <p className="font-display text-2xl font-bold text-amber">10+ Years</p>
                            <p className="text-xs text-[#94A3B8]">of trusted supply</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRUST BADGES */}
            <div className="border-y border-white/[0.08] bg-[#0F172A]">
                <div className="mx-auto grid max-w-content grid-cols-2 gap-px px-5 sm:px-8 md:grid-cols-4">
                    {TRUST.map((t) => (
                        <div key={t} className="flex items-center justify-center gap-2 py-6 text-center">
                            <BadgeCheck className="h-5 w-5 shrink-0 text-amber" strokeWidth={2} />
                            <span className="text-sm font-medium text-white">{t}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ABOUT */}
            <section id="about" className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-28">
                <div className="grid items-center gap-14 lg:grid-cols-2">
                    <div className="reveal order-2 overflow-hidden rounded-3xl border border-white/[0.08] lg:order-1">
                        <img src={IMG.about} alt="Sitaram Ojarwala jewellery machinery" loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <div className="reveal order-1 lg:order-2">
                        <SectionEyebrow>About Us</SectionEyebrow>
                        <h2 className="mt-5 fluid-heading font-display font-bold leading-tight">About Sitaram Ojarwala</h2>
                        <p className="mt-6 text-base leading-relaxed text-[#94A3B8] sm:text-lg">
                            Established in 2013, Sitaram Ojarwala has become one of Ahmedabad&apos;s trusted suppliers of
                            jewellery machinery and professional tools. We provide reliable equipment for jewellery
                            manufacturers, wholesalers, retailers and workshops across India.
                        </p>
                        <p className="mt-4 text-base leading-relaxed text-[#94A3B8] sm:text-lg">
                            Our commitment to quality, fair pricing and dependable customer service has helped us build
                            long-term relationships with clients nationwide.
                        </p>
                        <a href="#contact" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-amber transition-colors hover:text-amber-hover">
                            Get in touch <ArrowRight className="h-4 w-4" />
                        </a>
                    </div>
                </div>

                {/* STATS */}
                <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
                    {STATS.map((s) => <StatCard key={s.label} stat={s} />)}
                </div>
            </section>

            {/* CATEGORIES */}
            <section id="categories" className="border-t border-white/[0.08] bg-[#0F172A] py-24 sm:py-28">
                <div className="mx-auto max-w-content px-5 sm:px-8">
                    <div className="reveal max-w-2xl">
                        <SectionEyebrow>Product Categories</SectionEyebrow>
                        <h2 className="mt-5 fluid-heading font-display font-bold leading-tight">A complete range for every jewellery workshop</h2>
                        <p className="mt-4 text-[#94A3B8]">From testing and casting to polishing and pressing — sourced and supplied with care.</p>
                    </div>
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                        {CATEGORIES.map((c) => {
                            const Icon = c.icon;
                            return (
                                <a
                                    key={c.name}
                                    href="#contact"
                                    className="reveal group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1E293B] transition-all duration-400 hover:-translate-y-1.5 hover:border-amber/40"
                                >
                                    <div className="relative h-44 shrink-0 overflow-hidden">
                                        <img src={c.img} alt={c.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1E293B] to-transparent" />
                                        <span className="glass absolute left-4 top-4 grid h-11 w-11 place-items-center rounded-xl border border-white/[0.08] text-amber">
                                            <Icon className="h-5 w-5" strokeWidth={1.8} />
                                        </span>
                                    </div>
                                    <div className="flex flex-1 items-start justify-between gap-3 p-6">
                                        <div className="min-w-0">
                                            <h3 className="font-display text-lg font-semibold text-white">{c.name}</h3>
                                            <p className="mt-1.5 line-clamp-3 text-sm leading-relaxed text-[#94A3B8]">{c.desc}</p>
                                        </div>
                                        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-[#94A3B8] transition-all duration-300 group-hover:text-amber group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FEATURED CAROUSEL */}
            <section className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-28">
                <div className="reveal flex flex-wrap items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <SectionEyebrow>Featured Products</SectionEyebrow>
                        <h2 className="mt-5 fluid-heading font-display font-bold leading-tight">Machinery businesses rely on</h2>
                    </div>
                    <div className="flex gap-3">
                        <button onClick={() => scrollCarousel(-1)} aria-label="Previous" className="grid h-11 w-11 place-items-center rounded-full border border-white/[0.14] text-white transition-colors hover:border-amber hover:text-amber">
                            <ChevronLeft className="h-5 w-5" />
                        </button>
                        <button onClick={() => scrollCarousel(1)} aria-label="Next" className="grid h-11 w-11 place-items-center rounded-full border border-white/[0.14] text-white transition-colors hover:border-amber hover:text-amber">
                            <ChevronRight className="h-5 w-5" />
                        </button>
                    </div>
                </div>
                <div ref={trackRef} className="no-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2">
                    {FEATURED.map((p) => (
                        <div key={p.name} className="group flex w-[280px] shrink-0 snap-start flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#1E293B] sm:w-[340px]">
                            <div className="h-56 shrink-0 overflow-hidden">
                                <img src={p.img} alt={p.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </div>
                            <div className="flex flex-1 flex-col p-6">
                                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-amber">{p.tag}</span>
                                <h3 className="mt-2 line-clamp-2 font-display text-lg font-semibold text-white">{p.name}</h3>
                                <a href="#contact" className="mt-4 inline-flex items-center gap-2 whitespace-nowrap text-sm font-medium text-[#94A3B8] transition-colors hover:text-amber">
                                    Enquire now <ArrowRight className="h-4 w-4 shrink-0" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* INDUSTRIES */}
            <section className="border-y border-white/[0.08] bg-[#0F172A] py-24 sm:py-28">
                <div className="mx-auto max-w-content px-5 sm:px-8">
                    <div className="reveal max-w-2xl">
                        <SectionEyebrow>Industries We Serve</SectionEyebrow>
                        <h2 className="mt-5 fluid-heading font-display font-bold leading-tight">Trusted across the jewellery trade</h2>
                    </div>
                    <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3">
                        {INDUSTRIES.map((ind) => {
                            const Icon = ind.icon;
                            return (
                                <div key={ind.name} className="reveal flex h-full min-h-[6rem] items-center gap-4 rounded-2xl border border-white/[0.08] bg-[#1E293B] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber/40 sm:p-7">
                                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber/10 text-amber">
                                        <Icon className="h-6 w-6" strokeWidth={1.7} />
                                    </span>
                                    <span className="min-w-0 font-display text-base font-semibold text-white sm:text-lg">{ind.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-28">
                <div className="reveal max-w-2xl">
                    <SectionEyebrow>Why Choose Us</SectionEyebrow>
                    <h2 className="mt-5 fluid-heading font-display font-bold leading-tight">Built on trust, quality and service</h2>
                </div>
                <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {WHY.map((w) => {
                        const Icon = w.icon;
                        return (
                            <div key={w.title} className="reveal flex h-full flex-col rounded-2xl border border-white/[0.08] bg-[#1E293B] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber/40">
                                <span className="grid h-12 w-12 place-items-center rounded-xl bg-amber/10 text-amber">
                                    <Icon className="h-6 w-6" strokeWidth={1.7} />
                                </span>
                                <h3 className="mt-5 font-display text-lg font-semibold text-white">{w.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">{w.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* GALLERY */}
            <section id="gallery" className="border-t border-white/[0.08] bg-[#0F172A] py-24 sm:py-28">
                <div className="mx-auto max-w-content px-5 sm:px-8">
                    <div className="reveal max-w-2xl">
                        <SectionEyebrow>Gallery</SectionEyebrow>
                        <h2 className="mt-5 fluid-heading font-display font-bold leading-tight">A look inside our machinery range</h2>
                    </div>
                    <div className="reveal mt-14 columns-2 gap-4 md:columns-3 [&>*]:mb-4">
                        {GALLERY.map((src, i) => (
                            <button
                                key={src + i}
                                onClick={() => setLightbox(i)}
                                className="group block w-full overflow-hidden rounded-2xl border border-white/[0.08]"
                                aria-label={`Open gallery image ${i + 1}`}
                            >
                                <img src={src} alt={`Jewellery machinery ${i + 1}`} loading="lazy" className="w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="relative overflow-hidden py-24 sm:py-28">
                <div className="absolute inset-0 -z-10">
                    <img src={IMG.press} alt="" aria-hidden="true" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[#0F172A]/90" />
                </div>
                <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
                    <h2 className="reveal fluid-heading font-display font-bold leading-tight lg:text-5xl">Looking for Reliable Jewellery Machinery?</h2>
                    <p className="reveal mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#94A3B8] sm:text-lg">
                        We supply professional jewellery machinery and tools for manufacturers, wholesalers and retailers across India.
                    </p>
                    <div className="reveal mt-10 flex flex-wrap justify-center gap-4">
                        <a href="tel:+917942557253" className="inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-[#0F172A] shadow-lg shadow-amber/25 transition-all duration-300 hover:bg-amber-hover hover:-translate-y-0.5">
                            <Phone className="h-4 w-4" /> Call Now
                        </a>
                        <a href="https://wa.me/917942557253" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/40 bg-[#10B981]/10 px-7 py-3.5 text-sm font-semibold text-[#10B981] transition-all duration-300 hover:bg-[#10B981]/20 hover:-translate-y-0.5">
                            <MessageCircle className="h-4 w-4" /> WhatsApp
                        </a>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="mx-auto max-w-content px-5 py-24 sm:px-8 sm:py-28">
                <div className="reveal max-w-2xl">
                    <SectionEyebrow>Contact</SectionEyebrow>
                    <h2 className="mt-5 fluid-heading font-display font-bold leading-tight">Let&apos;s talk about your requirements</h2>
                </div>
                <div className="mt-14 grid gap-10 lg:grid-cols-2">
                    <div className="reveal space-y-4">
                        {[
                            { icon: MapPin, label: 'Address', value: 'Sitaram Ojarwala, Manek Chowk, Ahmedabad, Gujarat, India' },
                            { icon: Phone, label: 'Phone', value: '+91 7942557253', href: 'tel:+917942557253' },
                            { icon: Mail, label: 'Email', value: 'info@sitaramtools.in', href: 'mailto:info@sitaramtools.in' },
                            { icon: FileCheck2, label: 'GST', value: '24CVDPP6094D1ZI' },
                            { icon: Clock, label: 'Business Hours', value: 'Monday – Saturday, 10:00 AM – 7:00 PM' },
                        ].map((row) => {
                            const Icon = row.icon;
                            return (
                                <div key={row.label} className="flex items-start gap-4 rounded-2xl border border-white/[0.08] bg-[#1E293B] p-5">
                                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber/10 text-amber">
                                        <Icon className="h-5 w-5" strokeWidth={1.8} />
                                    </span>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#94A3B8]">{row.label}</p>
                                        {row.href ? (
                                            <a href={row.href} className="mt-1 block font-medium text-white transition-colors hover:text-amber">{row.value}</a>
                                        ) : (
                                            <p className="mt-1 font-medium text-white">{row.value}</p>
                                        )}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="reveal overflow-hidden rounded-3xl border border-white/[0.08]">
                        <iframe
                            title="Sitaram Jewellery Tools location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.0236436051014!2d72.58835207421438!3d23.022904079173497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e844edf156c89%3A0x407544d81bdd1e2c!2sSITARAM%20JEWELLERY%20TOOLS!5e0!3m2!1sen!2sin!4v1782908430444!5m2!1sen!2sin"
                            className="h-full min-h-[360px] w-full"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </section>

            {/* FOOTER */}
            <footer className="border-t border-white/[0.08] bg-[#0F172A]">
                <div className="mx-auto grid max-w-content gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
                    <div>
                        <Logo />
                        <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#94A3B8]">
                            Trusted wholesale supplier of jewellery machinery and professional tools since 2013, serving businesses across India.
                        </p>
                    </div>
                    <div className="md:justify-self-center">
                        <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">Quick Links</p>
                        <ul className="mt-5 space-y-3 text-sm">
                            {['Home', 'About', 'Categories', 'Gallery', 'Contact'].map((l) => (
                                <li key={l}>
                                    <a href={`#${l.toLowerCase()}`} className="text-[#94A3B8] transition-colors hover:text-amber">{l}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:justify-self-end">
                        <p className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-white">Get in touch</p>
                        <ul className="mt-5 space-y-3 text-sm text-[#94A3B8]">
                            <li><a href="tel:+917942557253" className="transition-colors hover:text-amber">+91 7942557253</a></li>
                            <li><a href="mailto:info@sitaramtools.in" className="transition-colors hover:text-amber">info@sitaramtools.in</a></li>
                            <li className="flex gap-3 pt-3">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full border border-white/[0.08] text-[#94A3B8] transition-colors hover:border-amber hover:text-amber">
                                    <Instagram className="h-5 w-5" strokeWidth={1.8} />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full border border-white/[0.08] text-[#94A3B8] transition-colors hover:border-amber hover:text-amber">
                                    <Facebook className="h-5 w-5" strokeWidth={1.8} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-white/[0.08]">
                    <p className="mx-auto max-w-content px-5 py-6 text-center text-xs text-[#94A3B8] sm:px-8">
                        © 2026 Sitaram Ojarwala. All Rights Reserved.
                    </p>
                </div>
            </footer>

            {/* LIGHTBOX */}
            {lightbox != null && (
                <div
                    className="fixed inset-0 z-[60] grid place-items-center bg-black/90 p-4 backdrop-blur-sm"
                    onClick={() => setLightbox(null)}
                    role="dialog"
                    aria-modal="true"
                >
                    <button onClick={() => setLightbox(null)} aria-label="Close" className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-amber hover:text-amber">
                        <X className="h-5 w-5" />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i - 1 + GALLERY.length) % GALLERY.length); }}
                        aria-label="Previous image"
                        className="absolute left-4 grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-amber hover:text-amber sm:left-8"
                    >
                        <ChevronLeft className="h-6 w-6" />
                    </button>
                    <img
                        src={GALLERY[lightbox]}
                        alt={`Jewellery machinery ${lightbox + 1}`}
                        onClick={(e) => e.stopPropagation()}
                        className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain"
                    />
                    <button
                        onClick={(e) => { e.stopPropagation(); setLightbox((i) => (i + 1) % GALLERY.length); }}
                        aria-label="Next image"
                        className="absolute right-4 grid h-12 w-12 place-items-center rounded-full border border-white/20 text-white transition-colors hover:border-amber hover:text-amber sm:right-8"
                    >
                        <ChevronRight className="h-6 w-6" />
                    </button>
                </div>
            )}
        </div>
    );
}

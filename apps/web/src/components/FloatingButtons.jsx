import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
    return (
        <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3 sm:bottom-7 sm:right-7">
            <a
                href="https://wa.me/917942557253"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="glass grid h-13 w-13 place-items-center rounded-full border border-white/[0.08] text-[#10B981] shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1 hover:text-white"
                style={{ height: 52, width: 52 }}
            >
                <MessageCircle className="h-6 w-6" strokeWidth={2} />
            </a>
            <a
                href="tel:+917942557253"
                aria-label="Call Sitaram Ojarwala"
                className="grid place-items-center rounded-full bg-amber text-[#0F172A] shadow-xl shadow-amber/30 transition-all duration-300 hover:-translate-y-1 hover:bg-amber-hover"
                style={{ height: 52, width: 52 }}
            >
                <Phone className="h-6 w-6" strokeWidth={2.2} />
            </a>
        </div>
    );
}

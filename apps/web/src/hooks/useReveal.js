import { useEffect } from 'react';

// Adds `.in-view` to any `.reveal` element when it scrolls into view.
export function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll('.reveal:not(.in-view)');
        if (!('IntersectionObserver' in window)) {
            els.forEach((el) => el.classList.add('in-view'));
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    });
}

export function useCountUp(target, ref, duration = 1600) {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let started = false;
        const run = () => {
            if (started) return;
            started = true;
            const start = performance.now();
            const tick = (now) => {
                const p = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - p, 3);
                el.textContent = Math.round(eased * target).toString();
                if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
        };
        const io = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && run()),
            { threshold: 0.5 }
        );
        io.observe(el);
        return () => io.disconnect();
    }, [target, ref, duration]);
}

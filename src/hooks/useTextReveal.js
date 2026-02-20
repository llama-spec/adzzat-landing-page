import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useTextReveal = (dependency = []) => {
    useEffect(() => {
        const ctx = gsap.context(() => {
            // Select all major headings that don't already have specific animations applied
            const headings = gsap.utils.toArray('h1, h2:not(.acc-h2):not(.expertise-title)');

            headings.forEach(heading => {
                // Ensure they start hidden if not already animated by something else
                gsap.fromTo(heading,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: heading,
                            start: 'top 85%',
                            toggleActions: 'play none none none'
                        }
                    }
                );
            });
        });

        return () => ctx.revert();
    }, dependency);
};

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './BackgroundDecorations.css';

gsap.registerPlugin(ScrollTrigger);

const BackgroundDecorations = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate each glowing orb to float randomly
            const orbs = gsap.utils.toArray('.glow-orb');
            orbs.forEach(orb => {
                gsap.to(orb, {
                    x: "random(-100, 100)",
                    y: "random(-100, 100)",
                    duration: "random(10, 20)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut"
                });

                // Opacity pulses on scroll
                gsap.to(orb, {
                    scrollTrigger: {
                        trigger: orb,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    },
                    opacity: 0.8,
                    scale: 1.2
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="bg-decorations-wrapper" ref={containerRef}>
            {/* Top section glow */}
            <div className="glow-orb orb-1" style={{ top: '15%', left: '-5%' }}></div>
            <div className="glow-orb orb-2" style={{ top: '25%', right: '-5%' }}></div>

            {/* Mid section glow */}
            <div className="glow-orb orb-3" style={{ top: '55%', left: '10%' }}></div>
            <div className="glow-orb orb-4" style={{ top: '65%', right: '10%' }}></div>

            {/* Bottom section glow */}
            <div className="glow-orb orb-5" style={{ top: '85%', left: '50%', transform: 'translateX(-50%)' }}></div>
        </div>
    );
};

export default BackgroundDecorations;

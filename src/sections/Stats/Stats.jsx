import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Stats.css';

gsap.registerPlugin(ScrollTrigger);

const Stats = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            // Giant Title Scroll Animation
            gsap.fromTo('.stats-title-huge', { y: 80, opacity: 0 }, { y: 0, opacity: 1, 
                duration: 1.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.stats-title-huge',
                    start: "top 85%"
                }
            });

            gsap.fromTo('.stats-subtitle', { y: 30, opacity: 0 }, { y: 0, opacity: 1, 
                duration: 1,
                ease: 'power3.out',
                delay: 0.3,
                scrollTrigger: {
                    trigger: '.stats-title-huge',
                    start: "top 85%"
                }
            });

            // Stats numbers animation
            gsap.fromTo('.stat-item', { y: 40, opacity: 0 }, { y: 0, opacity: 1, 
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.stats-row',
                    start: "top 85%"
                }
            });

            // Floating Pills animation
            const pills = gsap.utils.toArray('.floating-pill');
            pills.forEach((pill, i) => {
                // Initial entry
                gsap.from(pill, {
                    x: 100,
                    opacity: 0,
                    duration: 1.5,
                    ease: 'power2.out',
                    delay: i * 0.2,
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 70%"
                    }
                });

                // Continuous float upward (parallax)
                gsap.to(pill, {
                    y: -150 - (i * 50),
                    ease: 'none',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: 1
                    }
                });
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="stats-section section-wrapper" ref={containerRef}>
            <div className="container stats-container">

                {/* Top: Massive Text */}
                <div className="stats-header">
                    <h2 className="stats-title-huge">
                        Foundation models fail <span className="text-blue">not because</span><br />
                        <span className="text-blue">of architecture,</span> but because of<br />
                        <span className="text-blue">evaluation quality.</span>
                    </h2>
                    <p className="stats-subtitle">
                        When internal teams attempt to scale evaluation, weaknesses compound.<br />
                        Generic crowd platforms cannot solve this. Evaluation must be managed.
                    </p>
                </div>

                {/* Bottom: Left Stats & Right Floating Tags */}
                <div className="stats-bottom">

                    <div className="stats-row">
                        <div className="stat-item">
                            <div className="stat-number">Elite</div>
                            <div className="stat-label">IITians, PhDs, and<br />domain experts</div>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <div className="stat-number">Tested</div>
                            <div className="stat-label">Validated for analytical reasoning</div>
                        </div>
                    </div>

                    <div className="floating-pills-container">
                        <div className="floating-pill pill-pos-1">
                            <span className="pill-icon">🧬</span> Multi-Modal
                        </div>
                        <div className="floating-pill pill-pos-2">
                            <span className="pill-icon">ƒ</span> Reasoning
                        </div>
                        <div className="floating-pill pill-pos-3">
                            <span className="pill-icon">&lt;/&gt;</span> Code Gen
                        </div>
                        <div className="floating-pill pill-pos-4" style={{ opacity: 0.5 }}>
                            <span className="pill-icon">$</span> RLHF
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Stats;

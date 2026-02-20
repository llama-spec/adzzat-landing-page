import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Zap, ShieldCheck } from 'lucide-react';
import './Pillars.css';

gsap.registerPlugin(ScrollTrigger);

const Pillars = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.pillar-card', { y: 50, opacity: 0 }, { y: 0, opacity: 1, 
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%"
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="pillars-section section-wrapper" ref={sectionRef}>
            <div className="container">
                <div className="pillars-header">
                    <h2 className="pillars-title">Our Evaluation Infrastructure</h2>
                </div>

                <div className="pillars-grid">

                    <div className="pillar-card">
                        <div className="pillar-icon-wrapper">
                            <Target size={32} />
                        </div>
                        <h3 className="pillar-title">Architecture Design</h3>
                        <p className="pillar-desc">
                            We define structured evaluation frameworks aligned to your model objectives, matching experts to specialization.
                        </p>
                    </div>

                    <div className="pillar-card">
                        <div className="pillar-icon-wrapper">
                            <Zap size={32} />
                        </div>
                        <h3 className="pillar-title">Quality Control</h3>
                        <p className="pillar-desc">
                            Multi-layer validation, calibration loops, and performance monitoring ensure the highest data integrity.
                        </p>
                    </div>

                    <div className="pillar-card">
                        <div className="pillar-icon-wrapper">
                            <ShieldCheck size={32} />
                        </div>
                        <h3 className="pillar-title">Scalable Execution</h3>
                        <p className="pillar-desc">
                            Rapid expansion without degradation in signal quality. Every engagement is custom-structured and managed.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Pillars;

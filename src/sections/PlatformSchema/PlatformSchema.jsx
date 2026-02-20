import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Tags, Activity, Webhook, Server } from 'lucide-react';
import './PlatformSchema.css';

gsap.registerPlugin(ScrollTrigger);

const PlatformSchema = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.schema-header', { y: 40, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
            });

            const tl = gsap.timeline({
                scrollTrigger: { trigger: '.schema-diagram', start: "top 75%" }
            });

            // Animate 3 feature boxes
            tl.fromTo('.schema-feature-box',
                { x: -40, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.6, stagger: 0.2, ease: 'power2.out' }
            )
                // Animate connector lines to platform
                .fromTo('.schema-connector',
                    { scaleX: 0, transformOrigin: 'left center' },
                    { scaleX: 1, duration: 0.5, stagger: 0.1, ease: 'power1.inOut' },
                    "-=0.2"
                )
                // Animate central platform core
                .fromTo('.schema-core',
                    { scale: 0.8, opacity: 0, rotationY: -90 },
                    { scale: 1, opacity: 1, rotationY: 0, duration: 0.8, ease: 'back.out(1.2)' },
                    "-=0.3"
                );

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="schema-section section-wrapper" ref={sectionRef}>
            <div className="container schema-container">
                <div className="schema-header">
                    <h2 className="schema-title">The Specialized Platform</h2>
                    <p className="schema-subtitle">Next-generation infrastructure for high-velocity AI teams.</p>
                </div>

                <div className="schema-diagram">

                    {/* Left: 3 Feature Boxes */}
                    <div className="schema-features-col">
                        <div className="schema-feature-box">
                            <Tags className="feature-icon" />
                            <div className="feature-text">
                                <h3>Smart Cataloging</h3>
                                <p>Automated metadata extraction and intelligent tagging for effortless discovery across your entire data lake.</p>
                            </div>
                        </div>
                        <div className="schema-feature-box">
                            <Activity className="feature-icon" />
                            <div className="feature-text">
                                <h3>Real-Time Analytics</h3>
                                <p>Instant insights into data usage, performance metrics, and team collaboration patterns without latency.</p>
                            </div>
                        </div>
                        <div className="schema-feature-box">
                            <Webhook className="feature-icon" />
                            <div className="feature-text">
                                <h3>API Integration</h3>
                                <p>Seamlessly connect with your existing ML pipelines via our robust, type-safe REST and gRPC endpoints.</p>
                            </div>
                        </div>
                    </div>

                    {/* Middle: SVG Connectors */}
                    <div className="schema-connectors-col">
                        <svg width="100%" height="100%" viewBox="0 0 200 400" preserveAspectRatio="none">
                            <path className="schema-connector" d="M0,80 C100,80 100,200 200,200" fill="none" stroke="rgba(79, 70, 229, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                            <path className="schema-connector" d="M0,200 L200,200" fill="none" stroke="rgba(79, 70, 229, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                            <path className="schema-connector" d="M0,320 C100,320 100,200 200,200" fill="none" stroke="rgba(79, 70, 229, 0.4)" strokeWidth="2" strokeDasharray="5,5" />
                        </svg>
                    </div>

                    {/* Right: Your Platform */}
                    <div className="schema-platform-col">
                        <div className="schema-core">
                            <div className="core-glow"></div>
                            <Server size={48} className="core-icon" />
                            <h3 className="core-title">High-Velocity Engine</h3>
                            <div className="core-tags">
                                <span>REST</span>
                                <span>gRPC</span>
                                <span>GraphQL</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default PlatformSchema;

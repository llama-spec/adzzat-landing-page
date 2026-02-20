import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Settings, Users, ShieldCheck, Zap } from 'lucide-react';
import './Accordion.css';

gsap.registerPlugin(ScrollTrigger);

const accordionData = [
    {
        id: 1,
        title: "Architecture Design",
        content: "We define structured evaluation frameworks aligned to your model objectives.",
        icon: <Settings size={48} className="model-icon" />,
        stat: "100%",
        statLabel: "Custom Scoping"
    },
    {
        id: 2,
        title: "Domain Deployment",
        content: "Experts are matched to specialization, not generic task pools.",
        icon: <Users size={48} className="model-icon" />,
        stat: "Top 1%",
        statLabel: "Domain Experts"
    },
    {
        id: 3,
        title: "Quality Control Framework",
        content: "Multi-layer validation, calibration loops, and performance monitoring.",
        icon: <ShieldCheck size={48} className="model-icon" />,
        stat: "3x",
        statLabel: "Verification Layers"
    },
    {
        id: 4,
        title: "Scalable Execution",
        content: "Rapid expansion without degradation in signal quality.",
        icon: <Zap size={48} className="model-icon" />,
        stat: "1B+",
        statLabel: "Tokens Evaluated"
    }
];

const Accordion = () => {
    const [activeItem, setActiveItem] = useState(1);
    const sectionRef = useRef(null);

    // Get active data
    const activeData = accordionData.find(item => item.id === activeItem);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.accordion-header-text', { y: 40, opacity: 0 }, {
                y: 0, opacity: 1,
                duration: 1,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%"
                }
            });

            gsap.fromTo('.acc-item', { x: -40, opacity: 0 }, {
                x: 0, opacity: 1,
                duration: 0.8,
                stagger: 0.15,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: '.accordion-list',
                    start: "top 80%"
                }
            });

            gsap.fromTo('.model-visualizer', { opacity: 0, scale: 0.95 }, {
                opacity: 1, scale: 1,
                duration: 1.5,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%"
                }
            });

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    // Animate the visualizer on state change
    useEffect(() => {
        gsap.fromTo('.model-visualizer-content',
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
        );
    }, [activeItem]);

    return (
        // Mimicking Deccan's dark section bottom
        <section className="accordion-wrapper section-wrapper" ref={sectionRef}>
            <div className="container accordion-container">

                <div className="accordion-header-text">
                    <h2 className="acc-h2">The Adzzat Model</h2>
                    <p className="acc-p">Managed Evaluation. End-to-End Execution.</p>
                </div>

                <div className="accordion-grid">

                    {/* Left: Interactive List */}
                    <div className="accordion-list">
                        {accordionData.map((item) => {
                            const isActive = activeItem === item.id;
                            return (
                                <div
                                    key={item.id}
                                    className={`acc-item ${isActive ? 'active' : ''}`}
                                    onClick={() => setActiveItem(item.id)}
                                >
                                    <h3 className="acc-item-title">{item.title}</h3>
                                    {isActive && (
                                        <div className="acc-item-content">
                                            <p>{item.content}</p>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Right: State-Reactive Visualizer */}
                    <div className="accordion-graphic-container">
                        <div className="model-visualizer float-anim">
                            <div className="model-visualizer-bg"></div>
                            <div className="model-visualizer-content" key={activeItem}>
                                <div className="visualizer-icon-wrapper">
                                    {activeData.icon}
                                </div>
                                <div className="visualizer-data">
                                    <div className="visualizer-stat">{activeData.stat}</div>
                                    <div className="visualizer-label">{activeData.statLabel}</div>
                                </div>
                                <div className="visualizer-desc">
                                    {activeData.content}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Accordion;

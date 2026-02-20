import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronRight, Target } from 'lucide-react';
import './FlowDiagram.css';

gsap.registerPlugin(ScrollTrigger);

const layers = [
    { title: "Layer 01: Inputs", items: ["Raw Unstructured Data", "User Prompts", "System Logs", "API Parameters"] },
    { title: "Layer 02: Domains", items: ["Healthcare & Pharma", "Financial Services", "Legal Documents", "Retail & E-commerce"] },
    { title: "Layer 03: Expertise", items: ["Fine-Tuning", "Prompt Engineering", "RLHF Training", "Knowledge Graphs"] },
    { title: "Layer 04: Use Cases", items: ["Conversational Agents", "Predictive Analytics", "Content Generation", "Code Synthesis"] },
];

const FlowDiagram = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });

            tl.fromTo('.layer-card',
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: 'power2.out' }
            )
                .fromTo('.flow-arrow',
                    { scale: 0, opacity: 0 },
                    { scale: 1, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'back.out(1.5)' },
                    "-=0.4"
                )
                .fromTo('.flow-outcome',
                    { y: 40, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
                    "-=0.2"
                );

        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="flow-section section-wrapper" ref={sectionRef}>
            <div className="container flow-container">
                <div className="flow-header">
                    <h2 className="flow-title">Customization Layers</h2>
                    <p className="flow-subtitle">Configure your AI stack layer by layer. From raw inputs to specialized domain expertise, control every aspect of your model's behavior with precision.</p>
                </div>

                <div className="flow-diagram-wrapper">
                    <div className="layers-track">
                        {layers.map((layer, idx) => (
                            <React.Fragment key={idx}>
                                <div className="layer-card">
                                    <h3 className="layer-title">{layer.title}</h3>
                                    <ul className="layer-list">
                                        {layer.items.map((item, i) => (
                                            <li key={i}>
                                                <ChevronRight size={14} className="list-bullet" />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                {idx < 3 && (
                                    <div className="flow-arrow">
                                        <ArrowRight size={24} className="arrow-icon" />
                                    </div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    <div className="flow-outcome">
                        <div className="outcome-icon-wrapper">
                            <Target size={32} className="outcome-icon" />
                        </div>
                        <div className="outcome-content">
                            <h3>Optimized Model</h3>
                            <p>By layering specific inputs, domain knowledge, and expert tuning, the final model achieves significantly higher accuracy and relevance for your specific business needs.</p>
                        </div>
                        <div className="outcome-metric">
                            <div className="metric-label">Improved Performance</div>
                            <div className="metric-value">94%</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FlowDiagram;

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Cpu, Zap, Lock, Code } from 'lucide-react';
import './Features.css';

const featureData = [
    {
        icon: <Cpu size={32} />,
        title: "AI-Powered Automation",
        description: "Streamline workflows and unlock new potential with adaptive machine learning models tailored to your data."
    },
    {
        icon: <Zap size={32} />,
        title: "Real-time Processing",
        description: "Experience zero latency infrastructure built on the edge, delivering instant results when every millisecond counts."
    },
    {
        icon: <Lock size={32} />,
        title: "Enterprise Security",
        description: "Military-grade encryption securing your assets end-to-end. Compliant with top global privacy frameworks."
    },
    {
        icon: <Code size={32} />,
        title: "API-First Architecture",
        description: "Integrate seamlessly with our robust developer-focused API, designed for ultimate flexibility and scale."
    }
];

const Features = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {

            const cards = gsap.utils.toArray('.feature-card');

            // Apple-style scroll trigger: cards fade and slide up as they enter viewport
            cards.forEach((card, index) => {
                gsap.from(card, {
                    y: 60,
                    opacity: 0,
                    duration: 1.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 85%", // Animation starts when top of card hits 85% of viewport height
                        toggleActions: "play none none reverse" // Play on scroll down, reverse on scroll up
                    }
                });
            });

            // Section header animation
            gsap.fromTo('.features-header', { y: 40, opacity: 0 }, { y: 0, opacity: 1, 
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: '.features-header',
                    start: "top 80%"
                }
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="features-section section-wrapper" id="services" ref={containerRef}>
            <div className="container">

                <div className="features-header text-center">
                    <h2>Engineered for Excellence</h2>
                    <p className="subtitle">Discover the technologies powering the next generation of digital infrastructure.</p>
                </div>

                <div className="features-grid">
                    {featureData.map((feature, idx) => (
                        <div className="feature-card glass" key={idx}>
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

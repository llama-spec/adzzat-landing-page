import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play } from 'lucide-react';
import './Testimonial.css';

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.testimonial-content', { y: 30, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
            });
            gsap.fromTo('.testimonial-video-container', { y: 40, opacity: 0, scale: 0.95 }, {
                y: 0, opacity: 1, scale: 1, duration: 1.2, ease: 'power3.out', delay: 0.2,
                scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="testimonial-section section-wrapper" ref={sectionRef}>
            <div className="container testimonial-container">
                <div className="testimonial-content">
                    <div className="quote-icon">“</div>
                    <h2 className="testimonial-quote">
                        Our contributor testimonials reflect structured onboarding,
                        intellectual rigor, serious evaluation workflows,
                        and high accountability standards.
                    </h2>
                    <div className="testimonial-author">
                        <div className="author-name">Contributor Culture</div>
                        <div className="author-title">The Adzzat Elite Network</div>
                    </div>
                </div>

                {/* Video Placeholder requested in copyright.md */}
                <div className="testimonial-video-container">
                    <div className="video-placeholder">
                        <div className="play-button">
                            <Play size={32} fill="currentColor" />
                        </div>
                        <p className="video-caption">Watch our contributor deep-dive (Placeholder)</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;

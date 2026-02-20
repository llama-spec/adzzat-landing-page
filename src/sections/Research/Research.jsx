import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Research.css';

gsap.registerPlugin(ScrollTrigger);

const Research = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.research-header > *', { y: 30, opacity: 0 }, {
                y: 0, opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%"
                }
            });

            // Infinite scrolling animation for the logo track
            gsap.to('.logo-track', {
                xPercent: -50,
                ease: "none",
                duration: 20,
                repeat: -1,
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="explore" className="research-section section-wrapper" ref={sectionRef}>
            <div className="container research-container">
                <div className="research-header">
                    <div className="research-title-col">
                        <h2 className="section-title-large">Built For Unicorn-Stage AI Companies</h2>
                    </div>
                    <div className="research-content-col">
                        <p className="research-desc">
                            Adzzat partners with foundation model companies, high-growth AI startups, and enterprise divisions to ensure evaluation is not commoditized.
                        </p>
                        <div className="research-links">
                            <Link to="/contact" className="r-link" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>Request Enterprise Access <ArrowRight size={16} /></Link>
                        </div>
                    </div>
                </div>

                <div className="research-slider">
                    <div className="logo-track">
                        {/* First set of text logos */}
                        <div className="r-logo">IIT Bombay</div>
                        <div className="r-logo">IIT Delhi</div>
                        <div className="r-logo">IIT Madras</div>
                        <div className="r-logo">IIT Kanpur</div>
                        <div className="r-logo">BITS Pilani</div>
                        <div className="r-logo">IISc Bangalore</div>
                        {/* Duplicate set for infinite scroll effect */}
                        <div className="r-logo">IIT Bombay</div>
                        <div className="r-logo">IIT Delhi</div>
                        <div className="r-logo">IIT Madras</div>
                        <div className="r-logo">IIT Kanpur</div>
                        <div className="r-logo">BITS Pilani</div>
                        <div className="r-logo">IISc Bangalore</div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Research;

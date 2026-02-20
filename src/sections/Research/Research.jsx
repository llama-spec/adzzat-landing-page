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
                        <div className="r-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg" alt="IIT Bombay" className="r-logo-img" />
                            <span>IIT Bombay</span>
                        </div>
                        <div className="r-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg" alt="IIT Delhi" className="r-logo-img" />
                            <span>IIT Delhi</span>
                        </div>
                        <div className="r-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg" alt="IIT Madras" className="r-logo-img" />
                            <span>IIT Madras</span>
                        </div>
                        <div className="r-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/IIT_Kanpur_Logo.svg/200px-IIT_Kanpur_Logo.svg.png" alt="IIT Kanpur" className="r-logo-img" />
                            <span>IIT Kanpur</span>
                        </div>
                        <div className="r-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/1/1c/IIT_Kharagpur_Logo.svg" alt="IIT Kharagpur" className="r-logo-img" />
                            <span>IIT Kharagpur</span>
                        </div>
                        <div className="r-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Indian_Institute_of_Technology_Roorkee_Logo.svg/250px-Indian_Institute_of_Technology_Roorkee_Logo.svg.png" alt="IIT Roorkee" className="r-logo-img" />
                            <span>IIT Roorkee</span>
                        </div>
                        <div className="r-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/1/12/IIT_Guwahati_Logo.svg" alt="IIT Guwahati" className="r-logo-img" />
                            <span>IIT Guwahati</span>
                        </div>
                        <div className="r-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg" alt="BITS Pilani" className="r-logo-img" />
                            <span>BITS Pilani</span>
                        </div>
                        <div className="r-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Indian_Institute_of_Science_2019_logo.svg/250px-Indian_Institute_of_Science_2019_logo.svg.png" alt="IISc Bangalore" className="r-logo-img" />
                            <span>IISc Bangalore</span>
                        </div>
                        {/* Duplicate set for infinite scroll effect */}
                        <div className="r-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/1/1d/Indian_Institute_of_Technology_Bombay_Logo.svg" alt="IIT Bombay" className="r-logo-img" />
                            <span>IIT Bombay</span>
                        </div>
                        <div className="r-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg" alt="IIT Delhi" className="r-logo-img" />
                            <span>IIT Delhi</span>
                        </div>
                        <div className="r-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/6/69/IIT_Madras_Logo.svg" alt="IIT Madras" className="r-logo-img" />
                            <span>IIT Madras</span>
                        </div>
                        <div className="r-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/Indian_Institute_of_Technology_Kanpur_Logo.svg" alt="IIT Kanpur" className="r-logo-img" />
                            <span>IIT Kanpur</span>
                        </div>
                        <div className="r-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/1/1c/IIT_Kharagpur_Logo.svg" alt="IIT Kharagpur" className="r-logo-img" />
                            <span>IIT Kharagpur</span>
                        </div>
                        <div className="r-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/6/6f/Indian_Institute_of_Technology_Roorkee_logo.svg" alt="IIT Roorkee" className="r-logo-img" />
                            <span>IIT Roorkee</span>
                        </div>
                        <div className="r-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/1/12/IIT_Guwahati_Logo.svg" alt="IIT Guwahati" className="r-logo-img" />
                            <span>IIT Guwahati</span>
                        </div>
                        <div className="r-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/d/d3/BITS_Pilani-Logo.svg" alt="BITS Pilani" className="r-logo-img" />
                            <span>BITS Pilani</span>
                        </div>
                        <div className="r-logo">
                            <img src="https://upload.wikimedia.org/wikipedia/en/e/e1/Indian_Institute_of_Science_logo.svg" alt="IISc Bangalore" className="r-logo-img" />
                            <span>IISc Bangalore</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Research;

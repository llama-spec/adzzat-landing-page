import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroGlobe from '../HeroGlobe';
import './Hero.css';

const Hero = () => {
    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Left side text animation
            gsap.fromTo('.hero-badge', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' });
            gsap.fromTo('.hero-title-line', { y: 40, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out', delay: 0.2
            });
            gsap.fromTo('.hero-cta', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.6 });
            gsap.fromTo('.hero-trusted', { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power3.out', delay: 0.8 });

            // Right side abstract graphic animation
            gsap.fromTo('.abstract-layer',
                { scale: 0.8, opacity: 0, rotationX: 45 },
                { scale: 1, opacity: 1, rotationX: 0, duration: 1.5, stagger: 0.2, ease: 'power3.out', delay: 0.4 }
            );

            // Floating animation for abstract graphic
            gsap.to('.abstract-graphic', {
                y: -15, duration: 3, yoyo: true, repeat: -1, ease: 'sine.inOut'
            });

        }, heroRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="hero-section" ref={heroRef}>
            <div className="container hero-container">

                {/* Left Column: Typography */}
                <div className="hero-content-left">

                    <h1 className="hero-title">
                        <div className="hero-title-line">Enterprise-Grade</div>
                        <div className="hero-title-line">AI Evaluation</div>
                        <div className="hero-title-line"><span className="text-blue">Infrastructure</span></div>
                    </h1>

                    <div className="hero-cta">
                        <Link to="/contact" className="btn btn-primary" style={{ textDecoration: 'none', display: 'inline-flex' }}>
                            Request Enterprise Access
                        </Link>
                    </div>

                    <div className="hero-trusted">
                        <p className="trusted-text">As AI companies transition from rapid growth to category leadership, evaluation becomes mission-critical.</p>
                    </div>

                </div>

                {/* Right Column: Interactive 3D Globe */}
                <div className="hero-content-right">
                    <HeroGlobe />
                </div>

            </div>
        </section>
    );
};

export default Hero;

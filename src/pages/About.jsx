import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Shield, Lightbulb, Users, CheckCircle, Target, Rocket, Globe, ArrowRight, Linkedin, Mail } from 'lucide-react';
import { useTextReveal } from '../hooks/useTextReveal';
import './About.css';

const About = () => {
    const navigate = useNavigate();
    const mainRef = useRef(null);
    useTextReveal();

    // Scroll to top and animate when page changes
    useEffect(() => {
        window.scrollTo(0, 0);
        gsap.fromTo(mainRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );
    }, []);

    return (
        <main ref={mainRef} className="about-page">
            <section className="about-hero section-wrapper">
                <div className="container">
                    <h1 className="about-title">Empowering AI with Exceptional Data</h1>
                    <p className="about-subtitle">We are building the foundational infrastructure for the next generation of artificial intelligence.</p>
                </div>
            </section>

            <section className="our-mission section-wrapper">
                <div className="container mission-container">
                    <div className="mission-content">
                        <h2 className="section-title">The Evaluation Bottleneck</h2>
                        <p className="mission-text">As artificial intelligence models scale into the trillions of parameters, the bottleneck is no longer compute—it is high-fidelity human evaluation. Adzzat was founded on the principle that institutional-grade AI requires institutional-grade data.</p>
                        <p className="mission-text">We bridge the gap between abstract research and production deployment by providing the world's most rigorous, domain-specific evaluation network.</p>
                    </div>
                    <div className="mission-stats">
                        <div className="m-stat">
                            <div className="m-stat-number">99.8%</div>
                            <div className="m-stat-label">Accuracy Standard</div>
                        </div>
                        <div className="m-stat">
                            <div className="m-stat-number">40+</div>
                            <div className="m-stat-label">PhD-Level Domains</div>
                        </div>
                        <div className="m-stat">
                            <div className="m-stat-number">24/7</div>
                            <div className="m-stat-label">Global Operations</div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="core-values section-wrapper bg-light">
                <div className="container">
                    <h2 className="section-title">Our Core Values</h2>
                    <div className="values-grid">
                        <div className="value-card hover-glow-strong">
                            <Shield className="value-icon" />
                            <h3>Uncompromising Quality</h3>
                            <p>We believe that model performance is strictly bound by data quality. We accept no shortcuts in our annotation pipelines.</p>
                        </div>
                        <div className="value-card hover-glow-strong">
                            <Lightbulb className="value-icon" />
                            <h3>Radical Innovation</h3>
                            <p>Continuous refinement of our internal tooling allows us to tackle the most complex multi-modal data challenges.</p>
                        </div>
                        <div className="value-card">
                            <Users className="value-icon" />
                            <h3>Human Centric</h3>
                            <p>Our global network of specialized domain experts is our greatest asset. We value human insight above all.</p>
                        </div>
                        <div className="value-card">
                            <CheckCircle className="value-icon" />
                            <h3>Integrity</h3>
                            <p>Transparent communication, strict data governance, and secure enterprise compliance form our foundation.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-timeline section-wrapper">
                <div className="container">
                    <h2 className="section-title text-center" style={{ textAlign: 'center' }}>The Adzzat Standard</h2>
                    <p className="timeline-subtitle">How we deliver on our promise of pristine data.</p>

                    <div className="timeline-grid">
                        <div className="timeline-step hover-glow-strong">
                            <div className="step-number">01</div>
                            <Target className="step-icon" />
                            <h3>Expert Curation</h3>
                            <p>We recruit top 1% academic and industry professionals globally, verifying credentials before any annotation begins.</p>
                        </div>
                        <div className="timeline-step hover-glow-strong">
                            <div className="step-number">02</div>
                            <Rocket className="step-icon" />
                            <h3>Platform Velocity</h3>
                            <p>Our proprietary platform minimizes friction, allowing experts to focus entirely on cognitive evaluation rather than UI hurdles.</p>
                        </div>
                        <div className="timeline-step hover-glow-strong">
                            <div className="step-number">03</div>
                            <Globe className="step-icon" />
                            <h3>Multi-Layer Verification</h3>
                            <p>Every single data point passes through automated heuristics and secondary human review to ensure absolute ground truth.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="meet-team section-wrapper bg-light">
                <div className="container">
                    <h2 className="section-title">Meet Our Leadership</h2>
                    <p className="team-subtitle">Led by industry veterans from top AI research labs and global enterprises.</p>

                    <div className="team-grid">
                        <div className="team-member hover-glow-strong">
                            <div className="member-avatar">
                                <img src="/aryan.jpeg" alt="Aryan Honawar" className="member-img" />
                            </div>
                            <h4>Aryan Honawar</h4>
                            <p>CEO & Co-Founder</p>
                            <span className="member-bio">Visionary leader driving AI innovation and data excellence. Passionate about building systems that scale and matter.</span>
                            <div className="member-socials">
                                <a href="https://www.linkedin.com/in/aryan-honawar-7919a7229/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                                <a href="mailto:aryan@adzzat.com"><Mail size={20} /></a>
                            </div>
                        </div>
                        <div className="team-member hover-glow-strong">
                            <div className="member-avatar">
                                <img src="/Nabeel.jpeg" alt="Nabeel Nensey" className="member-img" />
                            </div>
                            <h4>Nabeel Nensey</h4>
                            <p>COO & Co-Founder</p>
                            <span className="member-bio">Operations expert ensuring seamless delivery and scalability. Orchestrating the future of efficient data pipelines.</span>
                            <div className="member-socials">
                                <a href="https://www.linkedin.com/in/nabeel-nensey-b0b350209/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                                <a href="mailto:nabeel@adzzat.com"><Mail size={20} /></a>
                            </div>
                        </div>
                        <div className="team-member hover-glow-strong">
                            <div className="member-avatar">
                                <img src="/niket.jpeg" alt="Niket Singh" className="member-img" />
                            </div>
                            <h4>Niket Singh</h4>
                            <p>CTO</p>
                            <span className="member-bio">Technology leader architecting scalable AI systems. Passionate about building robust, innovative solutions.</span>
                            <div className="member-socials">
                                <a href="https://www.linkedin.com/in/niketsingh304/" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                                <a href="mailto:niket@adzzat.com"><Mail size={20} /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="join-us section-wrapper">
                <div className="container join-container">
                    <div className="join-bg"></div>
                    <div className="join-content">
                        <h2>Join the Data Revolution</h2>
                        <p>We are always looking for exceptional engineers, researchers, and domain experts to help us build the future of AI evaluation.</p>
                        <button onClick={() => navigate('/contact')} className="btn btn-primary" style={{ marginTop: '2rem' }}>
                            Get In Touch <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                        </button>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default About;

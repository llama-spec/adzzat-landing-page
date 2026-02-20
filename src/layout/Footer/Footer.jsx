import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Linkedin, Instagram, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
    const ctaRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.cta-content-wrapper > *', { y: 50, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out',
                scrollTrigger: { trigger: ctaRef.current, start: "top 75%" }
            });
        }, ctaRef);
        return () => ctx.revert();
    }, []);

    return (
        <footer id="contact" className="footer-wrapper">

            {/* Massive Dark CTA Section mirroring Deccan */}
            <div className="cta-section" ref={ctaRef}>
                <div className="cta-bg-grid"></div>
                <div className="container cta-container">
                    <div className="cta-content-wrapper">
                        <h2 className="cta-huge-title" style={{ fontSize: 'clamp(2.5rem, 4.5vw, 4rem)' }}>
                            AI Systems At Unicorn Scale<br />
                            Require <span className="text-light-blue">Institutional-Grade</span><br />
                            Evaluation Infrastructure.
                        </h2>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <Link to="/contact" className="btn btn-primary btn-large" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                                Request Enterprise Access <ArrowUpRight size={18} />
                            </Link>
                            <Link to="/contact" className="btn btn-secondary btn-large" style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}>
                                Schedule Strategic Call
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Actual Footer Navigation */}
            <div className="footer-nav-section">
                <div className="container footer-nav-container">

                    {/* Brand Column */}
                    <div className="footer-col brand-col">
                        <Link to="/" className="footer-brand" style={{ textDecoration: 'none' }}>
                            <img src="/adzzat.png" alt="Adzzat Logo" className="footer-logo" />
                            <span className="footer-brand-text">Adzzat</span>
                        </Link>
                        <p className="footer-description">
                            Adzzat partners with high-growth AI companies to design, deploy, and scale evaluation systems that match their ambition. We are evaluation infrastructure.
                        </p>
                        <div className="footer-socials">
                            <a href="https://www.linkedin.com/company/adzzat/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                                <Linkedin size={20} />
                            </a>
                            <a href="https://www.instagram.com/adzzat?igsh=MWU1d3A0NjE4NjYxOA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className="footer-col-group">
                        <div className="footer-col">
                            <h4 className="footer-heading">Company</h4>
                            <ul className="footer-links">
                                <li><Link to="/about">About Us</Link></li>
                                <li><a href="#">Research Papers</a></li>
                                <li><Link to="/contact">Security & Trust</Link></li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4 className="footer-heading">Locations</h4>
                            <ul className="footer-links">
                                <li><a href="#">Mumbai</a></li>
                                <li><a href="#">Bay Area</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

                <div className="container footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Adzzat AI. All rights reserved.</p>
                    <div className="footer-legal">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;

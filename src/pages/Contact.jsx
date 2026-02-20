import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail, MessageCircle, MapPin } from 'lucide-react';
import { useTextReveal } from '../hooks/useTextReveal';
import './Contact.css';

const Contact = () => {
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
        <main ref={mainRef} className="contact-page">
            <section className="contact-hero section-wrapper">
                <div className="container">
                    <h1 className="contact-title">Let's build your data advantage together.</h1>
                    <p className="contact-subtitle">Get in touch with our enterprise data specialists to discuss your evaluation pipeline.</p>
                </div>
            </section>

            <section className="contact-content section-wrapper">
                <div className="container contact-grid">

                    {/* Left Column: Form */}
                    <div className="contact-form-col">
                        <div className="form-card hover-glow-strong">
                            <h2 style={{
                                color: 'white'
                            }}>Contact Sales</h2>
                            <form className="adzzat-form">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="Name" required />
                                </div>
                                <div className="form-group">
                                    <label>Work Email</label>
                                    <input type="email" placeholder="Email" required />
                                </div>
                                <div className="form-group">
                                    <label>Company Name</label>
                                    <input type="text" placeholder="Company" required />
                                </div>
                                <div className="form-group">
                                    <label>How can we help?</label>
                                    <select required>
                                        <option value="">Select a topic...</option>
                                        <option value="sft">Supervised Fine-Tuning</option>
                                        <option value="rlhf">RLHF / DPO</option>
                                        <option value="eval">Model Evaluation</option>
                                        <option value="other">Other Inquiry</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea rows="4" placeholder="Tell us about your project requirements..." required></textarea>
                                </div>
                                <button type="submit" className="submit-btn">Submit Request</button>
                            </form>
                        </div>
                    </div>

                    {/* Right Column: Info & FAQ */}
                    <div className="contact-info-col">
                        <div className="info-blocks">
                            <div className="info-item">
                                <Mail className="info-icon" />
                                <div>
                                    <h3>Email Us</h3>
                                    <p>enterprise@adzzat.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <MessageCircle className="info-icon" />
                                <div>
                                    <h3>Support</h3>
                                    <p>support@adzzat.com</p>
                                </div>
                            </div>
                            <div className="info-item">
                                <MapPin className="info-icon" />
                                <div>
                                    <h3>Headquarters</h3>
                                    <p>Mumbai, India</p>
                                </div>
                            </div>
                        </div>

                        <div className="faq-section">
                            <h2>Frequently Asked Questions</h2>
                            <div className="faq-item">
                                <h4 style={{
                                    color: '#191919'
                                }}>Do you provide custom data annotation?</h4>
                                <p>Yes, we build custom pipelines specific to your domain utilizing our global network of verified experts.</p>
                            </div>
                            <div className="faq-item">
                                <h4 style={{
                                    color: '#191919'
                                }}>Are you SOC 2 compliant?</h4>
                                <p>Absolutely. We maintain strict enterprise-grade security protocols, including SOC 2 Type II and GDPR compliance.</p>
                            </div>
                            <div className="faq-item">
                                <h4 style={{
                                    color: '#191919'
                                }}>How fast can you scale a workforce?</h4>
                                <p>We can typically deploy a specialized, domain-expert workforce within 48-72 hours of project kickoff.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Contact;

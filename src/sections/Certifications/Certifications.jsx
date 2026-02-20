import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Lock, FileKey2, Building2 } from 'lucide-react';
import './Certifications.css';

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.cert-card', { y: 30, opacity: 0 }, { y: 0, opacity: 1,  duration: 0.8, stagger: 0.1, ease: 'power2.out',
                scrollTrigger: { trigger: sectionRef.current, start: "top 85%" }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="certifications-section section-wrapper" ref={sectionRef}>
            <div className="container">
                <div className="cert-header">
                    <h2>Enterprise Certifications</h2>
                </div>
                <div className="cert-grid">

                    <div className="cert-card">
                        <Shield className="cert-icon" size={40} />
                        <h3>SOC 2 Type II</h3>
                        <p>Certified for security, availability, and confidentiality.</p>
                    </div>

                    <div className="cert-card">
                        <Lock className="cert-icon" size={40} />
                        <h3>ISO 27001</h3>
                        <p>Global standard for information security management.</p>
                    </div>

                    <div className="cert-card">
                        <FileKey2 className="cert-icon" size={40} />
                        <h3>GDPR Compliant</h3>
                        <p>Strict data protection and privacy for individuals in the EU.</p>
                    </div>

                    <div className="cert-card">
                        <Building2 className="cert-icon" size={40} />
                        <h3>HIPAA Ready</h3>
                        <p>Compliant handling of sensitive patient health information.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Certifications;

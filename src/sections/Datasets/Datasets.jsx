import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Download } from 'lucide-react';
import './Datasets.css';

gsap.registerPlugin(ScrollTrigger);

const datasetData = [
    { title: "SFT | Single-Shot Text2SQL", items: "142,000 queries", type: "Open Source" },
    { title: "RLHF | Multi-turn Python QA", items: "85,000 interactions", type: "Enterprise Only" },
    { title: "SFT | Medical Image Annotations", items: "210,000 scans", type: "Partner Access" },
    { title: "DPO | Financial SEC Filings", items: "45,000 documents", type: "Enterprise Only" },
    { title: "RLHF | Advanced Math Reasoning", items: "12,000 problems", type: "Open Source" }
];

const Datasets = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.dataset-header', { y: 30, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
            });

            gsap.fromTo('.dataset-card', { x: 50, opacity: 0 }, {
                x: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
                scrollTrigger: { trigger: '.dataset-track', start: "top 80%" }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="dataset-section section-wrapper" ref={sectionRef}>
            <div className="container">
                <div className="dataset-header">
                    <h2 className="dataset-title">Pre-Built High-Signal Evaluation Sets</h2>
                    <p className="dataset-subtitle">For teams seeking acceleration, Adzzat offers curated, off-the-shelf evaluation datasets across domains structured for immediate integration.</p>
                    <a href="#" className="dataset-view-all">View all datasets <ArrowRight size={16} /></a>
                </div>

                <div className="dataset-slider-container">
                    <div className="dataset-track">
                        {datasetData.map((data, index) => (
                            <div key={index} className="dataset-card">
                                <div className="dataset-card-top">
                                    <span className="dataset-type">{data.type}</span>
                                    <Download size={20} className="dataset-download-icon" />
                                </div>
                                <div className="dataset-card-bottom">
                                    <h3 className="dataset-card-title">{data.title}</h3>
                                    <p className="dataset-card-items">{data.items}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Datasets;

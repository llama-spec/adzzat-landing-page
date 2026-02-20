import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import './Blogs.css';

gsap.registerPlugin(ScrollTrigger);

const blogData = [
    {
        tag: "Engineering",
        date: "Oct 24, 2024",
        title: "Solving Hallucinations in Financial RAG",
        desc: "How we fine-tuned open-source models to perfectly extract data from messy SEC 10-K filings using carefully curated multi-step workflows."
    },
    {
        tag: "Research",
        date: "Nov 02, 2024",
        title: "Introducing STARK: The Agent Gym",
        desc: "A deep dive into building deterministic, stateful evaluation environments entirely in-house to accurately measure agent autonomy."
    },
    {
        tag: "Company",
        date: "Dec 15, 2024",
        title: "Adzzat Partnering with Cupertino Big Tech",
        desc: "We are thrilled to announce our multi-year enterprise relationship to provide RLHF annotations at unprecedented scale."
    }
];

const Blogs = () => {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.blog-card', { y: 40, opacity: 0 }, { y: 0, opacity: 1,  duration: 0.8, stagger: 0.15, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section className="blogs-section section-wrapper" ref={sectionRef}>
            <div className="container">
                <div className="blogs-header">
                    <h2 className="blogs-title">Latest from Adzzat</h2>
                    <a href="#" className="blogs-view-all">View all articles <ArrowRight size={16} /></a>
                </div>

                <div className="blogs-grid">
                    {blogData.map((blog, idx) => (
                        <div key={idx} className="blog-card">
                            <div className="blog-meta">
                                <span className="blog-tag">{blog.tag}</span>
                                <span className="blog-date">{blog.date}</span>
                            </div>
                            <h3 className="blog-card-title">{blog.title}</h3>
                            <p className="blog-card-desc">{blog.desc}</p>
                            <div className="blog-read-more">
                                <span>Read article</span>
                                <ArrowRight className="read-more-arrow" size={16} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
    Network, SearchCode, Database, Cpu, BrainCircuit, Box,
    Workflow, Code2, LineChart, ShieldCheck, MessageSquareCode,
    Sparkles, Languages, PenTool
} from 'lucide-react';
import './Expertise.css';

gsap.registerPlugin(ScrollTrigger);

const expertiseData = [
    { id: 1, icon: <Workflow size={28} />, title: "Agentic Workflows", desc: "Building autonomous systems that plan, reason, and execute complex tasks." },
    { id: 2, icon: <PenTool size={28} />, title: "Multi-Modal Annotations", desc: "Precise labeling across text, images, video, and audio for diverse AI applications." },
    { id: 3, icon: <Code2 size={28} />, title: "Code-Gen & Debugging", desc: "Training models to write, analyze, and fix code with high accuracy." },
    { id: 4, icon: <Database size={28} />, title: "Domain Specific SFT", desc: "Customized fine-tuning for specialized industries and use cases." },
    { id: 5, icon: <BrainCircuit size={28} />, title: "Advanced Reasoning", desc: "Enhancing model capabilities to solve multi-step problems logically." },
    { id: 6, icon: <MessageSquareCode size={28} />, title: "Multi-Turn Conversation", desc: "Crafting natural dialogue flows with context retention and coherence." },
    { id: 7, icon: <SearchCode size={28} />, title: "Text-To-SQL", desc: "Converting natural language queries into accurate database commands." },
    { id: 8, icon: <Sparkles size={28} />, title: "RAG Training & Eval", desc: "Optimizing retrieval-augmented generation for knowledge-intensive tasks." },
    { id: 9, icon: <LineChart size={28} />, title: "Model Evaluation", desc: "Rigorous testing and benchmarking to ensure model performance and reliability." },
    { id: 10, icon: <Languages size={28} />, title: "Indic Language Work", desc: "Specialized expertise in Indian languages for inclusive AI solutions." }
];

const Expertise = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.expertise-card', { y: 40, opacity: 0 }, {
                y: 0, opacity: 1,
                duration: 0.8,
                stagger: 0.05,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%"
                }
            });
        }, gridRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="about" className="expertise-section section-wrapper">
            <div className="container expertise-container" ref={gridRef}>
                <div className="expertise-header">
                    <h2 className="expertise-title">Deep Expertise</h2>
                    <p className="expertise-subtitle">Mastering the complexities of modern AI with precision and scale.</p>
                </div>

                <div className="expertise-grid">
                    {expertiseData.map(item => (
                        <div key={item.id} className="expertise-card">
                            <div className="expertise-icon">
                                {item.icon}
                            </div>
                            <h3 className="expertise-card-title">{item.title}</h3>
                            <p className="expertise-card-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expertise;

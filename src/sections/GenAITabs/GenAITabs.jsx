import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Terminal, Database, Sparkles, MessageSquareCode } from 'lucide-react';
import './GenAITabs.css';

gsap.registerPlugin(ScrollTrigger);

const tabData = [
    {
        id: 'agents',
        title: "Autonomous Agents",
        description: "Orchestrate complex workflows with agentic trails.",
        icon: <Terminal size={20} />,
        codeSnippet: `[ID: xf-9283-opt-cloud-v4] [Status: Active]
> Tasks: Optimize multi-cloud resource allocation.
> Input Context: 124ms (Cluster: aws-us-east)

Analyzing Workload...
[Analysis Output]:
{
  "spike_probability": 0.87,
  "recommended_scaling": "horizontal"
}

[System Notification]: Warning - Node Failure.
[Auto-Recovery]: Re-routing to standby node. `
    },
    {
        id: 'rlhf',
        title: "RLHF Calibration",
        description: "Prevent pipelines from losing calibration at scale.",
        icon: <Database size={20} />,
        codeSnippet: "function checkCalibration(model) {\n  return model.evaluate();\n}"
    },
    {
        id: 'rag',
        title: "RAG Systems",
        description: "Eliminate edge-case hallucinations in retrieval.",
        icon: <Sparkles size={20} />,
        codeSnippet: "const qa = await RAG.query(docs, 'edge case prompt');\nassert(qa.isVerified);"
    },
    {
        id: 'multimodal',
        title: "Cross-Modal",
        description: "Ensure systems don't break under contextual complexity.",
        icon: <MessageSquareCode size={20} />,
        codeSnippet: "Image.analyze(feed);\nVision.detect('anomalies', config.strict);"
    }
];

const featureChips = [
    "Autonomous Agents", "Cross-Modal", "Software Engineering",
    "Text-To-SQL", "Benchmarking", "RAG", "RLHF", "Voice"
];

const GenAITabs = () => {
    const [activeTab, setActiveTab] = useState(tabData[0].id);
    const [displayedCode, setDisplayedCode] = useState('');
    const sectionRef = useRef(null);
    const typingTimeoutRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.genai-header', { y: 40, opacity: 0 }, {
                y: 0, opacity: 1, duration: 1, ease: 'power3.out',
                scrollTrigger: { trigger: sectionRef.current, start: "top 80%" }
            });
            gsap.fromTo('.feature-chip', { scale: 0.8, opacity: 0 }, {
                scale: 1, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'back.out(1.7)',
                scrollTrigger: { trigger: '.genai-chips-container', start: "top 85%" }
            });
            gsap.fromTo('.genai-tab-item', { x: 40, opacity: 0 }, {
                x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out',
                scrollTrigger: { trigger: '.genai-tabs-list', start: "top 80%" }
            });
            gsap.fromTo('.genai-visual-container', { opacity: 0, scale: 0.95 }, {
                opacity: 1, scale: 1, duration: 1, ease: 'power2.out',
                scrollTrigger: { trigger: '.genai-content', start: "top 70%" }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const activeData = tabData.find(t => t.id === activeTab);

    // Typing effect logic
    useEffect(() => {
        if (typingTimeoutRef.current) {
            clearTimeout(typingTimeoutRef.current);
        }

        const fullText = activeData.codeSnippet;
        setDisplayedCode('');
        let currentIndex = 0;

        const typeChar = () => {
            if (currentIndex < fullText.length) {
                setDisplayedCode(prev => prev + fullText.charAt(currentIndex));
                currentIndex++;
                typingTimeoutRef.current = setTimeout(typeChar, 10); // Sped up for longer terminal output
            }
        };

        typingTimeoutRef.current = setTimeout(typeChar, 200);

        return () => {
            if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
        };
    }, [activeTab]);

    return (
        <section className="genai-section section-wrapper" ref={sectionRef}>
            <div className="container genai-container">

                <div className="genai-header">
                    <h2 className="genai-title">Enterprise Grade <span style={{
                        color: '#162199ff'
                    }}>Generative Capabilities</span></h2>
                    <p className="genai-subtitle">Advanced AI solutions built for scale, performance, and reliability. Orchestrate complex workflows with precision.</p>

                    <div className="genai-chips-container">
                        {featureChips.map((chip, index) => (
                            <span key={index} className="feature-chip">{chip}</span>
                        ))}
                    </div>
                </div>

                <div className="genai-content">

                    {/* Left side: Visualizer */}
                    <div className="genai-visual-container">
                        <div className="genai-visual-window">
                            <div className="window-header">
                                <span className="dot dot-red"></span>
                                <span className="dot dot-yellow"></span>
                                <span className="dot dot-green"></span>
                                <span className="window-title">agentic_trail_{activeData.id}.log</span>
                            </div>
                            <div className="window-body">
                                <pre className="code-block" key={activeTab}>
                                    <code>
                                        {displayedCode}
                                        <span className="blinking-cursor">|</span>
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>

                    {/* Right side: Interactive Tabs */}
                    <div className="genai-tabs-list">
                        {tabData.map(tab => (
                            <div
                                key={tab.id}
                                className={`genai-tab-item ${activeTab === tab.id ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                <div className="tab-icon-wrapper">{tab.icon}</div>
                                <div className="tab-text-content">
                                    <h3 className="tab-title">{tab.title}</h3>
                                    <p className="tab-desc">{tab.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GenAITabs;

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import Accordion from '../sections/Accordion';
import Expertise from '../sections/Expertise';
import GenAITabs from '../sections/GenAITabs';
import FlowDiagram from '../sections/FlowDiagram';
import PlatformSchema from '../sections/PlatformSchema';
import Pillars from '../sections/Pillars';
import Certifications from '../sections/Certifications';
import Testimonial from '../sections/Testimonial';
import Blogs from '../sections/Blogs';
import { useTextReveal } from '../hooks/useTextReveal';

const Home = () => {
    const mainRef = useRef(null);
    useTextReveal();

    useEffect(() => {
        gsap.fromTo(mainRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );
    }, []);

    return (
        <main ref={mainRef}>
            <Hero />
            <Stats />
            <Accordion />
            <Expertise />
            <GenAITabs />
            <FlowDiagram />
            <PlatformSchema />
            <Pillars />
            <Certifications />
            <Testimonial />
            <Blogs />
        </main>
    );
};

export default Home;

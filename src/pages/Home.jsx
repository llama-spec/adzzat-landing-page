import React from 'react';
import Hero from '../sections/Hero';
import Stats from '../sections/Stats';
import Accordion from '../sections/Accordion';
import Expertise from '../sections/Expertise';
import GenAITabs from '../sections/GenAITabs';
import FlowDiagram from '../sections/FlowDiagram';
import PlatformSchema from '../sections/PlatformSchema';
import Pillars from '../sections/Pillars';
import Certifications from '../sections/Certifications';
import Blogs from '../sections/Blogs';

const Home = () => {
    return (
        <main>
            <Hero />
            <Stats />
            <Accordion />
            <Expertise />
            <GenAITabs />
            <FlowDiagram />
            <PlatformSchema />
            <Pillars />
            <Certifications />
            <Blogs />
        </main>
    );
};

export default Home;

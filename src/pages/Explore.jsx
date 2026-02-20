import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Datasets from '../sections/Datasets';
import Research from '../sections/Research';
import { useTextReveal } from '../hooks/useTextReveal';

const Explore = () => {
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
        <main ref={mainRef} className="explore-page" style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <Research />
            <Datasets />
        </main>
    );
};

export default Explore;

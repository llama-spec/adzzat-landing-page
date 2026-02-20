import React, { useEffect } from 'react';
import Datasets from '../sections/Datasets';
import Research from '../sections/Research';

const Explore = () => {
    // Scroll to top when page changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="explore-page" style={{ paddingTop: '80px', minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            <Research />
            <Datasets />
        </main>
    );
};

export default Explore;

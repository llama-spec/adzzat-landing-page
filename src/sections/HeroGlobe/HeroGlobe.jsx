import React, { useEffect, useRef } from "react";
import createGlobe from "cobe";
import "./HeroGlobe.css";

const HeroGlobe = () => {
    const canvasRef = useRef();

    useEffect(() => {
        let phi = 0;
        let width = 0;
        const onResize = () => canvasRef.current && (width = canvasRef.current.offsetWidth);
        window.addEventListener('resize', onResize);
        onResize();

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: width * 2,
            height: width * 2,
            phi: 0,
            theta: 0.3,
            dark: 0,
            diffuse: 1.2,
            scale: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [1, 1, 1],
            markerColor: [79 / 255, 70 / 255, 229 / 255], // Indigo accent
            glowColor: [1.1, 1.1, 1.1],
            markers: [
                { location: [37.7749, -122.4194], size: 0.1 },  // SF
                { location: [40.7128, -74.0060], size: 0.1 },   // NY
                { location: [51.5074, -0.1278], size: 0.1 },    // London
                { location: [28.6139, 77.2090], size: 0.1 },    // Delhi
                { location: [35.6762, 139.6503], size: 0.08 },  // Tokyo
                { location: [-33.8688, 151.2093], size: 0.08 }, // Sydney
                { location: [48.8566, 2.3522], size: 0.06 },    // Paris
                { location: [1.3521, 103.8198], size: 0.08 },   // Singapore
                { location: [31.2304, 121.4737], size: 0.1 },   // Shanghai
                { location: [-23.5505, -46.6333], size: 0.06 }, // Sao Paulo
                { location: [19.0760, 72.8777], size: 0.1 },    // Mumbai
                { location: [55.7558, 37.6173], size: 0.06 },   // Moscow
                { location: [25.2048, 55.2708], size: 0.08 },   // Dubai
                { location: [37.5665, 126.9780], size: 0.08 },  // Seoul
                { location: [-34.6037, -58.3816], size: 0.05 }, // Buenos Aires
                { location: [52.5200, 13.4050], size: 0.06 },   // Berlin
                { location: [39.9042, 116.4074], size: 0.1 },   // Beijing
                { location: [43.6510, -79.3470], size: 0.07 },  // Toronto
                { location: [13.0827, 80.2707], size: 0.07 },   // Chennai
                { location: [12.9716, 77.5946], size: 0.09 },   // Bangalore
                { location: [22.3193, 114.1694], size: 0.08 },  // Hong Kong
                { location: [30.0444, 31.2357], size: 0.05 },   // Cairo
                { location: [-1.2921, 36.8219], size: 0.05 },   // Nairobi
                { location: [14.5995, 120.9842], size: 0.06 }   // Manila
            ],
            onRender: (state) => {
                // Called on every animation frame.
                // `state` will be an empty object, return updated params.
                state.phi = phi;
                phi += 0.005;
                state.width = width * 2;
                state.height = width * 2;
            },
        });

        setTimeout(() => canvasRef.current.style.opacity = '1');

        return () => {
            globe.destroy();
            window.removeEventListener('resize', onResize);
        }
    }, []);

    return (
        <div className="hero-globe-container">
            <canvas
                ref={canvasRef}
                style={{
                    width: '100%',
                    height: '100%',
                    contain: 'layout paint size',
                    opacity: 0,
                    transition: 'opacity 1s ease',
                }}
            />
        </div>
    );
};

export default HeroGlobe;

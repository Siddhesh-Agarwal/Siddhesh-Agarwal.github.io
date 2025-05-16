"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function Timeline({ elements }: { elements: JSX.Element[] }) {
    const [scrollProgress, setScrollProgress] = useState(0);
    const timelineRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return;

            const timelineElement = timelineRef.current;
            const { top, height } = timelineElement.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Calculate how much of the timeline is visible
            const visibleHeight = Math.min(windowHeight - top, height);
            const scrollPercentage = Math.max(0, Math.min(1,
                (windowHeight - top) / (height + windowHeight)
            ));

            setScrollProgress(scrollPercentage);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial call to set progress

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (elements === null || elements.length === 0) {
        return null;
    }

    return (
        <div
            ref={timelineRef}
            className="relative pl-6 before:absolute before:left-2 before:top-0 before:bottom-0 before:w-0.5 before:bg-foreground"
        >
            {/* Scrolling beam overlay */}
            <div
                className="absolute left-2 top-0 w-0.5 bg-accent transition-all duration-100 ease-out"
                style={{
                    height: `${scrollProgress * 100}%`,
                    transformOrigin: 'top',
                }}
            />

            {elements.map((element, index) => (
                <div
                    key={index}
                    className="relative pb-6"
                >
                    <div
                        className={`absolute -left-6 top-0 w-4 h-4 ${(index / (elements.length)) < scrollProgress ? "bg-accent" : "bg-white"} border-2 border-accent rounded-full`}
                    />
                    <div className="timeline-content pl-4">
                        {element}
                    </div>
                </div>
            ))}
        </div>
    );
}
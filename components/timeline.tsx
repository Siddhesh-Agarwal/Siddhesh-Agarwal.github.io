"use client";

import React, { useState, useEffect, useRef } from 'react';

export default function Timeline({ elements }: { elements: JSX.Element[] }) {
    const [scrollProgress, setScrollProgress] = useState(0)
    const timelineRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            if (!timelineRef.current) return

            const timelineElement = timelineRef.current
            const rect = timelineElement.getBoundingClientRect()
            const windowHeight = window.innerHeight

            // Calculate how much of the timeline is visible
            const timelineTop = rect.top
            const timelineHeight = rect.height

            // Calculate progress (0 to 1)
            let progress = 0

            if (timelineTop < windowHeight) {
                const visibleHeight = Math.min(windowHeight - timelineTop, timelineHeight)
                progress = Math.max(0, visibleHeight / timelineHeight)
            }

            // Ensure progress doesn't exceed 1
            progress = Math.min(progress, 1)

            setScrollProgress(progress)
        }

        // Initial calculation
        handleScroll()

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll, { passive: true })
        window.addEventListener("resize", handleScroll, { passive: true })

        return () => {
            window.removeEventListener("scroll", handleScroll)
            window.removeEventListener("resize", handleScroll)
        }
    }, [])

    return (
        <div ref={timelineRef} className="relative">
            {/* Static timeline line */}
            <div className="absolute left-4 top-4 w-0.5 bg-border" style={{ height: `calc(100% - 2rem)` }} />

            {/* Dynamic progress line that follows scroll */}
            <div
                className="absolute left-4 top-4 w-0.5 bg-primary transition-all duration-150 ease-out z-10"
                style={{
                    height: `calc((100% - 2rem) * ${scrollProgress})`,
                    boxShadow: "0 0 8px rgba(59, 130, 246, 0.5)",
                }}
            />

            {elements.map((item, index) => (
                <div key={index} className="relative flex items-start group">
                    {/* Timeline dot */}
                    <div
                        className={`relative z-20 flex items-center justify-center w-8 h-8 bg-background border-2 rounded-full shrink-0 transition-colors duration-300 ${scrollProgress > (index + 0.5) / elements.length ? "border-primary" : "border-border"
                            }`}
                    >
                        <div
                            className={`w-3 h-3 rounded-full transition-colors duration-300 ${scrollProgress > (index + 0.5) / elements.length ? "bg-primary" : "bg-border"
                                }`}
                        />
                    </div>

                    {/* Content */}
                    <div className="ml-6 pb-8 flex-1 min-w-0">{item}</div>
                </div>
            ))}
        </div>
    )
}
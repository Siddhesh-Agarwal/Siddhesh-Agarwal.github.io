import { cn } from "@/lib/utils";
import { useState } from "react";
import { FaLink } from "react-icons/fa6";

export default function HoverText({ text, link, className }: { text: string, link: string, className: string }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className={cn("hover:underline", className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {text} {isHovered && <FaLink className="inline ml-1" />}
        </a>
    )
}
import Link from "next/link";
import { Dock, DockIcon } from "./ui/dock";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import ModeToggle from "./mode";
import { SocialLink } from "@/types/Utils";

function DocNavLinkButton({ link, target }: { link: SocialLink, target: "_self" | "_blank" }) {
    return (
        <DockIcon className="p-1">
            <Tooltip>
                <TooltipTrigger asChild>
                    <Link href={link.link} target={target}>
                        <Button variant={"ghost"} size={"icon"}>
                            <link.icon className="text-black dark:text-white size-3 md:size-4" />
                        </Button>
                    </Link>
                </TooltipTrigger>
                <TooltipContent>
                    <p>{link.name}</p>
                </TooltipContent>
            </Tooltip>
        </DockIcon>
    )
}

export default function DockNav({ sectionNav, socialLinks }: { sectionNav: SocialLink[], socialLinks: SocialLink[] }) {
    return (
        <Dock direction="middle" className="z-50 pointer-events-auto relative flex min-h-full h-full bg-transparent items-center px-0 md:px-2 bg-opacity-75">
            {
                sectionNav.map((value: SocialLink, index: number) => (
                    <DocNavLinkButton link={value} key={index} target="_self" />
                ))
            }
            <Separator orientation="vertical" className="h-full" />
            {
                socialLinks.map((value: SocialLink, index: number) => (
                    <DocNavLinkButton link={value} key={index} target="_blank" />
                ))
            }
            <Separator orientation="vertical" className="h-full" />
            <DockIcon>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <ModeToggle />
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Theme</p>
                    </TooltipContent>
                </Tooltip>
            </DockIcon>
        </Dock>
    )
}
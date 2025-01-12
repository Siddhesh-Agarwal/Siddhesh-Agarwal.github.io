import { formatDate } from "@/lib/utils"
import { LinkInfo, Project } from "@/types/utils"
import { LayoutGroup, motion } from "motion/react"
import Link from "next/link"

function ProjectTag({ tag }: { tag: string }) {
    return (
        <span className="bg-gray-200 dark:bg-slate-800 font-mono text-gray-950 dark:text-gray-50 px-2 py-1 rounded-sm border">
            {tag}
        </span>
    )
}

function ProjectLink({ link }: { link: LinkInfo }) {
    return (
        <Link href={link.url} target="_blank" rel="noreferrer" className="text-accent hover:underline font-normal hover:font-bold px-0 md:px-1">
            {`${link.name} =>`}
        </Link>
    )
}

function ProjectCard({ data }: { data: Project }) {
    // Animate the card to come from the left on scroll and expand 1.1x on hover
    return (
        <motion.div
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col md:flex-row bg-card rounded-lg border border-gray-950 p-4 shadow-lg overflow-x-hidden"
        >
            {/* Display dat in MM-YYYY format i.e. add padding to make 6-2023 to 06-2023 */}
            <div className="text-gray-500 dark:text-gray-400 text-lg md:text-2xl mr-4">
                {formatDate(data.date)}
            </div>
            <div className="flex flex-col gap-2">
                {/* Title */}
                <h2 className="text-lg md:text-2xl font-bold dark:text-gray-50">{data.name}</h2>

                {/* Description */}
                <p className="text-md md:text-lg dark:text-gray-50 text-wrap md:text-justify">
                    {data.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-row gap-2 text-xs flex-wrap">
                    {
                        data.tags.map((tag: string, index: number) => (
                            <ProjectTag tag={tag} key={index} />
                        ))
                    }
                </div>

                {/* Links */}
                <div className="flex gap-6 items-center text-wrap font-semibold">
                    {
                        data.links.map((linkObj: LinkInfo, index: number) => (
                            <ProjectLink link={linkObj} key={index} />
                        ))
                    }
                </div>
            </div>
        </motion.div>
    )
}

export default function ProjectsSection({ details }: { details: Project[] }) {
    // Sort the tools by date
    details.sort((a, b) => {
        if (a.date.year === b.date.year) {
            return b.date.month - a.date.month
        }
        return b.date.year - a.date.year
    })

    return (
        <div className="flex flex-col gap-4 w-full mx-auto">
            <h1 className="text-4xl font-bold mb-6 semibold text-center dark:text-gray-50">
                Check out my latest work
            </h1>
            <h2 className="text-xl text-center">
                I have worked on a variety of projects ranging over different tech stacks and topics. Here are few of my favorites.
            </h2>
            <LayoutGroup>
                {
                    details.map((tool: Project, index: number) => (
                        <ProjectCard key={index} data={tool} />
                    ))
                }
            </LayoutGroup>
        </div>
    )
}
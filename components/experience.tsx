import { formatDate } from "@/lib/utils";
import { ExperienceDetail } from "@/types/Utils";
import { FaBuilding, FaCalendar, FaLocationDot } from "react-icons/fa6"
import ShineBorder from "./ui/shine-border";
import Timeline from "./timeline";

function ExperienceCard({ detail }: { detail: ExperienceDetail }) {
    return (
        <ShineBorder
            className="flex flex-row p-0 w-full rounded"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
            <div className="dark:text-white p-4 rounded shadow-lg bg-card w-full">
                <h3 className="font-bold mb-3 text-lg">{detail.position}</h3>
                <div className="flex py-1">
                    <FaBuilding className="mr-1" />
                    <p className="text-sm">
                        {detail.company}
                    </p>
                </div>
                <div className="flex py-1">
                    <FaCalendar className="mr-1" />
                    <p className="text-xs text-gray-700 dark:text-gray-200">
                        {formatDate(detail.startDate)} - {detail.endDate === "Current" ? "Current" : formatDate(detail.endDate)}
                    </p>
                </div>
                <div className="flex py-1">
                    <FaLocationDot className="mr-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-200">{detail.location}</p>
                </div>
                {
                    detail.desc && (
                        <div className="flex py-1 px-4 mt-2">
                            <p className="text-sm text-gray-700 dark:text-gray-200 w-full text-wrap">
                                {detail.desc}
                            </p>
                        </div>
                    )
                }
            </div>
        </ShineBorder>
    )
}

function ExperienceTimeline({ details }: { details: ExperienceDetail[] }) {
    // Sort the array
    const elements: JSX.Element[] = details.toSorted((a, b) => {
        if (a.startDate.year === b.startDate.year) {
            return b.startDate.month - a.startDate.month
        }
        return b.startDate.year - a.startDate.year
    }).map((detail, index) => <ExperienceCard detail={detail} key={index} />)

    return (
        <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
            {/* Vertical timeline line */}
            <Timeline elements={elements} />
        </div>
    );
}

export default function ExperienceSection({ details }: { details: ExperienceDetail[] }) {
    return (
        <div className="flex flex-col gap-4 w-full mx-auto">
            <h1 className="text-5xl font-sans text-center font-bold mb-6 semibold">
                My Experience
            </h1>
            <ExperienceTimeline details={details} />
        </div>
    )
}
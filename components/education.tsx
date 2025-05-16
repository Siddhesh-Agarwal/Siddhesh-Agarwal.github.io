import { EducationDetails } from "@/types/Utils";
import Timeline from "./timeline";
import ShineBorder from "./ui/shine-border";
import { FaCalendar, FaLocationDot, FaScroll } from "react-icons/fa6";
import { formatDate } from "@/lib/utils";
import HoverText from "./hoverText";

function EducationCard({ detail }: { detail: EducationDetails }) {
    return (
        <ShineBorder
            className="flex flex-row p-0 w-full rounded"
            color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
            <div className="p-4 rounded shadow-lg bg-card w-full">
                {/* <a className="font-bold mb-3 text-lg hover:underline" href={detail.instituteUrl} target="_blank" rel="noreferrer">
                    {detail.instituteName}
                </a> */}
                <HoverText
                    link={detail.instituteUrl}
                    text={detail.instituteName}
                    className="font-bold text-lg"
                />
                <div className="flex py-1 mt-4">
                    <FaScroll className="mr-2" />
                    <p className="text-xs text-gray-800 dark:text-gray-100">
                        {detail.degree}
                    </p>
                </div>
                <div className="flex py-1">
                    <FaCalendar className="mr-2" />
                    <p className="text-xs text-gray-700 dark:text-gray-200">
                        {formatDate(detail.startDate)} - {formatDate(detail.endDate)}
                    </p>
                </div>
                <div className="flex py-1">
                    <FaLocationDot className="mr-2" />
                    <p className="text-xs text-gray-700 dark:text-gray-200">
                        {detail.instituteLocation}
                    </p>
                </div>

            </div>
        </ShineBorder>
    )
}

export default function EducationSection({ details }: { details: EducationDetails[] }) {
    const elements: JSX.Element[] = details.toSorted((a, b) => {
        if (a.startDate.year === b.startDate.year) {
            return b.startDate.month - a.startDate.month
        }
        return b.startDate.year - a.startDate.year
    }).map((detail, index) => <EducationCard detail={detail} key={index} />);

    return (
        <div className="flex flex-col gap-4 w-full mx-auto">
            <h1 className="text-5xl font-sans text-center font-bold mb-6 semibold">
                My Education
            </h1>
            <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
                {/* Vertical timeline line */}
                <Timeline elements={elements} />
            </div>
        </div>
    )
}
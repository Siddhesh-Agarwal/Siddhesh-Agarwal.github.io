import { cn, formatDate } from "@/lib/utils";
import { ExperienceDetail } from "@/types/Utils";
import { FaBuilding, FaCalendar, FaLocationDot } from "react-icons/fa6"

function ExperienceCard({ detail }: { detail: ExperienceDetail }) {
    return (
        <div className="w-full">
            <div className="bg-card dark:text-white p-4 rounded shadow-lg">
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
                        {formatDate(detail.startDate)} - {formatDate(detail.endDate)}
                    </p>
                </div>
                <div className="flex py-1">
                    <FaLocationDot className="mr-1" />
                    <p className="text-sm text-gray-700 dark:text-gray-200">{detail.location}</p>
                </div>
            </div>
        </div>
    )
}

function ExperienceTimeline({ details }: { details: ExperienceDetail[] }) {
    // Sort the array
    details.sort((a, b) => {
        if (a.startDate.year === b.startDate.year) {
            return b.startDate.month - a.startDate.month
        }
        return b.startDate.year - a.startDate.year
    })

    return (
        <div className="relative wrap overflow-hidden p-10 h-full">
            {/* Vertical timeline line */}
            <div className="absolute border-2 border-gray-300 h-full transform"></div>

            {
                details.map((detail, index) => (
                    <div key={index} className="mb-10 flex justify-between w-full">
                        {/* Marker */}
                        <div className="z-20 flex bg-primary w-8 h-8 rounded-full -translate-x-4" />
                        {/* You can add an icon here */}
                        {/* </div> */}
                        {/* Card */}
                        <ExperienceCard detail={detail} />
                    </div>
                ))
            }
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
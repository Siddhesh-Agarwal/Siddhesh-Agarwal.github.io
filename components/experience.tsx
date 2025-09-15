import { FaBuilding, FaCalendar, FaLocationDot } from "react-icons/fa6";
import { formatDate } from "@/lib/utils";
import type { ExperienceDetail } from "@/types/Utils";
import Timeline from "./timeline";
import ShineBorder from "./ui/shine-border";

function ExperienceCard({ detail }: { detail: ExperienceDetail }) {
  return (
    <ShineBorder
      className="flex flex-row p-0 w-full rounded shadow-lg"
      color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
    >
      <div className="p-4 rounded bg-card w-full flex flex-col gap-3">
        <h3 className="font-bold text-lg">{detail.position}</h3>
        <div className="flex flex-col gap-2">
          <a href={detail.company?.website} className="flex">
            <FaBuilding className="mr-2" />
            <p className="text-xs text-muted-foreground">
              {detail.company.name}
            </p>
          </a>
          <div className="flex">
            <FaCalendar className="mr-2" />
            <p className="text-xs text-muted-foreground">
              {formatDate(detail.startDate)} -{" "}
              {detail.endDate === "Current"
                ? "Current"
                : formatDate(detail.endDate)}
            </p>
          </div>
          <div className="flex">
            <FaLocationDot className="mr-2" />
            <p className="text-xs text-muted-foreground">{detail.location}</p>
          </div>
        </div>
        {detail.desc && (
          <p className="text-sm text-card-foreground text-justify">
            {detail.desc}
          </p>
        )}
      </div>
    </ShineBorder>
  );
}

export default function ExperienceSection({
  details,
}: {
  details: ExperienceDetail[];
}) {
  const elements: JSX.Element[] = details
    .toSorted((a, b) => {
      if (a.startDate.year === b.startDate.year) {
        return b.startDate.month - a.startDate.month;
      }
      return b.startDate.year - a.startDate.year;
    })
    .map((detail) => (
      <ExperienceCard
        detail={detail}
        key={`${detail.company}-${detail.position}-${detail.startDate.year}`}
      />
    ));
  return (
    <div className="flex flex-col gap-4 w-full mx-auto">
      <h1 className="text-5xl font-sans text-center font-bold mb-6 semibold">
        My Experience
      </h1>
      <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
        <Timeline elements={elements} />
      </div>
    </div>
  );
}

import { FaBuilding, FaCalendar, FaLocationDot } from "react-icons/fa6";
import Timeline from "@/components/timeline";
import { formatDate } from "@/lib/date";
import type { ExperienceDetail } from "@/types";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { ShineBorder } from "../ui/shine-border";

function ExperienceCard({ detail }: { detail: ExperienceDetail }) {
	return (
		<Card className="relative">
			<ShineBorder shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]} />
			<CardContent className="flex flex-col gap-3">
				<CardTitle>{detail.position}</CardTitle>
				<div className="flex flex-col gap-2">
					<a href={detail.company?.website || "#"} className="flex gap-2">
						<FaBuilding />
						<p className="text-xs text-muted-foreground">
							{detail.company.name}
						</p>
					</a>
					<div className="flex gap-2">
						<FaCalendar />
						<p className="text-xs text-muted-foreground">
							{formatDate(detail.startDate)} -{" "}
							{detail.endDate === "Current"
								? "Current"
								: formatDate(detail.endDate)}
						</p>
					</div>
					<div className="flex gap-2">
						<FaLocationDot />
						<p className="text-xs text-muted-foreground">{detail.location}</p>
					</div>
				</div>
				{detail.desc && (
					<p className="text-sm text-card-foreground text-justify">
						{detail.desc}
					</p>
				)}
			</CardContent>
		</Card>
	);
}

export default function ExperienceSection({
	details,
}: {
	details: ExperienceDetail[];
}) {
	const elements = details
		.sort((a, b) => {
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

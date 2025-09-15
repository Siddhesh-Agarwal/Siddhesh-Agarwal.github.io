"use client";

import { LayoutGroup, motion } from "motion/react";
import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { LinkInfo, Project } from "@/types/Utils";

function ProjectTag({ tag }: { tag: string }) {
  return (
    <span className="bg-muted font-mono text-muted-foreground/80 hover:text-muted-foreground px-2 py-1 rounded-sm border border-border cursor-default">
      {tag}
    </span>
  );
}

function ProjectLink({ link }: { link: LinkInfo }) {
  return (
    <Link
      href={link.url}
      target="_blank"
      rel="noreferrer"
      className="text-accent hover:underline font-normal hover:font-bold px-0 md:px-1"
    >
      {`${link.name} =>`}
    </Link>
  );
}

function ProjectCard({ data }: { data: Project }) {
  return (
    <motion.div
      transition={{ duration: 0.5, delay: 0.5 }}
      className="flex flex-col md:flex-row w-full bg-card md:rounded-lg border p-4 shadow-lg overflow-x-hidden"
    >
      <div className="text-muted-foreground text-lg md:text-2xl mr-4">
        {formatDate(data.date)}
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-lg md:text-2xl font-bold">{data.name}</h2>
        <p className="text-md md:text-lg text-wrap md:text-justify">
          {data.desc}
        </p>
        <div className="flex flex-row gap-2 text-xs flex-wrap">
          {data.tags.map((tag: string) => (
            <ProjectTag tag={tag} key={tag} />
          ))}
        </div>
        <div className="flex gap-6 items-center text-wrap font-semibold">
          {data.links.map((linkObj: LinkInfo) => (
            <ProjectLink link={linkObj} key={linkObj.name} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection({ details }: { details: Project[] }) {
  details.sort((a, b) => {
    if (a.date.year === b.date.year) {
      return b.date.month - a.date.month;
    }
    return b.date.year - a.date.year;
  });

  return (
    <div className="flex flex-col gap-4 w-full mx-auto px-4">
      <h1 className="text-4xl font-bold mb-6 semibold text-center text-foreground/90">
        Check out my latest work
      </h1>
      <h2 className="text-xl text-center text-foreground/75">
        I have worked on a variety of projects ranging over different tech
        stacks and topics. Here are few of my favorites.
      </h2>
      <LayoutGroup>
        {details.map((tool: Project) => (
          <ProjectCard key={tool.name} data={tool} />
        ))}
      </LayoutGroup>
    </div>
  );
}

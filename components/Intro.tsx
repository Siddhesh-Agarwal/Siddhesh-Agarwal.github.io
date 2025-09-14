import Image from "next/image";
import MyPic from "@/assets/me.jpg";
import type { ToolLink } from "@/types/Utils";
import { OrbitingCircles } from "./ui/orbiting-circles";
import TypingAnimation from "./ui/typing-animation";

function ConcentricCircle({
  similarLinks,
  reverse,
  radius,
  speed,
}: {
  similarLinks: ToolLink[];
  reverse: boolean;
  radius: number;
  speed: number;
}) {
  return (
    <OrbitingCircles reverse={reverse} radius={radius} speed={speed} path>
      {similarLinks.map((similarLink: ToolLink) => (
        <div
          className="m-2 text-primary font-semibold inline-block text-xl w-fit cursor-pointer"
          key={similarLink.name}
          title={similarLink.name}
        >
          <similarLink.icon className="inline-block" />
        </div>
      ))}
    </OrbitingCircles>
  );
}

function ConcentricCircles({
  text,
  links,
}: {
  text: string;
  links: ToolLink[][];
}) {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-6xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        {text}
      </span>
      {links.map((similarLinks, index) => {
        const reverse: boolean = index % 2 === 0;
        const radius: number = 64 * (1 + index);
        const speed: number = 0.5 * (2 + index);
        return (
          <ConcentricCircle
            key={`circle-${index + 1}`}
            similarLinks={similarLinks}
            reverse={reverse}
            radius={radius}
            speed={speed}
          />
        );
      })}
    </div>
  );
}

export default function IntroSection({ links }: { links: ToolLink[][] }) {
  return (
    <section className="container py-4 max-w-6xl">
      <div className="flex flex-col md:flex-row items-center">
        <div className="font-sans">
          <h1 className="text-5xl inline">
            <TypingAnimation>Hi, I&apos;m Siddhesh 👋🏻</TypingAnimation>
          </h1>

          {/* Divide into 2 parts */}
          <div className="grid grid-cols-1 gap-6 py-6 pr-8">
            <p className="text-left md:text-justify">
              I am a <strong>Hobbyist Developer</strong> with a keen interest in{" "}
              <strong>Web Development, DevOps and Gen AI</strong>. I have been
              programming for the past {new Date().getFullYear() - 2019} years,
              i.e. since I was 16. Currently, I&apos;m working on honing my
              skills in <strong>Golang</strong> and{" "}
              <strong>React Native</strong>. Always in search of fun projects.
            </p>
          </div>
        </div>
        <Image
          src={MyPic}
          alt="A picture of Me"
          className="rounded-full w-48 h-48 p-1 border-2"
        />
      </div>

      {/* List things proficient in  */}
      <ConcentricCircles text="My Tech Stack" links={links} />
    </section>
  );
}

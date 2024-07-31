import { Section } from "../_components/section";
import Link from "next/link";
import TimelineItem from "./timelineitem";
import { experiences } from "./workexperience";

export default function ResumeCV() {
  return (
    <>
      <Section title="Resume/CV 👔 💼">
        <div className="container mx-auto w-full h-full max-w-4xl">
          <div className="relative wrap overflow-hidden p-4 md:p-10 h-full">
            <div
              className="border-2-2 absolute border-opacity-50 border-gray-400 h-full border hidden md:block"
              style={{ left: "50%", zIndex: 0 }}
            ></div>
            {experiences.map((exp, index) => (
              <TimelineItem
                key={index}
                {...exp}
                isLeft={index % 2 === 0}
              />
            ))}
            <div className="mt-8 text-center">
              <Link href={`/`} className="text-miami-blue underline">
                Back to main
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

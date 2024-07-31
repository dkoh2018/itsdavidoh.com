import { Section } from "../_components/section";
import Link from "next/link";
import WorkExperienceItem from "./ui/workexperienceitem";
import AboutMeItem from "./ui/aboutmeitem";
import { experiences } from "./workexperience";
import { interests } from "./aboutme";
import HorizontalLine from "./ui/horizontalline";

export default function ResumeCV() {
  return (
    <>
      <Section title="Resume/CV 👔 💼">
        <div className="container mx-auto w-full h-full max-w-3xl">
          <section className="mt-12 mb-12">
            {interests.map((exp, index) => (
              <AboutMeItem
                key={index}
                title={exp.title}
                description={exp.description}
              />
            ))}
          </section>
          <HorizontalLine />
          <section className="mt-12 mb-12">
            {experiences.map((exp, index) => (
              <WorkExperienceItem
                key={index}
                date={exp.date}
                title={exp.title}
                company={exp.company}
                description={exp.description}
              />
            ))}
          </section>

          <Link href={`/`} className="text-miami-blue underline">
            Back to main
          </Link>
        </div>
      </Section>
    </>
  );
}

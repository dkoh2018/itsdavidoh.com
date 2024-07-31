import { Section } from "../_components/section";
import Link from "next/link";

export default async function Projects() {
  return (
    <>
      <Section title="👨🏻‍💻 + 💻 = 👨‍💻">
        <Link href={`/`} className="text-miami-blue underline">
          Back to main
        </Link>
      </Section>
    </>
  );
}

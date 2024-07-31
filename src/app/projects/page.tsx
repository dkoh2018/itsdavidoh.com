import { Section } from "../_components/section";
import Link from "next/link";

export default async function Projects() {
  return (
    <>
      <Section title="👨🏻‍💻 + 💻 = 👨‍💻">
        <div className="flex-grow flex items-center justify-center my-20">
          <p className="text-2xl font-bold text-center text-gray-600">
            Looks like this page took a vacation
          </p>
        </div>
        <Link href={`/`} className="text-miami-blue underline">
          Back to main
        </Link>
      </Section>
    </>
  );
}

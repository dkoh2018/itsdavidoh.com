import Image from "next/image";
import { Section } from "../_components/section";
import githubIcon from "../img/githublogo.svg";
import Link from "next/link";

export const metadata = {
  title: "Guestbook",
  description: "Sign my guestbook and leave your mark.",
};

export default function GuestBook() {
  return (
    <Section title="Guestbook">
      <div className="flex-grow flex items-center justify-start mt-10">
        <button className="px-3 py-2 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 mb-5">
          <Image
            alt="GitHub logo"
            src={githubIcon}
            width={20}
            height={20}
          />
          <div className="ml-3">Sign in with GitHub</div>
        </button>
      </div>
      <div className="flex-grow flex items-center justify-center mt-5">
        <p className="text-2xl font-bold text-center text-gray-600">
          Looks like this page took a vacation
        </p>
      </div>
      <div className="mt-10">
        <Link href={`/`} className="text-miami-blue underline">
          Back to main
        </Link>
      </div>
    </Section>
  );
}

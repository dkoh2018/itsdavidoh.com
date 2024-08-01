import { Section } from "../_components/section";
import Link from "next/link";
import { Providers } from "./providers";
import Home from "./home";

export const metadata = {
  title: "Guestbook",
  description: "Sign my guestbook and leave your mark.",
};

export default function GuestBook() {
  return (
    <Providers>
      <Section title="Guestbook">
        <div className="flex-grow flex items-center justify-center my-2"></div>
        <Home />
        <div className="mt-7">
          <Link href={`/`} className="text-miami-blue underline">
            Back to main
          </Link>
        </div>
      </Section>
    </Providers>
  );
}

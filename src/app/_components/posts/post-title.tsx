import { ReactNode } from "react";
import Link from "next/link";

type Props = {
  children?: ReactNode;
};

export function PostTitle({ children }: Props) {
  return (
    <>
      <div className="mb-12">
        <h1 className="text-2xl font-bold tracking-tighter mb-4">
          {children}
        </h1>
        <div>
          <Link href={`/`} className="text-miami-blue underline">
            Back to main
          </Link>
          <span> | </span>
          <Link
            href={`/posts`}
            className="text-miami-blue underline"
          >
            See all posts
          </Link>
        </div>
      </div>
    </>
  );
}

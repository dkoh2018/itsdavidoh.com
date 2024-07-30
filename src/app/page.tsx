import Container from "./_components/container";
import { PostList } from "./_components/posts/post-list";
import { getAllPosts, getRecentFive } from "../lib/api";
import { Section } from "./_components/section";
import Link from "next/link";
import LightBoardSection from "./_components/lightboardsection";

export default function Index() {
  const allPosts = getAllPosts();
  const firstFivePosts = getRecentFive();

  return (
    <>
      <LightBoardSection />

      <Section title="👋 hey there">
        <div className="mb-4">
          i'm david oh. i started trading in 2013, capitalizing on
          the biotech boom and later the volatile markets during
          covid-19, focusing on es futures and fang options. since
          2017, it's been my full-time pursuit.
        </div>
        <div className="mb-4">
          in 2020, i co-founded efoedge.com, where we've guided and
          educated over 600 people in options trading and guiding
          them through the covid-19 pandemic. thanks to the volatile
          markets, many of my clients reaped.
        </div>
        <div className="mb-4">
          fast forward to 2024, tech dominates the landscape and
          that's where this new journey begins. gone with the old, on
          with the new. my goal moving forward? to build solutions
          that are dangerously efficient and genuinely impactful.
          scalability and autonomy. i'm driven by the belief that
          many will fall behind in this tech revolution, and i'm
          determined not to let that happen—not to me, not to you.
        </div>
        <div className="mb-4">
          this blog is where i share my story, the lessons i've
          learned, and the insights i continue to gather. as a
          lifelong learner still soaking up knowledge in my late 20s,
          i'm excited to take you along on this journey. whether it's
          finance or just into creating cool stuff, stick around.
        </div>
        <div className="mb-4">
          my current toolbox includes:
          <ul className="list-disc list-inside mt-2">
            <li>Languages: Python, Java, C, TypeScript, React</li>
            <li>Frameworks: Next.js</li>
            <li>Databases: Firebase, SQL</li>
          </ul>
        </div>
        <div className="mb-4">
          let's build something awesome together.
        </div>
      </Section>
      <Section title="Blog">
        {firstFivePosts.length > 0 && (
          <PostList posts={firstFivePosts} />
        )}
        {allPosts.length > 5 && (
          <Link
            href={`/posts`}
            className="underline text-miami-blue"
          >
            See all posts
          </Link>
        )}
      </Section>
    </>
  );
}

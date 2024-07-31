import Container from "./_components/container";
import { PostList } from "./_components/posts/post-list";
import { getAllPosts, getRecentFive } from "../lib/api";
import { Section } from "./_components/section";
import Link from "next/link";
import { LightBoardSection } from "./_components/lightboardsection";
import SocialMediaIcons from "./_components/socialmediaicons";

export default function Index() {
  const allPosts = getAllPosts();
  const firstFivePosts = getRecentFive();

  return (
    <>
      <LightBoardSection />
      <Section title="👋 what do you know, its david oh">
        <p className="mb-4">
          nice to meet you. let me introduce myself. quick summary i
          promise. i started trading in 2013, capitalizing from the
          biotech boom to the volatile markets during covid-19,
          focusing on es futures and fang options, supplemented with
          underlying hedges. since 2017, it's been my full-time
          pursuit and i'm grateful to have been fortunate.
        </p>
        <p className="mb-4">
          in 2020, i co-founded efoedge.com, where we've guided and
          educated over 600 people in options trading and guiding
          them through the covid-19 pandemic. thanks to the volatile
          markets, many of my clients reaped.
        </p>
        <p className="mb-4">
          fast forward to 2024, tech dominates the landscape and
          that's where this new journey begins. gone with the old, on
          with the new. my goal moving forward? to build solutions
          that are dangerously efficient and genuinely impactful.
          scalability and autonomy. i'm driven by the belief that
          many will fall behind in this tech revolution, and i'm
          determined not to let that happen—not to me, not to you.
        </p>
        <p className="mb-4">
          this blog is where i share my story, the lessons i've
          learned, and the insights i continue to gather. as a
          lifelong learner still soaking up knowledge in my late 20s,
          i'm excited to take you along on this journey. whether it's
          finance or just into creating cool stuff, stick around.
        </p>
        <div className="mb-4">
          my current toolbox includes:
          <ul className="list-disc list-inside mt-2">
            <li>Languages: Python, Java, C, TypeScript, React</li>
            <li>Frameworks: Next.js</li>
            <li>Databases: Firebase, SQL</li>
          </ul>
        </div>
        <p className="mb-4">
          let's build something awesome together.
        </p>
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
      <SocialMediaIcons />
    </>
  );
}

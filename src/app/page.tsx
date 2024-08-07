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
          this blog is where i share my story, the lessons i've learned, and the insights i continue
          to gather. as a lifelong learner still soaking up knowledge in my late 20s, i'm excited to
          take you along on this journey. whether it's finance or just into creating cool stuff,
          stick around.
        </p>
        <div className="mb-4">
          my current toolbox includes:
          <ul className="list-disc list-inside mt-2">
            <li>Languages: Python, Java, C, TypeScript, React</li>
            <li>Frameworks: Next.js</li>
            <li>Databases: Firebase, SQL</li>
          </ul>
        </div>
        <p className="mb-4">let's build something awesome together.</p>
      </Section>
      <Section title="Blog">
        {firstFivePosts.length > 0 && <PostList posts={firstFivePosts} />}
        {allPosts.length > 5 && (
          <Link href={`/posts`} className="underline text-miami-blue">
            See all posts
          </Link>
        )}
      </Section>
      <SocialMediaIcons />
    </>
  );
}

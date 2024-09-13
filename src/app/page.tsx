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
        <div className="mb-5"></div>
        <p className="mb-4">
          this blog is where i share my story, the lessons i've learned, and the insights i continue
          to gather. whether it's finance, tech or ranting, stick around. maybe you'll learn a thing
          or two stick around.
        </p>
        <div className="mb-4">
          <p>my current toolbox includes:</p>
          <ul className="list-disc list-inside mt-2">
            <li>Languages: Python, Java, C, TypeScript, React</li>
            <li>Frameworks: Next.js</li>
            <li>Databases: Firebase, SQL</li>
          </ul>
        </div>
        <p className="mb-4">let's build something awesome together.</p>
        <p className="mb-4">for now...</p>
        <div className="space-y-2">
          <div className="flex items-center">
            <span className="mr-2">📚</span>
            <Link
              href={`/leetcode`}
              className="text-sm underline text-purple-600 hover:text-purple-800 transition-colors duration-200"
            >
              checkout this leetcode cheatsheet for young devs
            </Link>
          </div>
          <div className="flex items-center">
            <span className="mr-2">🗓️</span>
            <Link
              href={`/projects`}
              className="text-sm underline text-purple-600 hover:text-purple-800 transition-colors duration-200"
            >
              i even made a google calendar ai on terminal
            </Link>
          </div>
        </div>
      </Section>
      <Section title="blog">
        {firstFivePosts.length > 0 && <PostList posts={firstFivePosts} />}
        {allPosts.length > 5 && (
          <Link href={`/posts`} className="underline text-miami-blue">
            see all posts
          </Link>
        )}
      </Section>
      <SocialMediaIcons />
    </>
  );
}

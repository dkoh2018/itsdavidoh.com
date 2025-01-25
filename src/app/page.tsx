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
            <li>Languages: Python, C, Java, Javascript, TypeScript, React, Scala</li>
            <li>Frameworks: Next.js</li>
            <li>Databases: Firebase, SQL</li>
          </ul>
        </div>
        <p className="mb-4">for now...</p>


      </Section>
      
      <Section title="🔫 shop for ammo (2025) - scraped ammoseek.com">
        <Link
          href="https://shopammo.streamlit.app"
          className="text-sm underline text-purple-600 hover:text-purple-800 transition-colors duration-200" // Applied Leetcode style
          target="_blank"
          rel="noopener noreferrer"
        >
          18,000 rounds of savings locked and loaded
        </Link>
      </Section>
      <Section title="🚗 shop for cars (2025) - scraped cars.com">
        <Link
          href="http://carshopping.streamlit.app/"
          className="text-sm underline text-purple-600 hover:text-purple-800 transition-colors duration-200" // Applied Leetcode style
          target="_blank"
          rel="noopener noreferrer"
        >
          540+ sweet rides waiting for you
        </Link>
      </Section>

      <Section title="🗓️ google calendar ai on terminal">
        <Link
          href={`/projects`}
          className="text-sm underline text-purple-600 hover:text-purple-800 transition-colors duration-200" // Applied Leetcode style
        >
          your own ai secretary
        </Link>
      </Section>

      <Section title="📚 leetcode cheatsheet for young devs">
        <Link
          href={`/leetcode`}
          className="text-sm underline text-purple-600 hover:text-purple-800 transition-colors duration-200" // Reverted to original style
        >
          checkout this leetcode cheatsheet for young devs
        </Link>
      </Section>

      <Section title="blog">
        {firstFivePosts.length > 0 && <PostList posts={firstFivePosts} />}
        {allPosts.length > 5 && (
          <Link href={`/posts`} className="text-sm underline text-miami-blue"> {/* Kept miami-blue for "see all posts" */}
            see all posts
          </Link>
        )}
      </Section>
      <SocialMediaIcons />
    </>
  );
}
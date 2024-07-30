import Container from "./_components/container";
import { PostList } from "./_components/posts/post-list";
import { getAllPosts, getRecentFive } from "../lib/api";
import { Section } from "./_components/section";
import Link from "next/link";

export default function Index() {
  const allPosts = getAllPosts();
  const firstFivePosts = getRecentFive();

  return (
    <>
      <Section title="👋 hey there">
        <div className="mb-4">
          i'm David Oh. Since 2017, I've been navigating the
          fast-paced world of funds, watching markets evolve at
          breakneck speed. This journey led me to a pivotal
          realization: the future isn't just in trading—it's in
          building the systems that power it.
        </div>
        <div className="mb-4">
          in 2018, I co-founded efoedge.com, where we've guided over
          600 people through the intricacies of options trading.
          While rewarding, this venture ignited a new ambition in me.
        </div>
        <div className="mb-4">
          fast forward to 2024, and tech is where it's at. I'm now
          piecing together my experiences to create a modern,
          efficient digital operation. My goal? To build solutions
          that are dangerously efficient and genuinely impactful. I'm
          driven by the belief that many will fall behind in this
          tech revolution, and I'm determined not to let that
          happen—not to me, not to you.
        </div>
        <div className="mb-4">
          this blog is where I share my story, the lessons I've
          learned, and the insights I continue to gather. As a
          lifelong learner still soaking up knowledge in my late 20s,
          I'm excited to take you along on this journey. Whether it's
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
          Let's build something awesome together.
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

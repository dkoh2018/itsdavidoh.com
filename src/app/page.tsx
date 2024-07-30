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
          i'm David Oh, an options trader turned backend builder.
          Since 2017, I've been immersed in the world of funds,
          witnessing firsthand the rapid evolution of markets. This
          journey led me to a crucial realization: the future isn't
          just in trading, it's in building the systems that power
          it. In 2018, I co-founded efoedge.com with a partner, where
          we've guided over 600 people through the complexities of
          options trading. While rewarding, it sparked a new ambition
          in me.
        </div>
        <div className="mb-4">
          it's 2024 now. Tech is where it's at. I'm piecing it all
          together to create a modern, efficient digital operation.
          The goal is to build solutions that are dangerously
          efficient and genuinely impactful. I'm driven by the belief
          that many will fall behind in this tech revolution, and I'm
          determined not to let that happen – not to me, not to you.
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
          <Link href={`/posts`} className="underline text-blue-500">
            See all posts
          </Link>
        )}
      </Section>
    </>
  );
}

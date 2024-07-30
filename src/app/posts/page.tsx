import { getAllPosts } from "../../lib/api";
import { PostList } from "../_components/posts/post-list";
import { Section } from "../_components/section";
import Link from "next/link";

export default async function AllPosts() {
  const allPosts = getAllPosts();

  return (
    <>
      <Section title="All Posts">
        {allPosts.length > 0 && <PostList posts={allPosts} />}
        <Link href={`/`} className="text-miami-blue underline">
          Back to main
        </Link>
      </Section>
    </>
  );
}

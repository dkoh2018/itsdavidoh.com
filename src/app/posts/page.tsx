import { getAllPosts } from "../../lib/api";
import { PostList } from "../_components/posts/post-list";
import { Section } from "../_components/section";
import Link from "next/link";

export default async function AllPosts() {
  const allPosts = getAllPosts();

  return (
    <>
      <Section title="all posts">
        <div className="mb-4">
          <Link href={`/`} className="text-miami-blue underline">
            back to main
          </Link>
        </div>
        <div className="mt-10">{allPosts.length > 0 && <PostList posts={allPosts} />}</div>
      </Section>
    </>
  );
}

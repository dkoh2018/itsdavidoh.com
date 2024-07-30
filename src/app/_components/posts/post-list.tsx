import { PostPreview } from "./post-preview";

type Post = {
  slug: string,
  title: string,
  date: string
};

type Props = {
  posts: Post[] 
};

export function PostList({ posts }: Props) {
  return (
    <>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          date={post.date}
          slug={post.slug}
        />
      ))}
    </>
  );
}

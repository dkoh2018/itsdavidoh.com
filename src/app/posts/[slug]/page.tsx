import { getAllPosts, getPostBySlug } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import Container from "../../_components/container";
import { PostBody } from "../../_components/posts/post-body";
import { PostHeader } from "../../_components/posts/post-header";
import { PostTitle } from "../../_components/posts/post-title";
import {Section} from "../../_components/section"

interface Params {
  params: {
    slug: string;
  };
}

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  const content = await markdownToHtml(post.content || "");

  return (
    <>
      <Section title="">
        <article className="mb-32 mt-16">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
          />
          <PostBody content={content} />
        </article>
      </Section>
    </>
  );
}

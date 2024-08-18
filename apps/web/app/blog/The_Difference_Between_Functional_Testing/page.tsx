import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import Alert from "../../_components/alert";
import Container from "../../_components/container";
import Header from "../../_components/header";
import { PostBody } from "../../_components/post-body";
import { PostHeader } from "../../_components/post-header";
import { Intro } from "../../_components/intro";
import Content from '../../../blog-md/The_Difference_Between_Functional_Testing.mdx'
import markdownStyles from "../../_components/markdown-styles.module.css";

export const runtime = "edge";


export default async function Post({ params }: Params) {
  const post = getPostBySlug("The_Difference_Between_Functional_Testing");
  // console.log(params)
  // console.log(post)
  if (!post) {
    return notFound();
  }

  // const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <Intro />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <div className="max-w-2xl mx-auto">
            <div
              className={markdownStyles["markdown"]}
            ><Content /></div>
          </div>
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Params): Metadata {
  const post = getPostBySlug("The_Difference_Between_Functional_Testing");

  if (!post) {
    return notFound();
  }

  const title = `${post.title} `;

  return {
    title,
    // openGraph: {
    //   title,
    //   images: [post.ogImage.url],
    // },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

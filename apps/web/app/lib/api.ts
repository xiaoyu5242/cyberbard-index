import { Post } from "../../interfaces/post";
// import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

// const postsDirectory = join(process.cwd(), "_posts");
const postsDirectory = "../../blog";

export function getPostBySlug(slug: string) {
  // return {
  //   title: "The Difference Between Functional Testing, Automated Testing, and Performance Testing", coverImage: "/images/ai-generated-8915027_1280.jpg", date: "2024-08-16T10:14:29.657Z", author: { name: "TH", picture: "/images/smartphone-3179295_1280.jpg" }, slug: "The_Difference_Between_Functional_Testing", excerpt: "",
  //   ogImage: {
  //     url: ""
  //   },
  //   content: ""
  // };
  const postList = getAllPosts();
  // 查找与 slug 匹配的帖子
  const post = postList.find((item) => item.slug == slug);

  // 返回找到的帖子，如果没有找到则返回 undefined
  return post;
}

// export function getPostBySlug(slug: string) {
//   const realSlug = slug.replace(/\.md$/, "");
//   const fullPath = join(postsDirectory, `${realSlug}.md`);
//   const fileContents = fs.readFileSync(fullPath, "utf8");
//   const { data, content } = matter(fileContents);

//   return { ...data, slug: realSlug, content } as Post;
// }

export function getAllPosts(): Post[] {
  // const slugs = getPostSlugs();
  // const posts = slugs
  //   .map((slug) => getPostBySlug(slug))
  //   // sort posts by date in descending order
  //   .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return [
    {
      title:
        "The Difference Between Functional Testing, Automated Testing, and Performance Testing",
      coverImage: "/images/ai-generated-8915027_1280.jpg",
      date: "2024-08-16T10:14:29.657Z",
      author: { name: "Tina", picture: "/author/tina.png" },
      slug: "The_Difference_Between_Functional_Testing",
      excerpt: "",
      ogImage: {
        url: "",
      },
      content: "",
    },
  ];
}

import Container from "../_components/container";
import { HeroPost } from "../_components/hero-post";
import { Intro } from "../_components/intro";
import { MoreStories } from "../_components/more-stories";
import { getAllPosts } from "../lib/api";

export const runtime = "edge";
export default function Index() {
    const allPosts = getAllPosts();

    // const heroPost = allPosts[0];

    // const morePosts = allPosts.slice(1);

    return (
        <main>
            <Container>
                <Intro />
                {/* {heroPost ? <HeroPost
                    title={heroPost.title}
                    coverImage={heroPost.coverImage}
                    date={heroPost.date}
                    author={heroPost.author}
                    slug={heroPost.slug}
                    excerpt={heroPost.excerpt}
                /> : <br />} */}

                {allPosts.length > 0 ?  <MoreStories posts={allPosts}/>:""}
            </Container>
        </main>
    );
}
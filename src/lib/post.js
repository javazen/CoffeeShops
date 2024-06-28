import { glob } from "fast-glob";

export async function getAllPosts() {
    let postFilenames = await glob("*/page.mdx", {
        cwd: "./src/app/posts",
    });
    let posts = await Promise.all(postFilenames.map(importPost));
    return posts;
    // return articles.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());
}

export async function importPost(postFilename) {
    // let fn = `./src/app/posts/${postFilename}`;
    let {post} = (await import(`../app/posts/${postFilename}`));
    console.log(post);
    return {
        slug: postFilename.replace(/(\/page)?\.mdx$/, ""),
        ...post
    }
}

import { glob } from "fast-glob";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";
import { cache } from "react";

export async function getPost(slug) {
    const posts = await getAllPosts()
    return posts.find((post) => post.slug === slug)
}
  
export const getAllPosts = cache(async () => {
    // const postFilenames = await fs.readdir('./posts/');
    let postFilenames = await glob("*/page.mdx", {
        cwd: "./src/app/posts",
    });

  
    return Promise.all(
        postFilenames
        .map(async (fileName) => {
          const filePath = `./src/app/posts/${fileName}`

          const postContent = await fs.readFile(filePath).then((data) => data.toString())
          const { data, content } = matter(postContent)
  
        //   if (data.published === false) {
        //     return null
        //   }

          return { ...data, body: content, slug: fileName.replace('/page.mdx', '') };
        })
    )
  })
  
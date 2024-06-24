import Link from 'next/link';
import React from 'react'

const FeaturedPosts = ({posts}) => {
  console.log(posts)

  return (
    <div>
      <h2>Featured Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FeaturedPosts
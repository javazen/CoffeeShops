import Link from 'next/link';
import React from 'react'
import PostCard from './PostCard';

const FeaturedPosts = ({posts}) => {
  // console.log(posts[0].slug);
  // debugger;

  return (
    <div>
      <h2>Featured Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            {
            <Link href={`/posts/${post.slug}`}>
              <PostCard post={post} />
            </Link>
            }
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FeaturedPosts
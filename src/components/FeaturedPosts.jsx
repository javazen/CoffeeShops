import Link from 'next/link';
import React from 'react'
import PostCard from './PostCard';

const FeaturedPosts = ({posts}) => {
  // console.log(posts[0].slug);
  // debugger;

  return (
    <div>
      <h2 className='text-xl p-12 text-center'>Featured Posts</h2>

      <ul className='flex gap-4'>
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
import Link from 'next/link';
import React from 'react'
import PostCard from './PostCard';

const FeaturedPosts = ({posts}) => {
  // console.log(posts[0].slug);
  // debugger;

  return (
    <div>
      <h2 className='text-2xl p-10 text-center'>Featured Posts</h2>

      <ul className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
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
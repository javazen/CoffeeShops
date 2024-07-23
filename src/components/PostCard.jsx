import React from 'react'

const PostCard = ({post}) => {
  return (
    <div>
        <img src="{post.image}" alt="postCardImage" />
        <div>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
        </div>
        <div>
            // post date
            <h2> 📅{post.updatedAt}</h2>
            // post readTime
        </div>
    </div>
  )
}

export default PostCard
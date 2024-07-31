import React from 'react'

const PostCard = ({post}) => {
  return (
    <div>
        <div>
          <img src={post.image} alt="postCardImage" width="320" />
        </div>
        <div>
            <h2 className='text-lg'>{post.title}</h2>
            <p>{post.description}</p>
        </div>
        <div>
            <h2 className='text-sm'> 📅{post.updatedAt}</h2>
        </div>
    </div>
  )
}

export default PostCard
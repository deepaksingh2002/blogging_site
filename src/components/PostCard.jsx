import React from 'react'
import service from "../appwrtie/configur"
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='bg-white rounded-xl shadow-md p-4 w-full max-w-md mx-auto'>
                <img src={service.getFilePreview(featuredImage)} alt={title}
                className='rounded-xl' />
            </div>
            <h2
            className='text-xl font-semibold text-primary'>
                {title}
            </h2>
        </div>
    </Link>
  )
}

export default PostCard

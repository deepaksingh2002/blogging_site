import React from 'react'
import service from "../appwrtie/configur"
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
  return (
      <Link to={`/post/${$id}`} className="block group">
        <div className="bg-beige p-6 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 h-full">          
          <div className="w-full mb-4 overflow-hidden rounded-xl aspect-[4/3]">
            <img
              src={service.getFilePreview(featuredImage)}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div> 
          <h2 className="text-xl font-bold text-primary group-hover:text-secondary transition">
            {title}
          </h2>
          
        </div>
      </Link>  
  )
}

export default PostCard

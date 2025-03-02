import React, { useEffect, useState } from 'react'
import service from '../appwrtie/configur'
import { PostCard, Contaner } from '../components'
function AllPosts() {
    const [posts, setPosts]=useState([])
    useEffect(() => {},[])
    service.getPosts([]).then((posts) => {
        if(posts){
            setPosts(posts.documents)
        }
    })
  return (
    <div className='w-full py-8' >
        <Contaner>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div className='p-2 w-1/4' key={posts.$id} > 
                    <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Contaner>
      
    </div>
  )
}

export default AllPosts

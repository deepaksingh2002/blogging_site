import React from 'react'
import { useEffect, useState } from 'react'
import service from '../appwrtie/configur'
import { Contaner, PostCard  } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    
    if (posts.length === 0) {
        return (
            <div className='w-full py-8 text-center'>
                <Contaner>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                Login to read posts 
                            </h1>
                        </div>
                    </div>
                </Contaner>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Contaner>
                <div className='flex flex-wrap -mx-2'>
                    {posts.map((post) => (
                        <div className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2' key={post.$id}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Contaner>
        </div>
    )
}

export default Home;

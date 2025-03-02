import React, { useEffect, useState } from 'react'
import {Contaner, PostForm} from '../components'
import service from '../appwrtie/configur'
import { useNavigate, useParams } from 'react-router-dom'


function EditPost() {
    const [post, setPosts] = useState(null)
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if(slug){
            service.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        }else{
            navigate('/')
        }
    }, [slug, navigate])

  return post ? (
    <div className='py-8'>
        <Contaner>
            <PostForm post={post} />
        </Contaner>
    </div>
  ) : null
}

export default EditPost

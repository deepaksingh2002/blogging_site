import React, { useEffect, useState } from 'react'
import parse from 'html-react-parser'
import { useSelector } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import service from '../appwrtie/configur'
import {Button, Contaner} from '../components'


export default function Post(){
    const [post, setPost] = useState(null);
    const {slug} =useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);
    const isAuthor = post && userData ? post.userId === userData.$id : false;
    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        }else navigate("/")
    }, [slug, navigate]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

  return post ? (
    <div className='py-8 bg-slate-300'>
        <Contaner>
            <div className='aspect-[16/9] overflow-hidden rounded-xl '>
                <img 
                 src={service.getFilePreview(post.featuredImage)}
                 alt={post.title}
                 className='w-full h-64 md:h-80 lg:h-[28rem] object-cover rounded-2xl shadow' />

                 {isAuthor && (
                 <div className='abslute top-6 right-6'>
                    <Link to={`/edit-post/${post.$id}`}>
                    <Button 
                    bgColor='bg-green-500'
                    className='mx-3 '
                    >
                        Edit
                    </Button>
                    </Link>
                    <Button bgColor='bg-red-500' onClick={deletePost} >
                        Delete
                    </Button>
                 </div>
                 )}
            </div>
            <div className='w-full mb-6'>
                 <h1 className='text-2xl font-bold text-primary'>{post.title}</h1>
            </div>
            <div className=' text-subtext '>
                {parse(post.content)}
            </div>
        </Contaner>
    </div>
  ) : null;
}



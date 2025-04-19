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
    <div className="py-10 bg-light text-dark">
    <Contaner>
      
      {/* Image Section */}
      <div className="relative rounded-2xl overflow-hidden shadow-xl mb-10 aspect-[16/9]">
        <img
          src={service.getFilePreview(post.featuredImage)}
          alt={post.title}
          className="w-full h-full object-cover"
        />
  
        {/* Edit/Delete Buttons */}
        {isAuthor && (
          <div className="absolute top-5 right-5 flex gap-3 z-10">
            <Link to={`/edit-post/${post.$id}`}>
              <Button bgColor="bg-primary" className="text-white shadow">
                Edit
              </Button>
            </Link>
            <Button bgColor="bg-red-500" onClick={deletePost} className="text-white shadow">
              Delete
            </Button>
          </div>
        )}
      </div>
  
      {/* Title */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-primary leading-tight">{post.title}</h1>
      </div>
  
      {/* Content */}
      <div className="text-subtext text-lg leading-relaxed space-y-4">
        {parse(post.content)}
      </div>
  
    </Contaner>
  </div>
  
  ) : null;
}



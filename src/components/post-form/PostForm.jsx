import React, { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {Button, Input, RTE, Select} from '..';
import appwriteService from '../../appwrtie/configur';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PostForm({ post }) {
    const {register, handleSubmit, watch, setValue, control, getValues} = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || 'active',
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;
            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });
            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        }else{
            const file = await appwriteService.uploadFile(data.image[0]);
            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({
                    ...data,
                    userId: userData.$id
                });
                if(dbPost){
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    }

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string") 
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");
        return "";    
    }, []);
    useEffect(() => {
        const subscription = watch((value, {name}) => {
            if(name === 'title') {
                setValue('slug', slugTransform(value.title), {shouldValidate: true});
            }
        });

        return () => subscription.unsubscribe();
    },[watch, slugTransform, setValue])
  return (
    <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
      <div className='w-2/3 px-2'>
         <Input 
         lable="Title :"
         placeholder="Title"
         className="mb-4"
         {...register("title", { required: true })}
         />
         <Input 
         lable="Slug :"
         placeholder="Slug"
         className="mb-4"
         {...register("slug", { required: true })}
         onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value),{
                shouldValidate: true });
         }}
         />
         <RTE lable="Content :" name="content"
         control={control} defaultValue={getValues("content")} />
      </div>
      <div className='w-1/3 px-2'>
      <Input 
        lable="Featured Image :"
        type="file"
        className="mb-4"
        accept="image/png, image'jpg, image/jpeg, image/gif"
        {...register ("image", {required: !post})}
      />
      {post && (
        <div className='w-full mb-4'>
        <img src={appwriteService.getFilePreview(post.featuredImage)}
         alt={post.title} 
         className='rounded-lg'
          />    
         </div>
      )}
      <Select 
      options={["active", "inactive"]}
      lable='Status'
      className='mb-4'
      {...register('status', {required: true})}
      />
      <Button type='submit' bgColor={post ? "bg-green-500" : undefined}
      className='w-full bg-primary text-white px-5 py-2 rounded-xl hover:bg-secondary transition'>
        {post ? "Update" : "Submit"}
      </Button>

      </div>
    </form>
  );
}



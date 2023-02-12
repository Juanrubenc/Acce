import React from 'react';
import { useParams } from 'react-router-dom';

const Post = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));

  return (
    <div className='mt-5'>
        <div className='bg-white  shadow-md  w-full p-20'>
            <div className='w-full h-full flex flex-col justify-center mt-10'>
            <img  src={`https://source.unsplash.com/random/${post.id}`} alt={post.title} />
          <h2 className='text-2xl font-bold text-black'>{post.title}</h2>
          <p className='text-black'>{post.body}</p>
          </div>
        </div>
    </div>
  );
};

export default Post;

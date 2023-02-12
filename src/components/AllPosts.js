import React from 'react';
import { Link } from 'react-router-dom';


const AllPosts = ({ posts }) => {


    

  return (
    <div className='mt-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        {posts.map(post => (
          <Link key={post.id} to={`/post/${post.id}`}>
            <div className='bg-white shadow-md p-4 w-full h-72 md:h-96' style={{
              backgroundImage: `url("https://source.unsplash.com/random/${post.id}")`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}>
              <div className='w-full h-full flex flex-col justify-center mt-10'>
                <h2 className='text-2xl font-bold text-white'>{post.title}</h2>
                <span className='text-white'>By: {post.id}</span>
                <p className='text-white'>{post.body}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};


export default AllPosts;



import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import NewPostForm from './NewPostForm'




const AppHeader = () => {
  const [showForm, setShowForm] = useState(false)


  return (
    <div className=' flex flex-col  items-center mt-5 leading-loose '>
      <div className='text-orange-400'>
        <span className=" text-lg">[ Making Your Life Easier ]</span>
      </div>
        <h1 className=" text-center text-4xl md:text-6xl font-bold">Discovering The World</h1>

      <div className='text-2x w-full flex justify-end items-center px-1'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          onClick={() => setShowForm(!showForm)}
        >
          New Post
      </button>
      </div>

      {showForm && <NewPostForm />}

<div className='text-2x w-full flex justify-center items-cente px-10'>
      <div className=" mt-5 flex  flex-wrap rounded justify-center divide-x border">
        <Link to="/" className="px-4 py-2  hover:bg-gray-300 ">
          Home
        </Link>
        <Link to="/travel" className="px-4 py-2  hover:bg-gray-300 ">
          Travel
        </Link>
        <Link to="/business" className="px-4 py-2  hover:bg-gray-300 ">
          Business
        </Link>
        <Link to="/estilodevida" className="px-4 py-2  hover:bg-gray-300 ">
          LifeStyle
        </Link>
        <Link to="/food" className="px-4 py-2  hover:bg-gray-300 ">
          Food
        </Link>
        <Link to="/work" className="px-4 py-2  hover:bg-gray-300 ">
          Work
        </Link>
      </div>
      </div>
    </div>
  )
}

export default AppHeader
import React, { useState } from 'react';
import axios from 'axios';

const NewPostForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    body: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postNewPost();
    console.log(formData);
  };
  
  const postNewPost = () => {
    axios.post('https://jsonplaceholder.typicode.com/posts', formData).then((res) => {
        console.log(res);
        console.log(res.data);
    });
};

  return (
    <form className=" bg-slate-300 top-64 absolute inset p-10 h-3/6 w-2/4 rounded-lg shadow-md " onSubmit={handleSubmit}>
        <h1 className="text-2xl text-center font-bold mb-4">New Post</h1>
      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="title">
          Title
        </label>
        <input
          className="border-b-2 p-2 w-full"
          id="title"
          name="title"
          type="text"
          value={formData.userId}
          onChange={handleChange}
        />
      </div>


      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-2" htmlFor="body">
          Description
        </label>
        <textarea
          className="border-b-2  p-2 w-full "
          id="body"
          name="body"
          value={formData.body}
          onChange={handleChange}
        />
      </div>
      <button onSubmit={handleSubmit}
      className="bg-blue-500 items-center text-white py-2 px-4 rounded-full hover:bg-blue-600">
        Submit
      </button>
    </form>
  );
};

export default NewPostForm;

import React from "react";
import {Routes, Route} from "react-router-dom";
import AllPosts from "./components/AllPosts";
import Travel from "./components/Travel";
import Business from "./components/Business";
import Food from "./components/Food";
import Work from "./components/Work";
import EstilodeVida from "./components/EstilodeVida";
import AppHeader from "./components/AppHeader";
import axios from "axios";
import { useState ,useEffect } from "react";
import Post from "./components/Post";



function App() {
  
  const [posts, setPosts] = useState([])

  const URL = "https://jsonplaceholder.typicode.com/posts";
  
  useEffect(() => {
    axios.get(URL).then((res) => {
      setPosts(res.data);
    });
  }, []);


  

  return (
    <div className="">
      <AppHeader />
      <Routes>
        <Route path="/" element={<AllPosts 
        posts={posts}
         />} />
             <Route path="/post/:id" element={<Post posts={posts} />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/business" element={<Business />} />
        <Route path="/estilodevida" element={<EstilodeVida />} />
        <Route path="/food" element={<Food />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;

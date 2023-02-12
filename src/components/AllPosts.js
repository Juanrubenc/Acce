import React from 'react'


const AllPosts = () => {
    const [posts, setPosts] = React.useState([])

    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                setPosts(json)

            })
            .catch(error => {
                console.log(error)
            })
    }, [])

    console.log(posts)


  return (
    <div className=''>
        <div className=' grid grid-cols-1 sm:grid-cols-2 '>
        {posts.map(post => (
            <div key={post.id} className='bg-white shadow-md p-4 w-full h-72 md:h-96' style={{
                backgroundImage: `url("https://source.unsplash.com/random/${post.id}")`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
            }}>
              
                <div className=' w-full h-full flex flex-col justify-center mt-10'>
                <h2 className='text-2xl font-bold text-white'>{post.title}</h2>
                <span className='text-white'>By: {post.id}</span>
                <p className='text-white'>{post.body}</p>
                </div>
        </div>
        ))}
        </div>
    </div>
  )
}

export default AllPosts
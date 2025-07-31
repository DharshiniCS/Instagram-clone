import React from 'react'
import { useState, useEffect } from 'react';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/posts")
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => console.log('Error fetching posts:', err));
  }, []);

  return (
    <div className='d-flex flex-column align-items-center justify-content-center'> 
      {posts.length > 0 ? (
        <div className='my-3 '>
            {posts.map((post) => (
           <div key={post.id} >
            <div className=" d-flex ">
            <img className=' dp rounded-circle' src={post.profilePic} alt="" />
            <h5>{post.name}</h5>
          </div>
           <img className='post' src={post.image} alt="" />
           <div>
              <i className="bi bi-heart"></i>
              <i className="bi bi-chat"></i>
              <i className="bi bi-send"></i>
            </div>  
          <b>{post.likes} likes</b>
          <p>{post.caption}</p>


         </div>
      
      ))}
  </div>
        
      ) : (
        <div>
          No posts available
        </div>
      )

      }
    </div>

  )
}

export default Posts

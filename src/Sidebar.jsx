import React from 'react'
import { useNavigate } from 'react-router-dom'


function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className='m-3 position-fixed'>
      <div className='d-flex flex-column gap-3'>
        <img className='logo-txt' src="src\assets\insta txt.jpg" alt="" />
        <div><i className="bi bi-house-door-fill"></i>Home</div>
        <div><i className="bi bi-search" ></i>Search</div>
        <div><i className="bi bi-compass-fill"></i>Explore</div>
        <div><i className="bi bi-play-btn-fill"></i>Reels</div>
        <div><i className="bi bi-chat-dots-fill"></i>Message</div>
        <div><i className="bi bi-bell-fill"></i>Notification</div>
        <div><i className="bi bi-plus-square-fill"></i>Create</div>
        <div onClick={() => {navigate('/Profile')}}><i className="bi bi-person-circle"></i>Profile</div>
      </div> 
      <div  className=' position-fixed bottom-0 d-flex flex-column gap-3  mb-3'>
        <div><i className="bi bi-threads-fill"></i>Threats</div>
        <div><i className="bi bi-list"></i>More</div>
      </div>
    </div>
  )
}

export default Sidebar
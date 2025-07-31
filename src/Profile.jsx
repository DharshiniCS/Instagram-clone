import React, { useEffect,useState } from 'react'
import axios from 'axios'

function Profile() {
  const [profile, setProfile] = useState(null)
  const [followers,setfollowers] =useState([])
  const [unfollwed,setunfollwed]=useState(0)

 useEffect(() => {
    axios.get('http://localhost:3001/profile')
      .then(response => {
        setProfile(response.data);})
        .catch((error) => console.error('Error fetching stories:', error));
     

       axios.get('http://localhost:3001/followers')
      .then(response => {
        setfollowers(response.data);})
        .catch(err => console.log(err))
     
  }, [unfollwed])

  function handleChange(e) {
    setProfile(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }
  const handleupdate = async() =>{
    axios.put('http://localhost:3001/profile',profile)
    .then(console.log("updated"))
    .catch(err => console.log(err))
  }
  const handleunfollow = async(id) => {
    axios.delete(`http://localhost:3001/followers/${id}`)
    .then(alert("unfollwed"))
    .then (setunfollwed(!unfollwed))
    .catch(err => console.log(err))
  }

  

  return (
    <div className='m-5'>
      {profile ? (
        <div>
          <img src={profile.profilePic} alt="" className='profile-pic rounded-circle' />
          <h5>{profile.username}</h5>

          <input type="text"
          value={profile.username} 
          name='username'
          className='form-control my-4'
          onChange={handleChange}
          />

          <input type="text"
          value={profile.profilePic} 
          name='profilePic'
          className='form-control my-4'
          onChange={handleChange}
          />
          

          <button className='btn btn-primary my-4 ' onClick={handleupdate}>Update</button>
        </div>
      ) : (
      <p>Loading...</p>
    )}
    {followers.length > 0 ?  (
      followers.map(follower => 
        <div key={follower.id} className='d-flex my-2 '>
          {follower.username}
          <button className='btn btn-secondary ms-auto' onClick={()=> {handleunfollow(follower.id)}}>un Follow</button>
        </div>

      )


    ):(
      <div> loading</div>
    )

    }
    </div>
  )
}
export default Profile
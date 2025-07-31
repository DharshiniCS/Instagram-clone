import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Suggestion() {
   
  const[profile,setprofile] = useState(null);
  const[ Suggestions,setsuggestion]=useState([]);

  useEffect(() =>{

    fetch('http://localhost:3001/profile').
    then((data) => data.json()).
    then((data) => setprofile(data) ).
    catch (err => console.log (err));

     fetch('http://localhost:3001/suggestions').
    then((data) => data.json()).
    then((data) => setsuggestion(data) ).
    catch (err => console.log (err));


  },[])

  const handlefollower = async(id,username) =>{
    axios.post('http://localhost:3001/followers',{"id": id , "username": username})
    .then(alert("followed"))
    .catch(err => console.log(err))
  }

  return (
    <div>
      <div className='suggestion w-75 m-4'>

        {profile ?
        <div className='d-flex '>
            <img className='dp rounded-circle' src={profile.profilePic} alt="" />
            <h5>{profile.username}</h5>
            <small className='ms-auto text-primary'>Switch</small>
        </div>
      : <div>Loading profile...</div>}
        <div className='d-flex'>
          <p>suggested for you</p>
          <b className='ms-auto '>See All</b>
        </div>
         {Suggestions.length > 0 ? (
         <div className='my-3 '>
            {Suggestions.map((suggestion) => (
           <div key={suggestion.id} >
            <div className=" d-flex ">
            <img className=' dp rounded-circle' src={suggestion.profilePic} alt="" />
            <h6>{suggestion.name}</h6>
            <a className='ms-auto text-primary' onClick={()=>{handlefollower(suggestion.id,suggestion.username)}}>Follow</a>
          </div>
           


         </div>
      
      ))}
        </div>
        
      ) : (
        <div>
          No suggestions available
        </div>
      )

      }
      

      </div>
      
    </div>
  )
}
export default Suggestion
import React, { useEffect, useState } from 'react'
import { useParams,Link,useNavigate } from 'react-router-dom'
function Viewstory() {

  const {id,tot} = useParams()
  const [story,setstory]   = useState(null);
  const navigate = useNavigate();

  useEffect(()=>{
    fetch(`http://localhost:3001/story/${id}`)
    .then ((data)=> data.json())
    .then((data) => setstory(data))
    .catch(err => console.log('Error fetching posts:', err));
  }, [id]);
  if(id > tot || id < 0) {
    navigate('/')
  }
  return (
    <div>
      {story ? <div className='d-flex align-items-center justify-content-center'> 
            <Link to={`http://localhost:5173/story/${Number(id)-1}/${tot}`}><i class="bi bi-caret-left-fill"></i></Link>
            <img  className="vh-100" src={story.image} alt="Story" />
            <Link to={`http://localhost:5173/story/${Number(id)+1}/${tot}`}><i class="bi bi-caret-right-fill"></i></Link>
      </div> : 
      <div>loading</div>}
    </div>
  )
}

export default Viewstory
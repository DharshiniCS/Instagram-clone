import React from 'react'
import { useNavigate } from 'react-router-dom';

function Stories() {

const [stories, setStories] = React.useState([]);
const navigate = useNavigate();

  React.useEffect(() => {
    fetch('http://localhost:3001/story')
      .then((response) => response.json())
      .then((data) => setStories(data))
      .catch((error) => console.error('Error fetching stories:', error));
  }, []);

  if (stories.length === 0) {
    return <div>Loading stories...</div>;
  }
 
return (
  <div className='story d-flex'>
    {stories.length > 0 ? (
      stories.map((story) => (
        <div key={story.id} className='mx-1' onClick={() => navigate(`/story/${story.id}/${stories.length}`)}>
          <div className='gradient-border'>
            <img src={story.profilePic} alt="dp"  className=' story-dp rounded-circle'/>

          </div>
          <p className='text-truncate ' style={{width:"50px"}}>{story.username}</p>
        </div>
      ))
    ) : (
      <div>No stories available</div>
    )}
  </div>
)
}

export default Stories
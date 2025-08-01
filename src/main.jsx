import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Viewstory from './Viewstory.jsx'
import Profile from './profile.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
 },
 {
    path: '/story/:id/:tot',
    element: <Viewstory />,
  },
  {
    path: '/profile',
    element: <Profile/>,
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
//json-server db.json --port 3001
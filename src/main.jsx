import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Users from './components/Users.jsx';
import UserDetails from './components/UserDetails.jsx';
import PostDetails from './components/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
     { 
      path:"/about",
      element:<About></About>
    },
    {
      path:"/users",
      loader:()=> fetch('https://jsonplaceholder.typicode.com/users'),
      element:<Users></Users>
    },
    {
      path:"/user/:userId",
      loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
      element:<UserDetails></UserDetails>
    },
    {
      path:"/contact",
      loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts'),
      element:<Contact></Contact>
    },
    {
      path:"/contact/:postId",
      loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`) ,
      element:<PostDetails></PostDetails>
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

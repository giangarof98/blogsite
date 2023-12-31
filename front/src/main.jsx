import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'

// screens
import AllPosts from './screen/AllPosts.jsx'
import Signin from './screen/Signin.jsx'
import Register from './screen/Register.jsx'
import NewPost from './screen/newPost.jsx'
import Post from './screen/Post.jsx'
import UpdateForm from './screen/UpdateForm.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route index={true} path='/home' element={<AllPosts/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/new' element={<NewPost/>}/>
      <Route path='/post/:id' element={<Post/>}/>
      <Route path='/post/update/:id' element={<UpdateForm/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

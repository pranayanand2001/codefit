// Centralized routing configuration for the CodeFit app

import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import {Home, Blog, BlogPost, NotFound} from './pages/export.js'
import CreateBlog from './pages/admin/CreateBlog.jsx'
import About from './sections/About.jsx'
import Workouts from './pages/Workouts.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />  
        <Route path='blog/:id' element={<BlogPost />} />
        <Route path='admin/CreateBlog' element={<CreateBlog />} />
        <Route path='/workouts' element={<Workouts />} />
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default router

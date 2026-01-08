// Centralized routing configuration for the CodeFit app

import { createBrowserRouter, createRoutesFromElements, Navigate, Route, Router } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import {Home, Blog, BlogPost, NotFound} from './pages/export.js'
import CreateBlog from './pages/admin/CreateBlog.jsx'
import Workouts from './pages/Workouts.jsx'
import BeginnerPlan from './pages/BeginnerPlan.jsx'
import IntermediatePlan from './pages/IntermediatePlan.jsx'
import AdvancedPlan from './pages/AdvancedPlan.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />  
        <Route path='blog/:id' element={<BlogPost />} />
        <Route path='admin/CreateBlog' element={<CreateBlog />} />
        <Route path='/services/beginner-plan' element={<BeginnerPlan />} />
        <Route path='/services/intermediate-plan' element={<IntermediatePlan />} />
        <Route path='/services/advanced-plan' element={<AdvancedPlan />} />
      </Route>

      <Route>
        
      </Route>
      
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default router
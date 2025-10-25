// Centralized routing configuration for the CodeFit app

import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.jsx'
import AuthLayout from './layouts/AuthLayout.jsx'
import {Home, Login, Signup, Blog, BlogPost, Dashboard, NotFound} from './pages/export.js'
import CreateBlog from './pages/admin/CreateBlog.jsx'
import { useAuth } from './contexts/AuthContext.jsx'

//Protected Route Component
function ProtectedRoute({ children }) {
  const {user} = useAuth();
  if(!user){
    return <Navigate to="/login" />;
  }
  return children
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="blog" element={<Blog />} />  
        <Route path='blog/:id' element={<BlogPost />} />
        <Route path='admin/CreateBlog' element={<CreateBlog />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route path="dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />
      </Route>  
      
      <Route path="*" element={<NotFound />} />
    </Route>
  )
)

export default router

// Mounts the React app to the DOM. Usually wraps <App /> inside BrowserRouter and Context Providers.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'
import './styles/global.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)

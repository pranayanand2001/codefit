// Common layout for most pages (Navbar + children + Footer)

import { Outlet } from 'react-router-dom'
import { Navbar } from '../components/export'
import Footer from '../components/Footer'
import useHashScroll from '../hooks/useHashScroll'

function MainLayout() {
  useHashScroll()

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 py-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
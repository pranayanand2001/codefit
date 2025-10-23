//Top navigation (fixed header, links to sections)
import { Link } from 'react-router-dom'
import CodeFitLogo from '../assets/icons/CodeFitLogo'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useAuth } from '../hooks/useAuth'
import Button from './Button'

function Navbar() {
  const { user, logout } = useAuth()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0e0e10]/90 backdrop-blur-md border-b border-[#818cf8]/20 shadow-lg z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3 group">
            <motion.div 
              animate={{ rotate: [0, 5, -5, 0] }} 
              transition={{ repeat: Infinity, duration: 3 }}
              className="group-hover:scale-110 transition-transform duration-300"
            >
              <CodeFitLogo size={80} />
            </motion.div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-[#ff3b3b] to-[#818cf8] bg-clip-text text-transparent">
              CodeFit
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 items-center">
            <li>
              <Link 
                to="/blog"
                className="text-[#f8f9fa] hover:text-[#ff3b3b] transition-colors duration-300 font-medium relative group"
              >
                Blog
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff3b3b] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <a 
                href="#services"
                className="text-[#f8f9fa] hover:text-[#ff3b3b] transition-colors duration-300 font-medium relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff3b3b] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            <li>
              <a 
                href="#about"
                className="text-[#f8f9fa] hover:text-[#ff3b3b] transition-colors duration-300 font-medium relative group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff3b3b] group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
            {!user && (
              <>
                <li>
                  <Link 
                    to="/login" 
                    className="text-[#f8f9fa] hover:text-[#ff3b3b] transition-colors duration-300 font-medium relative group"
                  >
                    Sign in
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff3b3b] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
                <li>
                  <Link to="/signup">
                    <Button size="sm" className="ml-2">Create account</Button>
                  </Link>
                </li>
              </>
            )}
            {user && (
              <li>
                <Button size="sm" variant="secondary" onClick={logout}>Sign out</Button>
              </li>
            )}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#f8f9fa] hover:text-[#ff3b3b] transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-[#818cf8]/20"
          >
            <ul className="py-4 space-y-4">
              <li>
                <Link 
                  to="/blog" 
                  className="block text-[#f8f9fa] hover:text-[#ff3b3b] transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </Link>
              </li>
              <li>
              <Link 
                  to="/about" 
                  className="block text-[#f8f9fa] hover:text-[#ff3b3b] transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  to="/services"
                  className="block text-[#f8f9fa] hover:text-[#ff3b3b] transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              {!user && (
                <>
                  <li>
                    <Link 
                      to="/login" 
                      className="block text-[#f8f9fa] hover:text-[#ff3b3b] transition-colors duration-300 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Sign in
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/register" 
                      className="block text-[#f8f9fa] hover:text-[#ff3b3b] transition-colors duration-300 font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Create account
                    </Link>
                  </li>
                </>
              )}
              {user && (
                <li>
                  <button 
                    className="block w-full text-left text-[#f8f9fa] hover:text-[#ff3b3b] transition-colors duration-300 font-medium"
                    onClick={() => {
                      logout()
                      setIsMenuOpen(false)
                    }}
                  >
                    Sign out
                  </button>
                </li>
              )}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
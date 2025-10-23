// src/pages/NotFound.jsx
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Button from '../components/Button'

function NotFound() {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Number */}
          <h1 className="text-9xl font-bold text-red-500 mb-4">404</h1>
          
          {/* Error Message */}
          <h2 className="text-2xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          
          {/* Description */}
          <p className="text-gray-400 mb-8">
            Oops! The page you're looking for seems to have gone for a workout 
            and hasn't come back yet.
          </p>
          
          {/* Action Buttons */}
          <div className="space-y-4">
            <Link to="/">
              <Button className="w-full md:w-auto">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 mr-2" 
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path 
                    fillRule="evenodd" 
                    d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
                    clipRule="evenodd" 
                  />
                </svg>
                Back to Home
              </Button>
            </Link>
            
            <p className="text-gray-500">
              Need help? {' '}
              <Link 
                to="/contact" 
                className="text-red-500 hover:text-red-400 transition-colors"
              >
                Contact us
              </Link>
            </p>
          </div>
        </motion.div>
        
        {/* Background Animation */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              backgroundImage: `radial-gradient(circle at center, rgba(239, 68, 68, 0.1) 0%, transparent 50%)`,
              backgroundSize: '100% 100%',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default NotFound
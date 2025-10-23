// Geometric background patterns combining code brackets and fitness elements

import { motion } from 'framer-motion'

const BackgroundPattern = ({ 
  variant = 'default',
  opacity = 0.05,
  className = '',
  animated = true,
  ...props 
}) => {
  const patterns = {
    default: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
        {...props}
      >
        {/* Code Brackets Pattern */}
        <g opacity={opacity}>
          {/* Left brackets */}
          <path
            d="M50 50 L40 50 L40 80 L30 80 L30 120 L40 120 L40 150 L50 150"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M50 200 L40 200 L40 230 L30 230 L30 270 L40 270 L40 300 L50 300"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Right brackets */}
          <path
            d="M350 50 L360 50 L360 80 L370 80 L370 120 L360 120 L360 150 L350 150"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M350 200 L360 200 L360 230 L370 230 L370 270 L360 270 L360 300 L350 300"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          
          {/* Dumbbell shapes */}
          <g transform="translate(100, 100)">
            <rect x="0" y="10" width="20" height="5" rx="2.5" fill="currentColor"/>
            <rect x="0" y="35" width="20" height="5" rx="2.5" fill="currentColor"/>
            <rect x="-5" y="15" width="5" height="20" rx="2.5" fill="currentColor"/>
            <rect x="20" y="15" width="5" height="20" rx="2.5" fill="currentColor"/>
            <rect x="7.5" y="20" width="5" height="10" rx="2.5" fill="currentColor"/>
          </g>
          
          <g transform="translate(280, 250)">
            <rect x="0" y="10" width="20" height="5" rx="2.5" fill="currentColor"/>
            <rect x="0" y="35" width="20" height="5" rx="2.5" fill="currentColor"/>
            <rect x="-5" y="15" width="5" height="20" rx="2.5" fill="currentColor"/>
            <rect x="20" y="15" width="5" height="20" rx="2.5" fill="currentColor"/>
            <rect x="7.5" y="20" width="5" height="10" rx="2.5" fill="currentColor"/>
          </g>
          
          {/* Grid lines */}
          <g stroke="currentColor" strokeWidth="1" opacity="0.3">
            <line x1="0" y1="100" x2="400" y2="100"/>
            <line x1="0" y1="200" x2="400" y2="200"/>
            <line x1="0" y1="300" x2="400" y2="300"/>
            <line x1="100" y1="0" x2="100" y2="400"/>
            <line x1="200" y1="0" x2="200" y2="400"/>
            <line x1="300" y1="0" x2="300" y2="400"/>
          </g>
        </g>
      </svg>
    ),
    
    minimal: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
        {...props}
      >
        <g opacity={opacity}>
          {/* Simple bracket pattern */}
          <path
            d="M50 50 L40 50 L40 150 L50 150"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M150 50 L160 50 L160 150 L150 150"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          
          {/* Minimal dumbbell */}
          <g transform="translate(85, 85)">
            <rect x="0" y="10" width="30" height="5" rx="2.5" fill="currentColor"/>
            <rect x="0" y="35" width="30" height="5" rx="2.5" fill="currentColor"/>
            <rect x="12.5" y="15" width="5" height="20" rx="2.5" fill="currentColor"/>
          </g>
        </g>
      </svg>
    ),
    
    grid: (
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
        {...props}
      >
        <g opacity={opacity}>
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </g>
      </svg>
    )
  }

  const PatternComponent = patterns[variant] || patterns.default

  if (animated) {
    return (
      <motion.div
        className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 100,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
        >
          {PatternComponent}
        </motion.div>
      </motion.div>
    )
  }

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {PatternComponent}
    </div>
  )
}

export default BackgroundPattern

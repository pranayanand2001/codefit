// Used for displaying services, plans, or blog entries

import { motion } from 'framer-motion'

function Card({ 
  children, 
  className = '',
  hover = true,
  padding = 'md',
  variant = 'default',
  ...props 
}) {
  const baseClasses = 'relative overflow-hidden transition-all duration-300'
  
  const variants = {
    default: 'bg-[#1f1f22] rounded-2xl shadow-lg border border-[#818cf8]/20',
    elevated: 'bg-[#1f1f22] rounded-2xl shadow-xl border border-[#818cf8]/30',
    glass: 'bg-[#1f1f22]/80 backdrop-blur-sm rounded-2xl shadow-lg border border-[#818cf8]/20'
  }
  
  const paddingClasses = {
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${paddingClasses[padding]} ${className}`

  return (
    <motion.div
      className={classes}
      whileHover={hover ? { 
        scale: 1.02, 
        y: -4,
        boxShadow: '0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(129,140,248,0.2)'
      } : {}}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 20,
        duration: 0.3 
      }}
      {...props}
    >
      {children}
      {hover && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-[#818cf8]/5 to-[#ff3b3b]/5 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.div>
  )
}

export default Card
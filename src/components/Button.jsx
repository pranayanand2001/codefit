// Custom-styled buttons used site-wide

import { motion } from 'framer-motion'

function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  type = 'button',
  disabled = false,
  className = '',
  as: Component = 'button',
  ...props 
}) {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ff3b3b] relative overflow-hidden'
  
  const variants = {
    primary: 'bg-[#ff3b3b] text-white hover:bg-[#e63535] shadow-lg hover:shadow-[0_0_20px_rgba(255,59,59,0.4)] border border-[#ff3b3b]/20',
    secondary: 'bg-[#1f1f22] text-white hover:bg-[#2a2a2e] border border-[#818cf8]/30 hover:border-[#818cf8]/60 shadow-lg hover:shadow-[0_0_20px_rgba(129,140,248,0.2)]',
    outline: 'border-2 border-[#ff3b3b] text-[#ff3b3b] hover:bg-[#ff3b3b] hover:text-white shadow-lg hover:shadow-[0_0_20px_rgba(255,59,59,0.3)]',
    ghost: 'text-[#ff3b3b] hover:bg-[#ff3b3b]/10 hover:shadow-[0_0_20px_rgba(255,59,59,0.2)]'
  }
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed hover:shadow-none' : ''
  }`

  return (
    <motion.div
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Component
        type={Component === 'button' ? type : undefined}
        onClick={onClick}
        disabled={disabled}
        className={classes}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {variant === 'primary' && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
        )}
      </Component>
    </motion.div>
  )
}

export default Button
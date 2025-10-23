// Common styled input field for forms

import { forwardRef } from 'react'

const Input = forwardRef(({ 
  type = 'text',
  placeholder = '',
  label = '',
  error = '',
  className = '',
  value,
  onChange,
  required = false,
  disabled = false,
  ...props 
}, ref) => {
  const baseClasses = 'w-full p-4 rounded-xl bg-[#0e0e10] border border-[#818cf8]/30 text-[#f8f9fa] placeholder-[#a1a1aa] focus:outline-none focus:ring-2 focus:ring-[#ff3b3b] focus:border-transparent transition-all duration-300 hover:border-[#818cf8]/50'
  
  const classes = `${baseClasses} ${error ? 'border-red-500 focus:ring-red-500' : ''} ${className}`

  return (
    <div className="space-y-2">
      {label && (
        <label className="block text-sm font-medium text-[#f8f9fa]">
          {label}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className={classes}
        {...props}
      />
      {error && (
        <p className="text-red-400 text-sm flex items-center gap-1">
          <span className="w-1 h-1 bg-red-400 rounded-full"></span>
          {error}
        </p>
      )}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
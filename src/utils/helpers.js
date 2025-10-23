// Small utility functions for common operations

// Date formatting utilities
export const formatDate = (date, options = {}) => {
  const defaultOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }
  
  return new Date(date).toLocaleDateString('en-US', { ...defaultOptions, ...options })
}

export const formatTime = (date) => {
  return new Date(date).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  })
}

export const formatDateTime = (date) => {
  return `${formatDate(date)} at ${formatTime(date)}`
}

// Fitness calculation utilities
export const calculateBMI = (weight, height) => {
  // BMI = weight(kg) / height(m)²
  const heightInMeters = height / 100
  return (weight / (heightInMeters * heightInMeters)).toFixed(1)
}

export const getBMICategory = (bmi) => {
  if (bmi < 18.5) return { category: 'Underweight', color: 'blue' }
  if (bmi < 25) return { category: 'Normal weight', color: 'green' }
  if (bmi < 30) return { category: 'Overweight', color: 'yellow' }
  return { category: 'Obese', color: 'red' }
}

export const calculateCaloriesBurned = (duration, intensity, weight) => {
  // Simplified calorie calculation
  // MET values: Light = 3, Moderate = 5, High = 8
  const metValues = { light: 3, moderate: 5, high: 8 }
  const met = metValues[intensity.toLowerCase()] || 5
  
  // Calories = MET × weight(kg) × time(hours)
  return Math.round(met * weight * (duration / 60))
}

// String utilities
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text
  return text.substring(0, maxLength) + '...'
}

export const slugify = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

// Number utilities
export const formatNumber = (num, decimals = 0) => {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  }).format(num)
}

export const formatWeight = (weight, unit = 'kg') => {
  return `${formatNumber(weight, 1)} ${unit}`
}

export const formatDistance = (distance, unit = 'km') => {
  return `${formatNumber(distance, 2)} ${unit}`
}

// Array utilities
export const groupBy = (array, key) => {
  return array.reduce((groups, item) => {
    const group = item[key]
    groups[group] = groups[group] || []
    groups[group].push(item)
    return groups
  }, {})
}

export const sortBy = (array, key, direction = 'asc') => {
  return array.sort((a, b) => {
    const aVal = a[key]
    const bVal = b[key]
    
    if (direction === 'asc') {
      return aVal > bVal ? 1 : -1
    } else {
      return aVal < bVal ? 1 : -1
    }
  })
}

// Local storage utilities
export const saveToStorage = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
    return true
  } catch (error) {
    console.error('Failed to save to localStorage:', error)
    return false
  }
}

export const loadFromStorage = (key, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key)
    return item ? JSON.parse(item) : defaultValue
  } catch (error) {
    console.error('Failed to load from localStorage:', error)
    return defaultValue
  }
}

export const removeFromStorage = (key) => {
  try {
    localStorage.removeItem(key)
    return true
  } catch (error) {
    console.error('Failed to remove from localStorage:', error)
    return false
  }
}

// Validation utilities
export const isValidEmail = (email) => {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return pattern.test(email)
}

export const isValidPassword = (password) => {
  return password.length >= 8
}

export const isValidPhone = (phone) => {
  const pattern = /^\+?[\d\s-()]+$/
  return pattern.test(phone) && phone.replace(/\D/g, '').length >= 10
}

// Time utilities
export const getTimeAgo = (date) => {
  const now = new Date()
  const diffInSeconds = Math.floor((now - new Date(date)) / 1000)
  
  if (diffInSeconds < 60) return 'Just now'
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 86400)} days ago`
  
  return formatDate(date)
}

export const getDuration = (startTime, endTime) => {
  const start = new Date(startTime)
  const end = new Date(endTime)
  const diffInMinutes = Math.floor((end - start) / (1000 * 60))
  
  if (diffInMinutes < 60) return `${diffInMinutes} minutes`
  
  const hours = Math.floor(diffInMinutes / 60)
  const minutes = diffInMinutes % 60
  
  return minutes > 0 ? `${hours}h ${minutes}m` : `${hours}h`
}
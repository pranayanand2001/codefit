// Functions for email/password validation and form validation

import { VALIDATION } from './constants'

// Email validation
export const validateEmail = (email) => {
  if (!email) {
    return { isValid: false, message: 'Email is required' }
  }
  
  if (!VALIDATION.EMAIL.PATTERN.test(email)) {
    return { isValid: false, message: 'Please enter a valid email address' }
  }
  
  return { isValid: true }
}

// Password validation
export const validatePassword = (password) => {
  if (!password) {
    return { isValid: false, message: 'Password is required' }
  }
  
  if (password.length < VALIDATION.PASSWORD.MIN_LENGTH) {
    return { 
      isValid: false, 
      message: `Password must be at least ${VALIDATION.PASSWORD.MIN_LENGTH} characters long` 
    }
  }
  
  if (VALIDATION.PASSWORD.REQUIRE_UPPERCASE && !/[A-Z]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one uppercase letter' }
  }
  
  if (VALIDATION.PASSWORD.REQUIRE_LOWERCASE && !/[a-z]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one lowercase letter' }
  }
  
  if (VALIDATION.PASSWORD.REQUIRE_NUMBERS && !/\d/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one number' }
  }
  
  if (VALIDATION.PASSWORD.REQUIRE_SPECIAL_CHARS && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return { isValid: false, message: 'Password must contain at least one special character' }
  }
  
  return { isValid: true }
}

// Confirm password validation
export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) {
    return { isValid: false, message: 'Please confirm your password' }
  }
  
  if (password !== confirmPassword) {
    return { isValid: false, message: 'Passwords do not match' }
  }
  
  return { isValid: true }
}

// Name validation
export const validateName = (name) => {
  if (!name) {
    return { isValid: false, message: 'Name is required' }
  }
  
  if (name.length < 2) {
    return { isValid: false, message: 'Name must be at least 2 characters long' }
  }
  
  if (!/^[a-zA-Z\s]+$/.test(name)) {
    return { isValid: false, message: 'Name can only contain letters and spaces' }
  }
  
  return { isValid: true }
}

// Username validation
export const validateUsername = (username) => {
  if (!username) {
    return { isValid: false, message: 'Username is required' }
  }
  
  if (username.length < VALIDATION.USERNAME.MIN_LENGTH) {
    return { 
      isValid: false, 
      message: `Username must be at least ${VALIDATION.USERNAME.MIN_LENGTH} characters long` 
    }
  }
  
  if (username.length > VALIDATION.USERNAME.MAX_LENGTH) {
    return { 
      isValid: false, 
      message: `Username must be no more than ${VALIDATION.USERNAME.MAX_LENGTH} characters long` 
    }
  }
  
  if (!VALIDATION.USERNAME.PATTERN.test(username)) {
    return { 
      isValid: false, 
      message: 'Username can only contain letters, numbers, and underscores' 
    }
  }
  
  return { isValid: true }
}

// Phone number validation
export const validatePhone = (phone) => {
  if (!phone) {
    return { isValid: false, message: 'Phone number is required' }
  }
  
  const cleaned = phone.replace(/\D/g, '')
  
  if (cleaned.length < 10) {
    return { isValid: false, message: 'Please enter a valid phone number' }
  }
  
  return { isValid: true }
}

// Age validation
export const validateAge = (age) => {
  if (!age) {
    return { isValid: false, message: 'Age is required' }
  }
  
  const ageNum = parseInt(age)
  
  if (isNaN(ageNum)) {
    return { isValid: false, message: 'Please enter a valid age' }
  }
  
  if (ageNum < 13) {
    return { isValid: false, message: 'You must be at least 13 years old' }
  }
  
  if (ageNum > 120) {
    return { isValid: false, message: 'Please enter a valid age' }
  }
  
  return { isValid: true }
}

// Weight validation
export const validateWeight = (weight) => {
  if (!weight) {
    return { isValid: false, message: 'Weight is required' }
  }
  
  const weightNum = parseFloat(weight)
  
  if (isNaN(weightNum)) {
    return { isValid: false, message: 'Please enter a valid weight' }
  }
  
  if (weightNum < 20 || weightNum > 500) {
    return { isValid: false, message: 'Please enter a weight between 20 and 500 kg' }
  }
  
  return { isValid: true }
}

// Height validation
export const validateHeight = (height) => {
  if (!height) {
    return { isValid: false, message: 'Height is required' }
  }
  
  const heightNum = parseFloat(height)
  
  if (isNaN(heightNum)) {
    return { isValid: false, message: 'Please enter a valid height' }
  }
  
  if (heightNum < 100 || heightNum > 250) {
    return { isValid: false, message: 'Please enter a height between 100 and 250 cm' }
  }
  
  return { isValid: true }
}

// Form validation helper
export const validateForm = (formData, rules) => {
  const errors = {}
  let isValid = true
  
  Object.keys(rules).forEach(field => {
    const rule = rules[field]
    const value = formData[field]
    
    let result = { isValid: true }
    
    // Apply validation based on rule type
    switch (rule.type) {
      case 'email':
        result = validateEmail(value)
        break
      case 'password':
        result = validatePassword(value)
        break
      case 'confirmPassword':
        result = validateConfirmPassword(formData.password, value)
        break
      case 'name':
        result = validateName(value)
        break
      case 'username':
        result = validateUsername(value)
        break
      case 'phone':
        result = validatePhone(value)
        break
      case 'age':
        result = validateAge(value)
        break
      case 'weight':
        result = validateWeight(value)
        break
      case 'height':
        result = validateHeight(value)
        break
      case 'required':
        result = value ? { isValid: true } : { isValid: false, message: `${field} is required` }
        break
      default:
        // Custom validation function
        if (typeof rule.validator === 'function') {
          result = rule.validator(value, formData)
        }
    }
    
    if (!result.isValid) {
      errors[field] = result.message
      isValid = false
    }
  })
  
  return { isValid, errors }
}

// Common validation rules
export const AUTH_RULES = {
  email: { type: 'email' },
  password: { type: 'password' },
  confirmPassword: { type: 'confirmPassword' },
  name: { type: 'name' }
}

export const PROFILE_RULES = {
  name: { type: 'name' },
  email: { type: 'email' },
  age: { type: 'age' },
  weight: { type: 'weight' },
  height: { type: 'height' },
  phone: { type: 'phone' }
}
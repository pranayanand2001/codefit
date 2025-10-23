// App-wide constants like API base URL, color codes, and configuration

// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  TIMEOUT: 10000,
  RETRY_ATTEMPTS: 3
}

// App Configuration
export const APP_CONFIG = {
  NAME: 'CodeFit',
  VERSION: '1.0.0',
  DESCRIPTION: 'Where tech meets fitness',
  TAGLINE: 'Code Your Body, Fit Your Life'
}

// Theme Colors
export const COLORS = {
  primary: '#ff3b3b', // CodeFit red
  secondary: '#818cf8', // CodeFit purple
  background: '#0e0e10', // Dark background
  surface: '#1f1f22', // Section background
  text: '#f8f9fa', // Primary text
  textSecondary: '#a1a1aa', // Secondary text
  textMuted: '#71717a', // Muted text
  success: '#10b981', // emerald-500
  warning: '#f59e0b', // amber-500
  error: '#ff3b3b', // CodeFit red
  info: '#818cf8' // CodeFit purple
}

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'codefit_token',
  USER_DATA: 'codefit_user',
  THEME: 'codefit_theme',
  WORKOUTS: 'codefit_workouts',
  PROGRESS: 'codefit_progress'
}

// Workout Types
export const WORKOUT_TYPES = {
  PUSH: 'Push Day',
  PULL: 'Pull Day',
  LEGS: 'Leg Day',
  CARDIO: 'Cardio',
  HIIT: 'HIIT',
  YOGA: 'Yoga',
  STRETCHING: 'Stretching'
}

// Exercise Categories
export const EXERCISE_CATEGORIES = {
  CHEST: 'Chest',
  BACK: 'Back',
  SHOULDERS: 'Shoulders',
  ARMS: 'Arms',
  LEGS: 'Legs',
  CORE: 'Core',
  CARDIO: 'Cardio'
}

// Validation Rules
export const VALIDATION = {
  PASSWORD: {
    MIN_LENGTH: 8,
    REQUIRE_UPPERCASE: true,
    REQUIRE_LOWERCASE: true,
    REQUIRE_NUMBERS: true,
    REQUIRE_SPECIAL_CHARS: false
  },
  EMAIL: {
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  USERNAME: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 30,
    PATTERN: /^[a-zA-Z0-9_]+$/
  }
}

// Route Paths
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  WORKOUTS: '/workouts',
  PLANS: '/plans',
  ABOUT: '/about',
  CONTACT: '/contact'
}

// Default Workout Plans
export const DEFAULT_PLANS = {
  BEGINNER: {
    name: 'Beginner Plan',
    description: 'Perfect for those just starting their fitness journey',
    duration: '4 weeks',
    workoutsPerWeek: 3,
    difficulty: 'Beginner'
  },
  INTERMEDIATE: {
    name: 'Intermediate Plan',
    description: 'Step up your game with more intense workouts',
    duration: '6 weeks',
    workoutsPerWeek: 4,
    difficulty: 'Intermediate'
  },
  ADVANCED: {
    name: 'Advanced Plan',
    description: 'Push your limits with high-level programs',
    duration: '8 weeks',
    workoutsPerWeek: 5,
    difficulty: 'Advanced'
  }
}
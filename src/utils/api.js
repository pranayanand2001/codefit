// API utilities for backend communication

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api'

class ApiClient {
  constructor() {
    this.baseURL = API_BASE_URL
  }

  async request(endpoint, options = {}) {
    const url = `${this.baseURL}${endpoint}`
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    }

    // Add auth token if available
    const token = localStorage.getItem('codefit_token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    try {
      const response = await fetch(url, config)
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      return await response.json()
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  // GET request
  async get(endpoint) {
    return this.request(endpoint, { method: 'GET' })
  }

  // POST request
  async post(endpoint, data) {
    return this.request(endpoint, {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

  // PUT request
  async put(endpoint, data) {
    return this.request(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data)
    })
  }

  // DELETE request
  async delete(endpoint) {
    return this.request(endpoint, { method: 'DELETE' })
  }
}

export const apiClient = new ApiClient()

// Auth API calls
export const authAPI = {
  login: (email, password) => 
    apiClient.post('/auth/login', { email, password }),
  
  register: (userData) => 
    apiClient.post('/auth/register', userData),
  
  logout: () => 
    apiClient.post('/auth/logout'),
  
  getProfile: () => 
    apiClient.get('/auth/profile')
}

// Workout API calls
export const workoutAPI = {
  getWorkouts: () => 
    apiClient.get('/workouts'),
  
  createWorkout: (workoutData) => 
    apiClient.post('/workouts', workoutData),
  
  updateWorkout: (id, workoutData) => 
    apiClient.put(`/workouts/${id}`, workoutData),
  
  deleteWorkout: (id) => 
    apiClient.delete(`/workouts/${id}`)
}
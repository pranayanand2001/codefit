// Signup page for new users

import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Button from '../components/Button'
import Input from '../components/Input'
import GoogleLoginBtn from './GoogleLoginBtn'

function Signup() {
  const navigate = useNavigate()
  const { signup } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      return setError('Passwords do not match')
    }

    setLoading(true)

    try {
      const result = await signup(formData.name, formData.email, formData.password)
      if (result.success) {
        navigate('/')
      } else {
        setError(result.error)
      }
    } catch (err) {
      console.error('Signup error:', err)
      setError('Failed to create account. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="max-w-md w-full mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Create Account</h1>
      
      {error && (
        <div className="bg-red-900/50 text-red-300 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="text"
          name="name"
          label="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <Input
          type="email"
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <Input
          type="password"
          name="password"
          label="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <Input
          type="password"
          name="confirmPassword"
          label="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />

        <Button
          type="submit"
          disabled={loading}
          className="w-full"
        >
          {loading ? 'Creating Account...' : 'Sign Up'}
        </Button>
      </form>

      <div className="mt-6 space-y-4">
        <GoogleLoginBtn />
        <p className="text-center">
          Already have an account? <Link to="/login" className="text-red-500 hover:text-red-400">Login</Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
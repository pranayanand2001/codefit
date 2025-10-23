import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import Button from '../components/Button'
import Input from '../components/Input'

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    setError('')
    setLoading(true)

    try {
      console.log('Attempting login with:', formData.email) // Debug log
      const result = await login(formData.email, formData.password)
      console.log('Login result:', result) // Debug log

      if (result.success) {
        console.log('Login successful, navigating to dashboard') // Debug log
        navigate('/dashboard')
      } else {
        setError(result.error || 'Failed to sign in')
      }
    } catch (err) {
      console.error('Login error:', err) // Debug log
      setError('Failed to sign in. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>
      
      {error && (
        <div className="bg-red-500/10 border border-red-500/50 text-red-500 rounded-lg p-4 mb-6">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="email"
          name="email"
          label="Email Address"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
        />
        
        <Input
          type="password"
          name="password"
          label="Password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          required
          disabled={loading}
        />

        <Button
          type="submit"
          className="w-full"
          disabled={loading || !formData.email || !formData.password}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <span className="mr-2">Signing in</span>
              <span className="animate-pulse">...</span>
            </div>
          ) : (
            'Sign In'
          )}
        </Button>
      </form>

      <div className="mt-6 text-center space-y-4">
        <Link 
          to="/forgot-password" 
          className="text-sm text-red-500 hover:text-red-400"
        >
          Forgot Password?
        </Link>

        <p className="text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-red-500 hover:text-red-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
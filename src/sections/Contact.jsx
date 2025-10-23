// Contact form section

import { useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // TODO: Implement contact form submission
      console.log('Contact form submitted:', formData)
      alert('Message sent successfully!')
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      alert('Failed to send message. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-red-500 mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Input
          type="text"
          name="name"
          placeholder="Enter your name"
          label="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        
        <Input
          type="email"
          name="email"
          placeholder="Enter your email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">
            Message
          </label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200"
            required
          />
        </div>
        
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </form>
    </section>
  )
}

export default Contact
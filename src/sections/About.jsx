// src/sections/About.jsx
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import Button from '../components/Button'
import Input from '../components/Input'
import BackgroundPattern from '../components/BackgroundPattern'
import { EMAIL_CONFIG } from '../utils/email'
import { motion } from 'framer-motion'

function About() {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    console.log('Form Data:', formData)

    try {
      const result = await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        EMAIL_CONFIG.PUBLIC_KEY
      )

      if (result.status === 200) {
        setStatus({ type: 'success', message: 'Message sent successfully!' })
        setFormData({ name: '', email: '', message: '' })
      }
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({ 
        type: 'error', 
        message: 'Failed to send message. Please try again later.' 
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <section id="about" className="relative section-spacing bg-[#0e0e10] overflow-hidden">
      {/* Background Pattern */}
      <BackgroundPattern variant="grid" opacity={0.02} className="text-[#818cf8]" />
      
      <div className="relative z-10 container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-heading font-bold bg-gradient-to-r from-[#ff3b3b] to-[#818cf8] bg-clip-text text-transparent mb-6">
            About CodeFit
          </h2>
          <p className="text-body text-[#a1a1aa] max-w-3xl mx-auto">
            Where tech meets fitness. We help people who spend long hours sitting stay strong, mobile, and energized
          </p>
        </motion.div>

        {/* Main Content: About Info and Contact Form Side by Side */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side: About Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-bold text-[#f8f9fa] mb-4">What is CodeFit?</h3>
              <p className="text-body text-[#a1a1aa] leading-relaxed">
                Our platform combines the precision of coding with the discipline of fitness, creating a unique approach to wellness that resonates with working professionals.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-[#1f1f22] p-6 rounded-2xl border border-[#818cf8]/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#ff3b3b] to-[#818cf8] rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">🎯</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#f8f9fa]">Our Mission</h3>
                </div>
                <p className="text-[#a1a1aa]">To make strength and mobility accessible to anyone, anywhere.</p>
              </div>
              
              <div className="bg-[#1f1f22] p-6 rounded-2xl border border-[#818cf8]/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#818cf8] to-[#ff3b3b] rounded-xl flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">🚀</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#f8f9fa]">Our Vision</h3>
                </div>
                <p className="text-[#a1a1aa]">A world where anyone can stay fit and confident using just their body, time, and commitment.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#1f1f22] p-6 rounded-2xl shadow-xl border border-[#818cf8]/20 sticky top-24">
              <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-[#ff3b3b] to-[#818cf8] bg-clip-text text-transparent">
                Get in Touch
              </h3>

              {status.message && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={`mb-4 p-3 rounded-xl text-sm ${
                    status.type === 'success' 
                      ? 'bg-green-500/10 border border-green-500/20 text-green-400' 
                      : 'bg-red-500/10 border border-red-500/20 text-red-400'
                  }`}
                >
                  {status.message}
                </motion.div>
              )}
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-4">
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
                  <label className="block text-sm font-medium text-[#f8f9fa]">
                    Message
                  </label>
                  <textarea
                    name="message"
                    placeholder="Enter your message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl bg-[#0e0e10] border border-[#818cf8]/30 text-[#f8f9fa] placeholder-[#a1a1aa] focus:outline-none focus:ring-2 focus:ring-[#ff3b3b] focus:border-transparent transition-all duration-300 resize-none text-sm"
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
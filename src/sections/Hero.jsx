// First section — tagline, CTA, background animation, maybe logo

import Button from '../components/Button'
import BackgroundPattern from '../components/BackgroundPattern'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center section-spacing overflow-hidden">
      {/* Background Pattern */}
      <BackgroundPattern variant="default" opacity={0.08} className="text-[#818cf8]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e10] via-[#0e0e10]/95 to-[#1f1f22]/90" />
      
      {/* Content */}
      <div className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Heading */}
          <motion.h1 
            className="text-hero font-extrabold bg-gradient-to-r from-[#ff3b3b] via-[#ff6b6b] to-[#818cf8] bg-clip-text text-transparent mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Where Code Meets Core Strength
          </motion.h1>
          
          {/* Subtitle */}
          <motion.p 
            className="text-body text-[#a1a1aa] max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Transform your developer lifestyle with personalized fitness plans, 
            workout tracking, and wellness guidance designed specifically for the tech community.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex gap-6 flex-wrap justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button as="a" href="#services" size="lg" variant="primary">
              Explore Plans
            </Button>
            <Button as="a" href="#about" variant="outline" size="lg">
              Learn More
            </Button>
          </motion.div>
          
          {/* Feature Highlights */}
          <motion.div 
            className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-[#ff3b3b] to-[#818cf8] rounded-xl flex items-center justify-center">
                <span className="font-bold text-xl">💻</span>
              </div>
              <h3 className="text-subheading text-[#f8f9fa] mb-2">Code-Inspired</h3>
              <p className="text-muted">Fitness routines designed for people who sit, type, and grind all day</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-[#818cf8] to-[#ff3b3b] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-subheading text-[#f8f9fa] mb-2">Track Progress</h3>
              <p className="text-muted">Monitor your fitness journey with detailed analytics</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-[#ff3b3b] to-[#818cf8] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">💪</span>
              </div>
              <h3 className="text-subheading text-[#f8f9fa] mb-2">Stay Motivated</h3>
              <p className="text-muted">Join a community of like-minded tech professionals</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-[#818cf8]/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-[#818cf8] rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
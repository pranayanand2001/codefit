// List of plans (Beginner, Intermediate, Advanced)

import Card from '../components/Card'
import BackgroundPattern from '../components/BackgroundPattern'
import { DEFAULT_PLANS } from '../utils/constants'
import { motion } from 'framer-motion'

function Services() {
  const plans = Object.values(DEFAULT_PLANS)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="relative section-spacing bg-[#1f1f22] overflow-hidden">
      {/* Background Pattern */}
      <BackgroundPattern variant="minimal" opacity={0.03} className="text-[#818cf8]" />
      
      <div className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-heading font-bold bg-gradient-to-r from-[#ff3b3b] to-[#818cf8] bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-body text-[#a1a1aa] max-w-3xl mx-auto">
            Choose from our carefully crafted fitness plans designed specifically for developers and tech professionals.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {plans.map((plan, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card 
                className="text-center h-full group"
                variant="elevated"
                padding="lg"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#ff3b3b] to-[#818cf8] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">
                      {index === 0 ? '🚀' : index === 1 ? '⚡' : '🔥'}
                    </span>
                  </div>
                  <h3 className="text-subheading font-bold text-[#f8f9fa] mb-4">
                    {plan.name}
                  </h3>
                  <p className="text-body text-[#a1a1aa] mb-6 leading-relaxed">
                    {plan.description}
                  </p>
                </div>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center py-2 px-4 bg-[#0e0e10]/50 rounded-lg">
                    <span className="text-[#a1a1aa]">Duration</span>
                    <span className="text-[#f8f9fa] font-medium">{plan.duration}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-4 bg-[#0e0e10]/50 rounded-lg">
                    <span className="text-[#a1a1aa]">Frequency</span>
                    <span className="text-[#f8f9fa] font-medium">{plan.workoutsPerWeek} workouts/week</span>
                  </div>
                  <div className="flex justify-between items-center py-2 px-4 bg-[#0e0e10]/50 rounded-lg">
                    <span className="text-[#a1a1aa]">Level</span>
                    <span className={`font-medium px-3 py-1 rounded-full text-xs ${
                      plan.difficulty === 'Beginner' 
                        ? 'bg-green-500/20 text-green-400' 
                        : plan.difficulty === 'Intermediate'
                        ? 'bg-yellow-500/20 text-yellow-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {plan.difficulty}
                    </span>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-[#818cf8]/20">
                  <button className="w-full py-3 px-6 bg-gradient-to-r from-[#ff3b3b] to-[#818cf8] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#ff3b3b]/25 transition-all duration-300 transform hover:scale-105">
                    Get Started
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services
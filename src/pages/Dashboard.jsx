// Protected user dashboard (workout plans, progress charts)

import { useState } from 'react'
import Card from '../components/Card'
import Button from '../components/Button'
import BackgroundPattern from '../components/BackgroundPattern'
import { motion } from 'framer-motion'

function Dashboard() {
  const [workouts] = useState([
    { id: 1, name: 'Push Day', exercises: 6, completed: true },
    { id: 2, name: 'Pull Day', exercises: 5, completed: false },
    { id: 3, name: 'Leg Day', exercises: 8, completed: false }
  ])

  return (
    <div className="min-h-screen bg-[#0e0e10] section-spacing relative overflow-hidden">
      {/* Background Pattern */}
      <BackgroundPattern variant="grid" opacity={0.02} className="text-[#818cf8]" />
      
      <div className="relative z-10 container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-section-heading font-bold bg-gradient-to-r from-[#ff3b3b] to-[#818cf8] bg-clip-text text-transparent mb-4">
            Dashboard
          </h1>
          <p className="text-body text-[#a1a1aa]">Track your fitness journey and monitor your progress</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card variant="elevated" className="text-center">
            <div className="mb-4">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-[#ff3b3b] to-[#ff6b6b] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">💪</span>
              </div>
              <h3 className="text-subheading font-semibold text-[#f8f9fa] mb-2">Total Workouts</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-[#ff3b3b] to-[#ff6b6b] bg-clip-text text-transparent">24</p>
              <p className="text-muted">This month</p>
            </div>
          </Card>
          
          <Card variant="elevated" className="text-center">
            <div className="mb-4">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-[#10b981] to-[#34d399] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">🔥</span>
              </div>
              <h3 className="text-subheading font-semibold text-[#f8f9fa] mb-2">Streak</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-[#10b981] to-[#34d399] bg-clip-text text-transparent">7 days</p>
              <p className="text-muted">Keep it up!</p>
            </div>
          </Card>
          
          <Card variant="elevated" className="text-center">
            <div className="mb-4">
              <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-subheading font-semibold text-[#f8f9fa] mb-2">Calories Burned</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-[#f59e0b] to-[#fbbf24] bg-clip-text text-transparent">1,240</p>
              <p className="text-muted">Today</p>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Card padding="lg" variant="elevated">
            <h2 className="text-section-heading font-bold text-[#f8f9fa] mb-8">This Week's Workouts</h2>
            <div className="space-y-6">
              {workouts.map((workout, index) => (
                <motion.div 
                  key={workout.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-center justify-between p-6 bg-[#0e0e10] rounded-2xl border border-[#818cf8]/20 hover:border-[#818cf8]/40 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      workout.completed 
                        ? 'bg-gradient-to-r from-[#10b981] to-[#34d399]' 
                        : 'bg-gradient-to-r from-[#818cf8] to-[#a5b4fc]'
                    }`}>
                      <span className="text-white font-bold text-lg">
                        {workout.completed ? '✓' : '○'}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-subheading font-semibold text-[#f8f9fa]">{workout.name}</h3>
                      <p className="text-muted">{workout.exercises} exercises</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      workout.completed 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                        : 'bg-[#818cf8]/20 text-[#818cf8] border border-[#818cf8]/30'
                    }`}>
                      {workout.completed ? 'Completed' : 'Pending'}
                    </span>
                    <Button size="sm" variant={workout.completed ? 'secondary' : 'primary'}>
                      {workout.completed ? 'Review' : 'Start'}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard
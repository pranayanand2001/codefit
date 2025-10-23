// src/utils/rateLimiter.js
class RateLimiter {
  constructor(maxAttempts = 5, timeWindow = 60000) { // 5 attempts per minute by default
    this.attempts = new Map()
    this.maxAttempts = maxAttempts
    this.timeWindow = timeWindow
  }

  async checkLimit(key) {
    const now = Date.now()
    const attempts = this.attempts.get(key) || []

    // Remove attempts outside the time window
    const recentAttempts = attempts.filter(timestamp => now - timestamp < this.timeWindow)

    if (recentAttempts.length >= this.maxAttempts) {
      const oldestAttempt = recentAttempts[0]
      const timeToWait = Math.ceil((oldestAttempt + this.timeWindow - now) / 1000)
      throw new Error(`Too many attempts. Please try again in ${timeToWait} seconds.`)
    }

    // Add current attempt
    recentAttempts.push(now)
    this.attempts.set(key, recentAttempts)
    return true
  }

  clearLimit(key) {
    this.attempts.delete(key)
  }
}

// Create instances for different features
export const authLimiter = new RateLimiter(5, 60000) // 5 attempts per minute
export const contactLimiter = new RateLimiter(2, 300000) // 2 attempts per 5 minutes
export const emailLimiter = new RateLimiter(3, 3600000) // 3 attempts per hour
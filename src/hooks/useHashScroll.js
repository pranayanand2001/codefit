import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Custom hook to handle smooth scrolling to hash anchors
 * When the URL contains a hash (e.g., /#services), scrolls to that element
 */
function useHashScroll() {
  const location = useLocation()

  useEffect(() => {
    // Extract hash from location
    const hash = location.hash.replace('#', '')

    if (hash) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        const element = document.getElementById(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    } else {
      // Scroll to top if no hash
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location])
}

export default useHashScroll

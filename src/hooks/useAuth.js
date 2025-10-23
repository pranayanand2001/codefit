// Custom hook for authentication logic using context

import { useAuth as useAuthContext } from '../contexts/AuthContext'

export function useAuth() {
  const auth = useAuthContext()
  
  const isAuthenticated = !!auth.user
  const isGuest = !auth.user

  return {
    ...auth,
    isAuthenticated,
    isGuest
  }
}
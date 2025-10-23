// Minimal layout for login/register without navbar

import { Outlet } from 'react-router-dom'
import BackgroundPattern from '../components/BackgroundPattern'

function AuthLayout() {
  return (
    <div className="min-h-screen bg-[#0e0e10] flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <BackgroundPattern variant="minimal" opacity={0.03} className="text-[#818cf8]" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e10] via-[#0e0e10]/95 to-[#1f1f22]/90" />
      
      {/* Content */}
      <div className="relative z-10 max-w-md w-full mx-4">
        <div className="bg-[#1f1f22] rounded-2xl shadow-2xl border border-[#818cf8]/20 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AuthLayout
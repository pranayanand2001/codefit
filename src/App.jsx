// Root App component - routing is handled in main.jsx

import { Outlet } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-[#0e0e10] text-[#f8f9fa]">
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default App;

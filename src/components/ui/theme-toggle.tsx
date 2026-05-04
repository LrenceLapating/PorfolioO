'use client'

import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/theme-context'
import { useEffect, useState } from 'react'

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render until mounted to avoid hydration issues
  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 shadow-lg">
        <Moon className="w-5 h-5 text-white opacity-50" />
      </div>
    )
  }

  return <ThemeToggleButton />
}

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-white/10 dark:bg-white/10 backdrop-blur-md border border-neutral-200 dark:border-neutral-700 hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300 cursor-pointer shadow-lg"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: theme === 'dark' ? 0 : 180,
          scale: theme === 'dark' ? 1 : 0.8,
        }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'dark' ? (
          <Moon className="w-5 h-5 text-white" />
        ) : (
          <Sun className="w-5 h-5 text-neutral-900" />
        )}
      </motion.div>
    </motion.button>
  )
}

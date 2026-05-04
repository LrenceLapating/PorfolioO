'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
    // Detect touch device
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(hover: none) and (pointer: coarse)').matches
      )
    }
    
    checkTouchDevice()

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === 'pointer' ||
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      )
    }

    const handleMouseEnter = () => setIsHidden(false)
    const handleMouseLeave = () => setIsHidden(true)

    window.addEventListener('mousemove', moveCursor)
    document.body.addEventListener('mouseenter', handleMouseEnter)
    document.body.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', moveCursor)
      document.body.removeEventListener('mouseenter', handleMouseEnter)
      document.body.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [cursorX, cursorY])

  // Don't render custom cursor on touch devices
  if (isTouchDevice) {
    return null
  }

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-4 h-4 bg-blue-500 dark:bg-blue-500 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 0.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          scale: { duration: 0.2 },
          opacity: { duration: 0.2 },
        }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border-2 border-blue-500/50 dark:border-blue-500/50 rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 1.5 : 1,
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          scale: { duration: 0.3 },
          opacity: { duration: 0.2 },
        }}
      />
    </>
  )
}

'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export function CustomCursorGlow() {
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 30, stiffness: 500 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  useEffect(() => {
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

  return (
    <>
      {/* Glow effect */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 pointer-events-none z-[9997]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          background: 'radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          opacity: isHidden ? 0 : 1,
        }}
        transition={{
          opacity: { duration: 0.2 },
        }}
      />

      {/* Main cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-blue-500 rounded-full pointer-events-none z-[9999]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: '0 0 10px rgba(37, 99, 235, 0.8)',
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
        className="fixed top-0 left-0 w-8 h-8 border border-blue-400/60 rounded-full pointer-events-none z-[9998]"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          scale: isPointer ? 1.8 : 1,
          opacity: isHidden ? 0 : 0.8,
        }}
        transition={{
          scale: { duration: 0.3 },
          opacity: { duration: 0.2 },
        }}
      />
    </>
  )
}

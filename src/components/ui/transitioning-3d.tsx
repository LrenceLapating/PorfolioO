'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { SplineScene } from '@/components/ui/spline'

export function Transitioning3D() {
  const [scrollY, setScrollY] = useState(0)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initialize
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!mounted) {
    return null // Prevent SSR hydration mismatch
  }

  const windowHeight = typeof window !== 'undefined' ? window.innerHeight : 1000
  
  // Calculate progress for each section
  const heroProgress = Math.min(scrollY / windowHeight, 1)
  const aboutProgress = Math.max(0, Math.min((scrollY - windowHeight) / windowHeight, 1))
  const projectsProgress = Math.max(0, Math.min((scrollY - windowHeight * 2) / windowHeight, 1))
  
  // Hero robot opacity: visible at top, fades out as you scroll
  const heroOpacity = 1 - heroProgress
  
  // About robot opacity: fades in as you scroll to about, fades out when scrolling to projects
  const aboutOpacity = heroProgress * (1 - aboutProgress)
  
  // Projects robot opacity: fades in when scrolling to projects section, fades out when scrolling to skills
  const projectsOpacity = aboutProgress * (1 - projectsProgress)
  
  return (
    <>
      {/* Hero Section Robot - Center */}
      <motion.div
        animate={{
          opacity: heroOpacity
        }}
        transition={{
          duration: 0.3
        }}
        className="fixed top-0 left-0 w-full h-screen pointer-events-none z-40 overflow-visible"
        style={{ 
          opacity: heroOpacity,
          visibility: heroOpacity < 0.01 ? 'hidden' : 'visible'
        }}
      >
        <div className="w-full h-full scale-110 pointer-events-auto">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </motion.div>

      {/* About Section Robot - Right Side */}
      <motion.div
        animate={{
          opacity: aboutOpacity,
          scale: 0.7 + (0.3 * (1 - heroProgress)), // Start at 1, end at 0.7
          rotate: -15 * heroProgress // Slant/tilt as it transitions
        }}
        transition={{
          duration: 0.3
        }}
        className="fixed top-0 left-[40%] w-3/5 h-screen pointer-events-none z-40 overflow-visible"
        style={{ 
          opacity: aboutOpacity,
          visibility: aboutOpacity < 0.01 ? 'hidden' : 'visible',
          transform: `translateY(${windowHeight}px)` // Position at about section
        }}
      >
        <div className="w-full h-full scale-125 pointer-events-auto">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </motion.div>

      {/* Projects Section Robot - Left Side (Full Body) */}
      <motion.div
        animate={{
          opacity: projectsOpacity,
          scale: 0.7 + (0.2 * (1 - aboutProgress)), // Smaller scale
          rotate: 15 * aboutProgress // Opposite slant for variety
        }}
        transition={{
          duration: 0.3
        }}
        className="fixed top-0 left-0 w-1/2 h-screen pointer-events-none z-40 overflow-visible"
        style={{ 
          opacity: projectsOpacity,
          visibility: projectsOpacity < 0.01 ? 'hidden' : 'visible',
          transform: `translateY(${windowHeight * 2}px)` // Position at projects section
        }}
      >
        <div className="w-full h-full scale-[1.5] pointer-events-auto">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </>
  )
}

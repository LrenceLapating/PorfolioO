'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { Linkedin, Mail, Github, Facebook } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Spotlight } from '@/components/ui/spotlight'
import ConfettiBackground from '@/components/ui/confetti-background'
import { Chatbot } from '@/components/ui/chatbot'
import { useRef } from 'react'

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  
  // Track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  })
  
  // Only fade out when scrolling past the hero section
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0])
  
  return (
    <section id="home" ref={sectionRef} className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <Card className="w-full h-screen bg-black dark:bg-black/[0.96] bg-white/[0.96] relative overflow-hidden border-0 rounded-none">
        {/* Confetti Background */}
        <ConfettiBackground />
        
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        
        <motion.div 
          style={{ opacity }}
          className="relative w-full h-full"
        >
          {/* Text Content */}
          <div className="absolute left-0 top-0 bottom-0 w-full md:w-3/4 lg:w-1/2 p-4 md:p-8 lg:p-16 z-10 flex flex-col justify-center pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="pointer-events-auto bg-white/70 dark:bg-transparent backdrop-blur-md dark:backdrop-blur-none p-5 md:p-8 rounded-xl md:rounded-2xl lg:bg-transparent lg:backdrop-blur-none lg:p-0"
            >
              <motion.p
                className="text-blue-400 md:text-blue-500 font-medium mb-2 md:mb-4 text-sm md:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Hello, I&apos;m
              </motion.p>
              
              <motion.h1
                className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 mb-3 md:mb-6 font-heading leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                Marc Laurence A. Lapating
              </motion.h1>
              
              <motion.h2
                className="text-lg md:text-2xl lg:text-3xl xl:text-4xl text-neutral-700 dark:text-neutral-200 md:text-neutral-800 md:dark:text-neutral-300 mb-4 md:mb-8 font-heading leading-snug"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Tech Support & Vibe Coder
              </motion.h2>
              
              <motion.p
                className="text-sm md:text-lg text-neutral-600 dark:text-neutral-300 md:text-neutral-700 md:dark:text-neutral-400 max-w-2xl mb-6 md:mb-12 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                IT graduate specializing in tech support and AI automation. I leverage AI tools to build 
                fully functional applications and websites efficiently. Passionate about troubleshooting, 
                system optimization, and using AI to solve real-world problems.
              </motion.p>
              
              <motion.div
                className="flex flex-col md:flex-row gap-3 md:gap-4 mb-6 md:mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <a
                  href="mailto:laurencelapating@gmail.com"
                  className="px-6 md:px-8 py-3 md:py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer text-center text-sm md:text-base"
                >
                  Get In Touch
                </a>
                <a
                  href="https://www.linkedin.com/in/marc-laurence-lapating-000265319/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 md:px-8 py-3 md:py-4 border border-neutral-300 dark:border-neutral-600 hover:border-neutral-400 dark:hover:border-neutral-500 text-neutral-800 dark:text-neutral-200 md:text-neutral-900 md:dark:text-neutral-300 rounded-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer text-center text-sm md:text-base"
                >
                  View LinkedIn
                </a>
              </motion.div>
              
              <motion.div
                className="flex gap-4 md:gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <a
                  href="https://www.linkedin.com/in/marc-laurence-lapating-000265319/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 cursor-pointer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a
                  href="https://github.com/LrenceLapating"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 cursor-pointer"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61575056012987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 cursor-pointer"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5 md:w-6 md:h-6" />
                </a>
                <a
                  href="mailto:laurencelapating@gmail.com"
                  className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors duration-300 cursor-pointer"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Card>
      
      {/* AI Chatbot */}
      <Chatbot />
    </section>
  )
}

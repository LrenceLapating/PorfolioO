'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  
  // Scroll-based animations
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  // Transform values based on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center bg-white dark:bg-black overflow-hidden"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-100 to-white dark:from-black dark:via-neutral-900 dark:to-black opacity-50" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - About Me Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Section Header */}
            <div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, type: "spring" }}
                className="inline-block mb-4"
              >
                <span className="px-4 py-2 bg-blue-500/20 dark:bg-blue-500/10 border border-blue-500/30 dark:border-blue-500/20 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium">
                  About Me
                </span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 mb-6 font-heading">
                Tech Support & Vibe Coder
              </h2>
            </div>

            {/* Bio Content */}
            <div className="space-y-6 text-neutral-700 dark:text-neutral-300 leading-relaxed text-lg">
              <p>
                Hi! I'm <span className="text-neutral-900 dark:text-white font-semibold">Marc Laurence A. Lapating</span>, 
                an IT student at the University of the Immaculate Conception (2022-2026). I specialize in 
                <span className="text-blue-600 dark:text-blue-400 font-semibold"> tech support</span> and 
                <span className="text-purple-600 dark:text-purple-400 font-semibold"> AI automation</span>.
              </p>
              
              <p>
                During my <span className="text-blue-600 dark:text-blue-400 font-semibold">On-the-Job Training at Samal LGU</span>, 
                I gained hands-on experience in system troubleshooting, network recabling, software installation, 
                and printer diagnostics. This solidified my passion for technical support and problem-solving.
              </p>
              
              <p>
                What sets me apart? I embrace the <span className="text-purple-600 dark:text-purple-400 font-semibold">"vibe coding"</span> approach - 
                leveraging AI tools like ChatGPT and Claude to build fully functional applications efficiently. 
                I believe in working smart, not hard, and using technology to solve real-world problems.
              </p>

              <p>
                When I'm not troubleshooting systems or building with AI, I'm exploring new technologies 
                and finding creative ways to automate everyday tasks. My goal is to make technology 
                accessible and efficient for everyone.
              </p>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="mailto:laurencelapating@gmail.com"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer text-sm"
              >
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/marc-laurence-lapating-000265319/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-neutral-300 dark:border-neutral-600 hover:border-neutral-400 dark:hover:border-neutral-500 text-neutral-800 dark:text-neutral-200 rounded-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer text-sm"
              >
                View LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right Side - Space for 3D Robot Landing */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex items-center justify-center min-h-[500px] lg:min-h-[700px]"
          >
            {/* Empty space where the robot will land */}
            <div className="text-center text-neutral-400 dark:text-neutral-600">
              {/* Robot lands here during scroll */}
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1 }}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-neutral-600 dark:text-neutral-500"
          >
            <span className="text-sm">Scroll for more</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

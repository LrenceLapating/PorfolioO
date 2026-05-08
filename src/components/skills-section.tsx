'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { HoverTechStack } from '@/components/ui/hover-tech-stack'
import { Wrench, Sparkles, Code2, Zap, Server, Database } from 'lucide-react'

export function SkillsSection() {
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

  const skillCategories = [
    {
      icon: Wrench,
      title: 'Tech Support',
      skills: [
        'System Troubleshooting',
        'Hardware Diagnostics',
        'Network Configuration',
        'Software Installation',
        'Printer Support',
        'Remote Assistance'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Sparkles,
      title: 'AI Automation',
      skills: [
        'n8n Workflows',
        'Zapier Integration',
        'Make (Integromat)',
        'ChatGPT & Claude AI',
        'Process Automation',
        'API Connections'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Code2,
      title: 'Development',
      skills: [
        'React & Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Responsive Design',
        'API Integration',
        'Version Control (Git)'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Server,
      title: 'Backend & Database',
      skills: [
        'Node.js',
        'MongoDB',
        'RESTful APIs',
        'Authentication',
        'Cloud Deployment',
        'Database Design'
      ],
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="min-h-screen relative flex items-center justify-center bg-white dark:bg-black overflow-hidden py-20"
    >
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-neutral-50 to-white dark:from-black dark:via-neutral-950 dark:to-black opacity-50" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 w-full"
      >
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 bg-green-500/20 dark:bg-green-500/10 border border-green-500/30 dark:border-green-500/20 rounded-full text-green-600 dark:text-green-400 text-sm font-medium">
              Skills & Expertise
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 mb-6 font-heading">
            What I Do Best
          </h2>
          
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed select-text">
            Combining technical support expertise with AI-powered development to deliver 
            efficient and innovative solutions.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.03, 
                    y: -8,
                    transition: { 
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }
                  }}
                  className="relative p-6 md:p-8 rounded-2xl bg-white/80 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 backdrop-blur-sm h-full overflow-hidden"
                >
                  {/* Animated Gradient Glow on Hover */}
                  <motion.div 
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10`}
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.1 }}
                    transition={{ duration: 0.4 }}
                  />
                  
                  {/* Animated Border Gradient */}
                  <motion.div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-20 blur-xl`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 0.2, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Icon with enhanced animation */}
                  <motion.div 
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 relative z-10`}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, -5, 5, 0],
                      transition: { 
                        duration: 0.5,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                  </motion.div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <motion.h3 
                      className="text-2xl font-bold text-neutral-900 dark:text-white mb-4 font-heading select-text"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {category.title}
                    </motion.h3>
                    
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.li
                          key={skill}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: index * 0.15 + skillIndex * 0.05,
                            duration: 0.4
                          }}
                          whileHover={{ 
                            x: 5,
                            transition: { duration: 0.2 }
                          }}
                          className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400"
                        >
                          <motion.div
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: skillIndex * 0.2,
                              ease: "easeInOut"
                            }}
                            className="pointer-events-none"
                          >
                            <Zap className="w-4 h-4 text-blue-500 dark:text-blue-400 flex-shrink-0" />
                          </motion.div>
                          <span className="text-sm select-text">{skill}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            )
          })}
        </div>

        {/* Tech Stack Component */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white/60 dark:bg-neutral-900/30 backdrop-blur-sm rounded-3xl border border-neutral-200 dark:border-neutral-800 p-6 md:p-8"
        >
          <HoverTechStack />
        </motion.div>

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
            <span className="text-sm">Keep exploring</span>
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

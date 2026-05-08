'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

export function ProjectsSection() {
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

  const projects = [
    {
      title: 'EUNOIA',
      description: 'A comprehensive mental health platform designed to provide support and resources for students.',
      image: '/projects/eunoia.png',
      url: 'https://eunoia.uic.edu.ph/',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Being Suites',
      description: 'Modern hotel booking and management system with real-time availability and seamless user experience.',
      image: '/projects/being-suites.png',
      url: 'https://being-suites.vercel.app/',
      tech: ['Next.js', 'Tailwind CSS', 'Firebase']
    },
    {
      title: 'Asa Ka Go',
      description: 'Transportation and navigation app helping users find the best routes and travel options.',
      image: '/projects/asa-ka-go.png',
      url: 'https://asa-ka-go.vercel.app/',
      tech: ['React', 'Google Maps API', 'Express']
    },
    {
      title: 'NurseScript',
      description: 'Healthcare management system streamlining nursing workflows and patient care documentation.',
      image: '/projects/nursescript.png',
      url: 'https://nursescript.uic.edu.ph/',
      tech: ['Vue.js', 'Laravel', 'MySQL']
    }
  ]

  return (
    <section
      id="projects"
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
          {/* Left Side - Space for Robot (Full Body) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center min-h-[600px] lg:min-h-[800px]"
          >
            {/* Robot will be positioned here via the transitioning component */}
            <div className="text-center text-neutral-400 dark:text-neutral-600">
              {/* Robot appears here */}
            </div>
          </motion.div>

          {/* Right Side - Projects Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
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
                <span className="px-4 py-2 bg-purple-500/20 dark:bg-purple-500/10 border border-purple-500/30 dark:border-purple-500/20 rounded-full text-purple-600 dark:text-purple-400 text-sm font-medium">
                  My Projects
                </span>
              </motion.div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400 mb-6 font-heading">
                Built with AI
              </h2>
              
              <p className="text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed mb-8 select-text">
                Here are some projects I've built using AI-assisted development. Each one showcases 
                my <span className="text-purple-600 dark:text-purple-400 font-semibold">vibe coding</span> approach - 
                leveraging AI tools to create functional, real-world applications.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group relative"
                >
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer"
                  >
                    <div className="relative p-6 rounded-2xl bg-white/80 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300 backdrop-blur-sm">
                      {/* Gradient Glow on Hover */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />
                      
                      <div className="relative z-10 flex items-start gap-4">
                        {/* Project Image */}
                        <div className="flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden bg-neutral-200 dark:bg-neutral-800 pointer-events-none">
                          <Image
                            src={project.image}
                            alt={project.title}
                            width={80}
                            height={80}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Project Info */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-neutral-900 dark:text-white font-heading select-text">
                              {project.title}
                            </h3>
                            <ExternalLink className="w-4 h-4 text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                          </div>
                          
                          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3 leading-relaxed select-text">
                            {project.description}
                          </p>
                          
                          {/* Tech Stack */}
                          <div className="flex flex-wrap gap-2 pointer-events-none">
                            {project.tech.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-md select-text"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* View All Projects Button */}
            <div className="pt-4">
              <a
                href="https://github.com/LrenceLapating"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 cursor-pointer text-sm"
              >
                <Github className="w-5 h-5" />
                View More on GitHub
              </a>
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
            <span className="text-sm">More to explore</span>
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

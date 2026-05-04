'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { SpotlightHover } from '@/components/ui/spotlight-hover'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A modern e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'Prisma'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: '3D Portfolio Showcase',
    description: 'Interactive 3D portfolio with WebGL animations, smooth transitions, and immersive user experience.',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80',
    tags: ['React', 'Three.js', 'Framer Motion', 'GSAP'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'AI Content Generator',
    description: 'AI-powered content generation tool with natural language processing and custom model training.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    tags: ['Python', 'OpenAI', 'FastAPI', 'React'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Real-Time Analytics Dashboard',
    description: 'Comprehensive analytics dashboard with real-time data visualization and custom reporting.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Vue.js', 'D3.js', 'WebSocket', 'Node.js'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Social Media App',
    description: 'Full-featured social media application with posts, stories, messaging, and live notifications.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    tags: ['React Native', 'Firebase', 'Redux', 'Socket.io'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Blockchain Wallet',
    description: 'Secure cryptocurrency wallet with multi-chain support, NFT gallery, and DeFi integration.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80',
    tags: ['Web3.js', 'Solidity', 'React', 'Ethers.js'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 lg:px-16 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 font-heading">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A selection of my recent work showcasing expertise in modern web technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700">
                <SpotlightHover size={300} />
                
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 dark:bg-neutral-800/90 rounded-full hover:bg-white dark:hover:bg-neutral-700 transition-colors duration-200"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5 text-neutral-900 dark:text-white" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/90 dark:bg-neutral-800/90 rounded-full hover:bg-white dark:hover:bg-neutral-700 transition-colors duration-200"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5 text-neutral-900 dark:text-white" />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 font-heading">
                    {project.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

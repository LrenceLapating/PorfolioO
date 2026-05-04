'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Palette, Rocket, Server, Smartphone } from 'lucide-react'
import { Card } from '@/components/ui/card'

const skills = [
  {
    icon: Code2,
    title: 'Frontend Development',
    description: 'React, Next.js, TypeScript, Vue.js, Tailwind CSS',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Node.js, Python, FastAPI, PostgreSQL, MongoDB',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'React Native, Flutter, iOS, Android',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Database,
    title: 'Database & Cloud',
    description: 'AWS, Firebase, Supabase, Redis, Docker',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Figma, Adobe XD, Framer, Design Systems',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: Rocket,
    title: '3D & Animation',
    description: 'Three.js, Spline, Framer Motion, GSAP',
    color: 'from-indigo-500 to-blue-500',
  },
]

export function SkillsSection() {
  return (
    <section className="py-24 px-4 lg:px-16 bg-white dark:bg-neutral-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 font-heading">
            Skills & Expertise
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 font-heading">
                    {skill.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {skill.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

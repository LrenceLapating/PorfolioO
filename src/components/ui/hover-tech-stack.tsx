import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiGit,
  SiVercel,
  SiFigma,
  SiGooglecloud
} from 'react-icons/si'
import { Code2, Sparkles, Terminal } from 'lucide-react'

const techStack = [
  { id: 'react', name: 'React', Icon: SiReact },
  { id: 'nextjs', name: 'Next.js', Icon: SiNextdotjs },
  { id: 'tailwind', name: 'Tailwind CSS', Icon: SiTailwindcss },
  { id: 'typescript', name: 'TypeScript', Icon: SiTypescript },
  { id: 'nodejs', name: 'Node.js', Icon: SiNodedotjs },
  { id: 'mongodb', name: 'MongoDB', Icon: SiMongodb },
  { id: 'git', name: 'Git', Icon: SiGit },
  { id: 'vercel', name: 'Vercel', Icon: SiVercel },
  { id: 'figma', name: 'Figma', Icon: SiFigma },
  { id: 'vscode', name: 'VS Code', Icon: Code2 },
  { id: 'ai', name: 'AI Tools', Icon: Sparkles },
  { id: 'cloud', name: 'Cloud', Icon: SiGooglecloud },
]

export function HoverTechStack() {
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const activeTech = techStack.find(t => t.id === hoveredId)

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-16 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Left: text */}
      <div className="flex-shrink-0 w-full sm:w-auto text-center sm:text-left">
        <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 font-medium mb-0 tracking-tight">
          Tech Stack
        </p>
        <div className="relative">
          <p
            aria-hidden
            className="text-3xl lg:text-3xl font-bold tracking-tight whitespace-nowrap opacity-0 pointer-events-none select-none leading-none sm:leading-tight"
          >
            AI-Assisted Development
          </p>
          <div className="absolute inset-0 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={hoveredId ?? 'default'}
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -16, opacity: 0 }}
                transition={{ duration: 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 dark:text-white leading-none sm:leading-tight tracking-tight whitespace-nowrap"
              >
                {activeTech?.name ?? 'AI-Assisted Development'}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Right: icon grid */}
      <div className="grid grid-cols-4 sm:flex sm:flex-wrap items-center justify-center sm:justify-end gap-1.5 sm:gap-2 w-full sm:w-auto md:mt-6 sm:mt-0">
        {techStack.map(({ id, name, Icon }) => {
          const isActive = hoveredId === id
          const isDimmed = hoveredId !== null && !isActive

          return (
            <button
              key={id}
              aria-label={name}
              className={[
                'flex items-center justify-center p-2.5 sm:p-3 lg:p-3.5 rounded-lg border transition-all duration-200',
                isActive
                  ? 'border-blue-500/30 dark:border-blue-400/30 text-blue-600 dark:text-blue-400 bg-blue-500/5 dark:bg-blue-400/5'
                  : 'border-transparent text-neutral-400 dark:text-neutral-600 hover:text-neutral-600 dark:hover:text-neutral-400',
                isDimmed ? 'opacity-40 ' : '',
              ].join(' ')}
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <Icon className="w-8 h-8 sm:w-6 sm:h-6" />
            </button>
          )
        })}
      </div>
    </div>
  )
}

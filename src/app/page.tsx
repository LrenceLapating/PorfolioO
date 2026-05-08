'use client'

import dynamic from 'next/dynamic'
import { HeroSection } from '@/components/hero-section'
import { Navigation } from '@/components/navigation'

// Lazy load heavy components
const AboutSection = dynamic(() => import('@/components/about-section').then(mod => ({ default: mod.AboutSection })), {
  loading: () => <div className="min-h-screen" />,
})

const ProjectsSection = dynamic(() => import('@/components/projects-section').then(mod => ({ default: mod.ProjectsSection })), {
  loading: () => <div className="min-h-screen" />,
})

const SkillsSection = dynamic(() => import('@/components/skills-section').then(mod => ({ default: mod.SkillsSection })), {
  loading: () => <div className="min-h-screen" />,
})

const ContactSection = dynamic(() => import('@/components/contact-section').then(mod => ({ default: mod.ContactSection })), {
  loading: () => <div className="min-h-screen" />,
})

const Transitioning3D = dynamic(() => import('@/components/ui/transitioning-3d').then(mod => ({ default: mod.Transitioning3D })), {
  ssr: false, // Disable SSR for 3D component
  loading: () => null,
})

export default function Home() {
  return (
    <>
      <Navigation />
      <Transitioning3D />
      <main className="min-h-screen relative">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </>
  )
}

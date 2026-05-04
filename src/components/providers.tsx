'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from '@/contexts/theme-context'
import { CustomCursor } from '@/components/ui/custom-cursor'
import { ThemeToggle } from '@/components/ui/theme-toggle'

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <CustomCursor />
      <ThemeToggle />
      {children}
    </ThemeProvider>
  )
}

'use client'

import { Github, Linkedin, Mail, Twitter } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-neutral-900 dark:bg-black text-neutral-300 dark:text-neutral-400 py-12 px-4 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 font-heading">
              Your Name
            </h3>
            <p className="text-neutral-400 dark:text-neutral-500 leading-relaxed">
              Full Stack Developer crafting beautiful digital experiences with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#projects" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Skills
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors duration-200 cursor-pointer">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 dark:bg-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-800 flex items-center justify-center transition-colors duration-200 cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 dark:bg-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-800 flex items-center justify-center transition-colors duration-200 cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-neutral-800 dark:bg-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-800 flex items-center justify-center transition-colors duration-200 cursor-pointer"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="w-10 h-10 rounded-full bg-neutral-800 dark:bg-neutral-900 hover:bg-neutral-700 dark:hover:bg-neutral-800 flex items-center justify-center transition-colors duration-200 cursor-pointer"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-800 dark:border-neutral-900 pt-8 text-center text-neutral-500 dark:text-neutral-600">
          <p>&copy; {currentYear} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Phone } from 'lucide-react'
import { Card } from '@/components/ui/card'

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-4 lg:px-16 bg-neutral-50 dark:bg-neutral-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4 font-heading">
            Let&apos;s Work Together
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind? Let&apos;s create something amazing together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white mb-6 font-heading">
                Get In Touch
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">
                I&apos;m always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">Email</h4>
                  <a
                    href="mailto:your.email@example.com"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">Phone</h4>
                  <a
                    href="tel:+1234567890"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <h4 className="font-semibold text-neutral-900 dark:text-white mb-1">Location</h4>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    San Francisco, CA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all duration-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all duration-200"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-800 outline-none transition-all duration-200 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

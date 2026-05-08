'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, MessageCircle, X, Sparkles } from 'lucide-react'
import Image from 'next/image'

interface Message {
  id: string
  text: string
  sender: 'user' | 'bot'
  timestamp: Date
  projects?: ProjectCard[]
}

interface ProjectCard {
  name: string
  image: string
  url: string
  description: string
}

const quickActions = [
  { label: 'About Me', action: 'about' },
  { label: 'Education', action: 'education' },
  { label: 'Experience', action: 'experience' },
  { label: 'Skills', action: 'skills' },
  { label: 'Projects', action: 'projects' },
  { label: 'Contact', action: 'contact' },
]

const projectsData: ProjectCard[] = [
  {
    name: 'EUNOIA',
    image: '/projects/eunoia.png',
    url: 'https://eunoia.uic.edu.ph/',
    description: 'Psychological Well-Being Assessment System'
  },
  {
    name: 'Being Suites',
    image: '/projects/being-suites.png',
    url: 'https://being-suites.vercel.app/',
    description: 'Hotel Booking Platform'
  },
  {
    name: 'Asa Ka Go',
    image: '/projects/asa-ka-go.png',
    url: 'https://asa-ka-go.vercel.app/',
    description: 'Transportation Service Platform'
  },
  {
    name: 'NurseScript',
    image: '/projects/nursescript.png',
    url: 'https://nursescript.uic.edu.ph/',
    description: 'Nursing Typing Practice System'
  }
]

const detectProjects = (text: string): ProjectCard[] => {
  const lowerText = text.toLowerCase()
  const mentionedProjects: ProjectCard[] = []
  
  projectsData.forEach(project => {
    const projectNameLower = project.name.toLowerCase()
    if (lowerText.includes(projectNameLower) || 
        (lowerText.includes('project') && lowerText.includes('all')) ||
        (lowerText.includes('project') && lowerText.includes('show'))) {
      mentionedProjects.push(project)
    }
  })
  
  if ((lowerText.includes('project') || lowerText.includes('work')) && 
      mentionedProjects.length === 0) {
    return projectsData
  }
  
  return mentionedProjects
}

export function Chatbot() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = inputValue
    setInputValue('')
    setIsTyping(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: currentInput }),
      })

      if (!response.ok) {
        throw new Error('Failed to get response')
      }

      const data = await response.json()
      const detectedProjects = detectProjects(data.response)
      
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response,
        sender: 'bot',
        timestamp: new Date(),
        projects: detectedProjects.length > 0 ? detectedProjects : undefined
      }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error('Error:', error)
      
      const fallbackResponse = generateResponse(currentInput)
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: fallbackResponse,
        sender: 'bot',
        timestamp: new Date(),
        projects: detectProjects(fallbackResponse).length > 0 ? detectProjects(fallbackResponse) : undefined
      }
      setMessages((prev) => [...prev, fallbackMessage])
    } finally {
      setIsTyping(false)
    }
  }

  const handleQuickAction = async (action: string) => {
    const actionMessages: Record<string, string> = {
      about: "Tell me about yourself",
      education: "What's your educational background?",
      experience: "Tell me about your work experience",
      skills: "What are your skills?",
      projects: "Show me your projects",
      contact: "How can I contact you?",
    }
    const message = actionMessages[action] || ''
    
    if (message) {
      const userMessage: Message = {
        id: Date.now().toString(),
        text: message,
        sender: 'user',
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, userMessage])
      setInputValue('')
      setIsTyping(true)

      try {
        const response = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message }),
        })

        if (!response.ok) {
          throw new Error('Failed to get response')
        }

        const data = await response.json()
        const detectedProjects = detectProjects(data.response)
        
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          sender: 'bot',
          timestamp: new Date(),
          projects: detectedProjects.length > 0 ? detectedProjects : undefined
        }
        setMessages((prev) => [...prev, botMessage])
      } catch (error) {
        console.error('Error:', error)
        
        const fallbackResponse = generateResponse(message)
        const fallbackMessage: Message = {
          id: (Date.now() + 1).toString(),
          text: fallbackResponse,
          sender: 'bot',
          timestamp: new Date(),
          projects: detectProjects(fallbackResponse).length > 0 ? detectProjects(fallbackResponse) : undefined
        }
        setMessages((prev) => [...prev, fallbackMessage])
      } finally {
        setIsTyping(false)
      }
    }
  }

  const generateResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes('about') || lowerInput.includes('who are you')) {
      return "I'm Marc Laurence A. Lapating, a Tech Support Specialist and Vibe Coder. I specialize in technical support, AI automation, and using AI tools to build functional applications."
    }

    if (lowerInput.includes('education') || lowerInput.includes('school')) {
      return "Bachelor of Science in Information Technology\nUniversity of the Immaculate Conception\n2022 - 2026"
    }

    if (lowerInput.includes('experience') || lowerInput.includes('work')) {
      return "2025-2026: On-the-Job Training at Samal LGU (IT Support)\n- System troubleshooting\n- Network recabling\n- Software installation\n- Printer troubleshooting"
    }

    if (lowerInput.includes('skill') || lowerInput.includes('technology')) {
      return "Core Skills:\n- Tech Support & System Troubleshooting\n- AI Automation\n- AI-Assisted Development (Vibe Coding)\n- Hardware & Software Support\n- Network Configuration"
    }

    if (lowerInput.includes('project')) {
      return "Featured Projects:\n\n1. EUNOIA - Psychological Well-Being Assessment\n2. Being Suites - Hotel Booking Platform\n3. Asa Ka Go - Transportation Service\n4. NurseScript - Typing Practice System\n\nAll built with AI-assisted development."
    }

    if (lowerInput.includes('contact') || lowerInput.includes('email')) {
      return "Contact:\nEmail: laurencelapating@gmail.com\nPhone: 09082293023\nLinkedIn: linkedin.com/in/marc-laurence-lapating-000265319/\nGitHub: github.com/LrenceLapating"
    }

    if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
      return "Hello! I'm Marc's AI assistant. Ask me about education, experience, skills, projects, or contact info!"
    }

    return "I can help you learn about Marc! Ask me about:\n- About Me\n- Education\n- Experience\n- Skills & Projects\n- Contact Info"
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Chat Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-lg cursor-pointer"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Box */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-neutral-200 dark:border-neutral-800 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-neutral-900 dark:to-black">
              <div className="flex items-center gap-3">
                {/* Animated Robot Icon */}
                <motion.div 
                  className="w-10 h-10 rounded-full bg-neutral-700 dark:bg-neutral-800 flex items-center justify-center relative overflow-hidden"
                  animate={{
                    boxShadow: [
                      '0 0 0 0 rgba(100, 100, 100, 0.4)',
                      '0 0 0 8px rgba(100, 100, 100, 0)',
                      '0 0 0 0 rgba(100, 100, 100, 0)'
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Robot Head */}
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="relative z-10">
                    {/* Antenna */}
                    <motion.line
                      x1="12" y1="2" x2="12" y2="5"
                      stroke="#9CA3AF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      animate={{ y: [0, -2, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <motion.circle
                      cx="12" cy="2" r="1.5"
                      fill="#60A5FA"
                      animate={{ scale: [1, 1.3, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    
                    {/* Head */}
                    <rect x="7" y="5" width="10" height="10" rx="2" fill="#4B5563" />
                    
                    {/* Eyes */}
                    <motion.circle
                      cx="10" cy="9" r="1.5"
                      fill="#60A5FA"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <motion.circle
                      cx="14" cy="9" r="1.5"
                      fill="#60A5FA"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    
                    {/* Mouth */}
                    <motion.path
                      d="M 9 12 Q 12 14 15 12"
                      stroke="#9CA3AF"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      fill="none"
                      animate={{ d: ["M 9 12 Q 12 14 15 12", "M 9 12 Q 12 13 15 12", "M 9 12 Q 12 14 15 12"] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    
                    {/* Body */}
                    <rect x="8" y="16" width="8" height="6" rx="1" fill="#4B5563" />
                    
                    {/* Arms */}
                    <motion.rect
                      x="5" y="17" width="2" height="4" rx="1"
                      fill="#6B7280"
                      animate={{ rotate: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ transformOrigin: "6px 17px" }}
                    />
                    <motion.rect
                      x="17" y="17" width="2" height="4" rx="1"
                      fill="#6B7280"
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      style={{ transformOrigin: "18px 17px" }}
                    />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="font-semibold text-white">Marc's AI Assistant</h3>
                  <p className="text-xs text-neutral-400">Ask me anything!</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-neutral-400 hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <div className="text-center text-neutral-500 dark:text-neutral-400 mt-4">
                  <div className="mb-4">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="mx-auto">
                      <rect x="7" y="5" width="10" height="10" rx="2" fill="#4B5563" />
                      <circle cx="10" cy="9" r="1.5" fill="#60A5FA" />
                      <circle cx="14" cy="9" r="1.5" fill="#60A5FA" />
                      <path d="M 9 12 Q 12 14 15 12" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                      <rect x="8" y="16" width="8" height="6" rx="1" fill="#4B5563" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium mb-1">Start a conversation!</p>
                  <p className="text-xs">Choose a topic below or type your question</p>
                </div>
              )}

              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${message.sender === 'user' ? '' : 'w-full'}`}>
                    <div
                      className={`rounded-2xl px-4 py-2 ${
                        message.sender === 'user'
                          ? 'bg-blue-600 text-white'
                          : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white'
                      }`}
                    >
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                    </div>
                    
                    {/* Project Cards */}
                    {message.projects && message.projects.length > 0 && (
                      <div className="mt-2 space-y-2">
                        {message.projects.map((project) => (
                          <a
                            key={project.name}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:shadow-md transition-all overflow-hidden"
                          >
                            <div className="relative h-24">
                              <Image
                                src={project.image}
                                alt={project.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div className="p-2">
                              <h4 className="font-semibold text-sm text-neutral-900 dark:text-white">
                                {project.name}
                              </h4>
                              <p className="text-xs text-neutral-600 dark:text-neutral-400">
                                {project.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl px-4 py-3">
                    <div className="flex gap-1">
                      <motion.div
                        className="w-2 h-2 bg-neutral-400 rounded-full"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-neutral-400 rounded-full"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      />
                      <motion.div
                        className="w-2 h-2 bg-neutral-400 rounded-full"
                        animate={{ y: [0, -6, 0] }}
                        transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-neutral-200 dark:border-neutral-800">
              {/* Quick Actions - Show when no messages */}
              {messages.length === 0 && (
                <div className="mb-3 flex flex-wrap gap-2">
                  {quickActions.map((action) => (
                    <button
                      key={action.action}
                      onClick={() => handleQuickAction(action.action)}
                      className="px-3 py-1.5 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 text-neutral-700 dark:text-neutral-300 rounded-lg text-xs transition-colors"
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              )}
              
              <div className="flex items-center gap-2 bg-neutral-100 dark:bg-neutral-800 rounded-xl p-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent text-neutral-900 dark:text-white placeholder-neutral-500 outline-none text-sm px-2"
                />
                <button
                  onClick={handleSend}
                  disabled={!inputValue.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-300 dark:disabled:bg-neutral-700 disabled:cursor-not-allowed text-white rounded-lg p-2 transition-colors"
                  aria-label="Send"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

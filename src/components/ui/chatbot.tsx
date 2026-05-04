'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp, GraduationCap, Briefcase, Code2, Award, User, Phone, MessageCircle, X, Sparkles } from 'lucide-react'
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
  { icon: User, label: 'About Me', action: 'about' },
  { icon: GraduationCap, label: 'Education', action: 'education' },
  { icon: Briefcase, label: 'Experience', action: 'experience' },
  { icon: Code2, label: 'Skills & Projects', action: 'skills' },
  { icon: Award, label: 'Certificates', action: 'certificates' },
  { icon: Phone, label: 'Contact Info', action: 'contact' },
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

// Function to detect which projects are mentioned in the text
const detectProjects = (text: string): ProjectCard[] => {
  const lowerText = text.toLowerCase()
  const mentionedProjects: ProjectCard[] = []
  
  projectsData.forEach(project => {
    const projectNameLower = project.name.toLowerCase()
    // Check if project name is mentioned or if it's a general project question
    if (lowerText.includes(projectNameLower) || 
        (lowerText.includes('project') && lowerText.includes('all')) ||
        (lowerText.includes('project') && lowerText.includes('show'))) {
      mentionedProjects.push(project)
    }
  })
  
  // If asking about projects in general, show all
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
  const [showWelcome, setShowWelcome] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.style.height = 'auto'
      inputRef.current.style.height = inputRef.current.scrollHeight + 'px'
    }
  }, [inputValue])

  // Auto-open on desktop only
  useEffect(() => {
    const checkDesktop = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true)
      }
    }
    checkDesktop()
    window.addEventListener('resize', checkDesktop)
    return () => window.removeEventListener('resize', checkDesktop)
  }, [])

  const handleSend = async () => {
    if (!inputValue.trim()) return

    setShowWelcome(false)

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
      // Call Gemini API
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
      
      // Detect if projects are mentioned in the response
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
      
      // Fallback to local responses if Gemini fails
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

  const generateResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    // About Me
    if (lowerInput.includes('about') || lowerInput.includes('who are you') || lowerInput.includes('introduce')) {
      return "I'm Marc Laurence A. Lapating, an IT graduate from the University of the Immaculate Conception (2022-2026). I'm a Tech Support Specialist and Vibe Coder. I specialize in technical support, AI automation, and using AI tools to build functional applications. I'm passionate about troubleshooting and solving problems efficiently."
    }

    // Education
    if (lowerInput.includes('education') || lowerInput.includes('school') || lowerInput.includes('university') || lowerInput.includes('degree')) {
      return "Bachelor of Science in Information Technology\nUniversity of the Immaculate Conception\n2022 - 2026\n\nCurrently pursuing my degree with a focus on tech support, AI automation, and system troubleshooting."
    }

    // Experience
    if (lowerInput.includes('experience') || lowerInput.includes('work') || lowerInput.includes('job') || lowerInput.includes('ojt')) {
      return "Work Experience:\n\n2025-2026: On-the-Job Training at Samal LGU (IT Support)\n- System troubleshooting\n- Network recabling\n- Software installation and configuration\n- Printer troubleshooting\n\n2021-2022: Waiter\n- Customer service\n- Team collaboration\n- Fast-paced environment"
    }

    // Skills
    if (lowerInput.includes('skill') || lowerInput.includes('technology') || lowerInput.includes('tech stack') || lowerInput.includes('programming')) {
      return "Core Skills:\n\nTech Support:\n- System troubleshooting and diagnostics\n- Hardware and software support\n- Network setup and configuration\n- PC and printer troubleshooting\n\nAI Automation:\n- Using AI tools to build applications\n- AI-assisted development (vibe coding)\n- Problem-solving with AI assistance\n\nTools:\n- AI: ChatGPT, Claude\n- Development: VS Code\n- Office: Microsoft Office, Google Workspace\n- Design: Canva\n\nNote: Web development is a secondary skill - I use AI to code efficiently rather than traditional programming."
    }

    // Projects
    if (lowerInput.includes('project')) {
      return "Featured Projects (Built with AI assistance):\n\n1. EUNOIA - Psychological Well-Being Assessment System\n- AI-assisted web platform\n- Automated scoring and interpretation\n- Real-time dashboard\n- Visit: https://eunoia.uic.edu.ph/\n\n2. Being Suites - Hotel Booking Platform\n- Visit: https://being-suites.vercel.app/\n\n3. Asa Ka Go - Transportation Service\n- Visit: https://asa-ka-go.vercel.app/\n\n4. NurseScript - Typing Practice System\n- Visit: https://nursescript.uic.edu.ph/\n\nAll projects were built using AI-assisted development (vibe coding)."
    }

    // Certificates
    if (lowerInput.includes('certificate') || lowerInput.includes('certification') || lowerInput.includes('course')) {
      return "Certificates:\n\nCoursera:\n- AWS Cloud Technical Essentials\n- Frontend Development using React\n- AWS Certified Solutions Architect - Associate (Exam Prep)\n- JavaScript for Web Development\n- English for Effective Business Speaking\n\nConferences:\n- 12th ICETT 2026 Conference Passer\n- CHED RAISE Exhibit 2026"
    }

    // Contact
    if (lowerInput.includes('contact') || lowerInput.includes('hire') || lowerInput.includes('reach') || lowerInput.includes('email') || lowerInput.includes('phone')) {
      return "Contact Information:\n\nEmail: laurencelapating@gmail.com\nPhone: 09082293023\nLocation: Davao City, Philippines\nLinkedIn: linkedin.com/in/marc-laurence-lapating-000265319/\nGitHub: github.com/LrenceLapating\nFacebook: facebook.com/profile.php?id=61575056012987\n\nFeel free to reach out for opportunities or collaborations!"
    }

    // Greetings
    if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
      return "Hello! I'm Marc Laurence's portfolio assistant. I'm a Tech Support Specialist and Vibe Coder. I can tell you about my education, work experience, skills, projects, certificates, or contact information. What would you like to know?"
    }

    // Default
    return "I can help you learn more about Marc Laurence! Ask me about:\n- About Me (Tech Support & Vibe Coder)\n- Education\n- Work Experience\n- Skills and Projects\n- Certificates\n- Contact Information\n\nWhat interests you?"
  }

  const handleQuickAction = async (action: string) => {
    const actionMessages: Record<string, string> = {
      about: "Tell me about yourself",
      education: "What's your educational background?",
      experience: "Tell me about your work experience",
      skills: "What are your skills and projects?",
      certificates: "What certificates do you have?",
      contact: "How can I contact you?",
    }
    const message = actionMessages[action] || ''
    
    if (message) {
      setShowWelcome(false)

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
        // Call Gemini API
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
        
        // Detect if projects are mentioned in the response
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
        
        // Fallback to local responses if Gemini fails
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

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Chat Button - Shows when closed */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={() => setIsOpen(true)}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-4 shadow-2xl cursor-pointer transition-colors duration-200"
            aria-label="Open chat"
          >
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chatbot Container */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-4 left-4 right-4 md:bottom-8 md:left-auto md:right-8 lg:bottom-12 z-40 w-auto md:w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col max-h-[80vh] md:max-h-none"
          >
            {/* Close Button - Fixed Outside - Mobile */}
            <button
              onClick={() => setIsOpen(false)}
              className="md:hidden absolute -top-12 right-2 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 rounded-full p-2 transition-colors duration-200 cursor-pointer shadow-lg z-50"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Close Button - Fixed Outside - Desktop */}
            <button
              onClick={() => setIsOpen(false)}
              className="hidden md:block absolute -top-3 -right-3 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-white dark:bg-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-full p-2 transition-colors duration-200 cursor-pointer shadow-lg border border-neutral-200 dark:border-neutral-700 z-50"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative w-full bg-white dark:bg-neutral-900 md:bg-transparent md:dark:bg-transparent overflow-hidden rounded-xl md:rounded-none">

              {/* Welcome State */}
              {showWelcome && messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="pb-3 md:pb-6 text-center pt-12 md:pt-0"
                >
                  <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-neutral-900 dark:text-white mb-3 md:mb-6" style={{ fontFamily: 'Segoe UI, sans-serif' }}>
                    What would you like to know?
                  </h2>
                </motion.div>
              )}

              {/* Messages */}
              {messages.length > 0 && (
                <div className="max-h-[50vh] md:max-h-[400px] lg:max-h-[500px] overflow-y-auto px-2 md:px-4 pb-3 md:pb-4 pt-12 md:pt-0 space-y-2 md:space-y-4 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[85%] md:max-w-[80%] ${message.sender === 'user' ? '' : 'w-full'}`}>
                        <div
                          className={`rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 ${
                            message.sender === 'user'
                              ? 'bg-blue-600 text-white'
                              : 'bg-neutral-100 dark:bg-neutral-800 md:bg-neutral-100 md:dark:bg-neutral-800/80 md:backdrop-blur-xl text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700/50 shadow-lg'
                          }`}
                        >
                          <p className="text-sm md:text-base whitespace-pre-line" style={{ lineHeight: '2.5', fontFamily: 'Segoe UI, sans-serif' }}>{message.text}</p>
                        </div>
                        
                        {/* Project Cards */}
                        {message.projects && message.projects.length > 0 && (
                          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
                            {message.projects.map((project) => (
                              <motion.a
                                key={project.name}
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative overflow-hidden rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 hover:shadow-xl transition-all duration-300 cursor-pointer"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                              >
                                <div className="relative h-32 md:h-40 overflow-hidden">
                                  <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                                <div className="p-3">
                                  <h4 className="font-semibold text-neutral-900 dark:text-white text-sm md:text-base mb-1">
                                    {project.name}
                                  </h4>
                                  <p className="text-xs md:text-sm text-neutral-600 dark:text-neutral-400">
                                    {project.description}
                                  </p>
                                </div>
                              </motion.a>
                            ))}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="bg-neutral-100 dark:bg-neutral-800 md:bg-neutral-100 md:dark:bg-neutral-800/80 md:backdrop-blur-xl rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-3 border border-neutral-200 dark:border-neutral-700/50 shadow-lg">
                        <div className="flex gap-1.5">
                          <motion.div
                            className="w-2 h-2 bg-neutral-600 dark:bg-neutral-400 rounded-full"
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-neutral-600 dark:bg-neutral-400 rounded-full"
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                          />
                          <motion.div
                            className="w-2 h-2 bg-neutral-600 dark:bg-neutral-400 rounded-full"
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div ref={messagesEndRef} />
                </div>
              )}

              {/* Input Area */}
              <div className="w-full">
                <div className="relative bg-white dark:bg-neutral-900 md:bg-white/80 md:dark:bg-neutral-900/80 md:backdrop-blur-xl rounded-xl md:rounded-2xl border border-neutral-200 dark:border-neutral-700/50 overflow-hidden shadow-xl">
                  <div className="flex items-end gap-2 md:gap-3 p-2.5 md:p-4">
                    <div className="hidden md:flex text-blue-500 p-2 pointer-events-none">
                      <Sparkles className="w-5 h-5" />
                    </div>

                    <textarea
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyDown={handleKeyPress}
                      placeholder="Ask about Marc's background..."
                      rows={1}
                      className="flex-1 bg-transparent text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500 outline-none resize-none max-h-20 md:max-h-32 text-sm md:text-base"
                      style={{ fontFamily: 'Segoe UI, sans-serif' }}
                    />

                    <div className="flex items-center gap-1.5 md:gap-2">
                      <button
                        className="hidden lg:block text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors px-3 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800/80 rounded-lg text-sm font-medium border border-neutral-300 dark:border-neutral-600/50"
                        onClick={() => window.open('mailto:laurencelapating@gmail.com', '_blank')}
                      >
                        📧 Email
                      </button>
                      <button
                        onClick={handleSend}
                        disabled={!inputValue.trim()}
                        className="bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-300 dark:disabled:bg-neutral-700 disabled:cursor-not-allowed text-white rounded-lg p-2 transition-colors cursor-pointer"
                        aria-label="Send message"
                      >
                        <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                {showWelcome && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-2 md:gap-3 mt-3 md:mt-4"
                  >
                    {quickActions.map((action, index) => {
                      const Icon = action.icon
                      // Shorter labels for mobile
                      const mobileLabels: Record<string, string> = {
                        'About Me': 'About',
                        'Education': 'Education',
                        'Experience': 'Work',
                        'Skills & Projects': 'Skills',
                        'Certificates': 'Certs',
                        'Contact Info': 'Contact',
                      }
                      return (
                        <motion.button
                          key={action.action}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          onClick={() => handleQuickAction(action.action)}
                          className="flex items-center gap-1.5 md:gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-white dark:bg-neutral-900 md:bg-white/80 md:dark:bg-neutral-900/80 hover:bg-neutral-50 dark:hover:bg-neutral-800 md:hover:bg-white/90 md:dark:hover:bg-neutral-800/80 md:backdrop-blur-xl border border-neutral-200 dark:border-neutral-600/50 rounded-lg md:rounded-xl text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-all text-xs md:text-sm cursor-pointer shadow-lg"
                          style={{ fontFamily: 'Segoe UI, sans-serif' }}
                        >
                          <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                          <span className="hidden md:inline">{action.label}</span>
                          <span className="md:hidden">{mobileLabels[action.label] || action.label}</span>
                        </motion.button>
                      )
                    })}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

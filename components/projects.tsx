'use client'

import { motion } from 'framer-motion'
import { Github, ExternalLink, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const projects = [
  {
    title: 'Social Travel App',
    description: 'A full-stack social travel application where users can bookmark locations on an interactive world map, write reviews with ratings and photos, and discover travel experiences from a community of wanderers.',
    tech: ['React', 'Redux', 'JavaScript', 'CSS3' , 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/perhapslaksh',
    live: 'socialtravelapp.vercel.app',
    image: 'bg-gradient-to-br from-blue-600 to-cyan-500',
  },
  {
    title: 'Astrology App',
    description: 'Modern e-commerce interface with product listings, filters, and shopping cart functionality. Focus on UX and performance.',
    tech: ['React', 'JavaScript', 'CSS', 'Component Architecture'],
    github: 'https://github.com/perhapslaksh',
    live: 'aalopoodi.vercel.app',
    image: 'bg-gradient-to-br from-orange-600 to-red-500',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my projects, skills, and experience as a frontend developer. Built with modern web technologies and designed for responsiveness and performance.',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
    github: 'https://github.com/perhapslaksh',
    live: 'laksharora.in',
    image: 'bg-gradient-to-br from-green-600 to-teal-500',
  },
  {
    title: 'SaaS-style web application',
    description: 'Sustainable - a flexible application built to help teams and individuals launch projects faster with a intuitive and customizable interface. It focuses on usability, performance and startup landing pages.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/perhapslaksh',
    live: 'sustainable-rho.vercel.app',
    image: 'bg-gradient-to-br from-indigo-600 to-blue-500',
  },
]

export function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      id="projects"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
        Featured Projects
      </motion.h2>
      <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-12 max-w-2xl">
        Explore some of my recent projects showcasing my skills in frontend development, state management, and full-stack development.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
            className="group bg-secondary border border-border rounded-xl overflow-hidden hover:border-foreground/30 transition-all duration-300"
          >
            <div className={`h-40 ${project.image} relative overflow-hidden`}>
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Code2 className="w-12 h-12 text-white/50" />
              </div>
            </div>

            <div className="p-6 space-y-4">
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{project.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tech, i) => (
                  <span key={i} className="text-xs px-3 py-1 bg-background rounded-full text-muted-foreground border border-border">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3 pt-4 border-t border-border">
                <Button asChild size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                    Code
                  </a>
                </Button>
                <Button asChild size="sm" className="flex-1 gap-2">
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

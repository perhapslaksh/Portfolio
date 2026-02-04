'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-[90vh] flex items-center justify-center px-4 md:px-6 lg:px-8"
    >
      <div className="max-w-4xl w-full">
        <motion.div variants={itemVariants} className="mb-4 ml-6">
  <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-secondary/60 rounded-full border border-border/50 backdrop-blur-sm">
    <span className="relative flex h-1.5 w-1.5">
      <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75 animate-ping" />
      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-500" />
    </span>
    <span className="text-xs font-medium text-muted-foreground tracking-wide">
      Available for opportunities
    </span>
  </div>
</motion.div>


        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Lakshay Arora</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance max-w-2xl">
          Frontend Developer & Full Stack Engineer crafting responsive, dynamic web experiences with React, JavaScript, and modern technologies.
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg text-muted-foreground mb-12 max-w-2xl leading-relaxed">
          Experienced in internships <span className="font-semibold text-foreground">project-based learning</span> and remote 
          collaboration. Strong leadership with proven communication skills 
          and a continuous learner currently expanding into full stack development.
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-12">
          <Button asChild size="lg" className="gap-2">
            <a href="#projects">
              View My Work
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#contact">Get In Touch</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2 bg-transparent">
            <a href="/lakshay arora resume (1).pdf" target="_blank" rel="noopener noreferrer">
              <Download className="w-4 h-4" />
              Resume
            </a>
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="flex gap-6 pt-6 border-t border-border">
          <a
            href="https://github.com/perhapslaksh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/perhapslaksh"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="mailto:perhapslaksh@gmail.com"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  )
}

'use client'

import { motion } from 'framer-motion'
import {
  Code2,
  Palette,
  Database,
  GitBranch,
  Zap,
  Brain,
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['HTML5', 'CSS3', 'JavaScript (ES7)', 'React.js', 'Redux'],
    color: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'Backend & Databases',
    icon: Database,
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Java'],
    color: 'from-purple-600 to-pink-500',
  },
  {
    title: 'Design & Styling',
    icon: Palette,
    skills: ['Responsive Design', 'Tailwind CSS', 'UI/UX Principles', 'Component Architecture'],
    color: 'from-orange-600 to-red-500',
  },
  {
    title: 'Tools & Workflow',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'DevTools'],
    color: 'from-green-600 to-teal-500',
  },
  {
    title: 'Soft Skills',
    icon: Brain,
    skills: ['Problem Solving', 'Team Collaboration', 'Communication', 'Leadership'],
    color: 'from-indigo-600 to-blue-500',
  },
  {
    title: 'Additional',
    icon: Zap,
    skills: ['SEO Optimization', 'Performance Optimization', 'API Integration', 'Redux Toolkit'],
    color: 'from-yellow-600 to-orange-500',
  },
]

export function Skills() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-12">
        Skills & Expertise
      </motion.h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => {
          const Icon = category.icon
          return (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="group bg-secondary border border-border rounded-xl p-6 hover:border-foreground/30 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-br ${category.color} mb-4 text-white`}>
                <Icon className="w-6 h-6" />
              </div>

              <h3 className="text-xl font-bold mb-4">{category.title}</h3>

              <ul className="space-y-2">
                {category.skills.map((skill, i) => (
                  <li key={i} className="text-muted-foreground flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )
        })}
      </div>
    </motion.section>
  )
}

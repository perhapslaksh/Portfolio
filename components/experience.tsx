'use client'

import { motion } from 'framer-motion'
import { Briefcase, BookOpen } from 'lucide-react'

const experiences = [
  {
    title: 'Frontend Developer Intern',
    company: 'Ksolves India Limited',
    period: 'Feb 2025 - Jun 2025',
    icon: Briefcase,
    type: 'work',
    description: [
      'Developed and optimized 5+ dynamic UI components using React.js, improving user experience and reducing page load time by 40%',
      'Achieved 98% design accuracy and boosted data rendering efficiency by 35%',
      'Collaborated in a team of 4 to deliver 3 real-time projects with 100% on-time delivery',
      'Resolved 25+ front-end issues during QA and ensured seamless backend integration',
      'Managed global application state using Redux Toolkit',
      'Worked with REST APIs to fetch, display, and update dynamic data',
    ],
  },
  {
    title: 'Content Writer & Visual Creator',
    company: 'XenstudioX (Remote)',
    period: 'Nov 2023 - Oct 2024',
    icon: BookOpen,
    type: 'work',
    description: [
      'Researched and wrote SEO-optimized articles, blogs, and web content',
      'Adapted tone and style based on brand voice and target audience',
      'Conducted keyword research and implemented on-page SEO best practices',
      'Used tools like Google Docs, Grammarly, and basic CMS platforms',
    ],
  },
]

const educations = [
  {
    title: 'Bachelor of Technology (B.Tech)',
    institution: 'Guru Gobind Singh Indraprastha University (GGSIPU)',
    period: 'Expected: 04/2028',
    type: 'education',
    description: 'AI & Data Science',
    achievements: [
      'Western Head of College Choir (Swaranjali)',
      'Multiple internships in frontend development',
      'Certifications in Web Development and Programming',
      'Hands-on experience with C++, HTML, CSS, JavaScript, React.js, Redux, MongoDB',
    ],
  },
  {
    title: 'Full Stack Development (Java & MERN Stack)',
    institution: 'Ducat Institute, Delhi',
    period: 'Expected: 04/2026',
    type: 'education',
    description: 'Software Development (Java & MERN)',
    achievements: [
      'Offline, instructor-led weekend program',
      'Learning backend development using Java, Spring Boot, and RESTful APIs',
      'Building frontend with HTML, CSS, JavaScript, React.js',
      'MERN stack: MongoDB, Express.js, React.js, Node.js',
    ],
  },
  {
    title: 'CS50 - Computer Science for Beginners',
    institution: 'Harvard University',
    period: 'Completed',
    type: 'education',
    description: 'Certification Course',
    achievements: ['Comprehensive CS fundamentals'],
  },
  {
    title: 'Python for Data Science & ML Bootcamp',
    institution: 'Online Course',
    period: 'Completed',
    type: 'education',
    description: 'Data Science & Machine Learning',
    achievements: ['Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn'],
  },
]

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-16">
        Experience & Education
      </motion.h2>

      <div className="space-y-16">
        <div>
          <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6" />
            Work Experience
          </motion.h3>

          <div className="space-y-8">
            {experiences.map((exp, idx) => {
              const Icon = exp.icon
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="relative pl-8 pb-8 border-l-2 border-border last:pb-0 hover:border-blue-600/50 transition-colors"
                >
                  <div className="absolute -left-4 -top-2 w-6 h-6 rounded-full bg-blue-600 border-4 border-background" />

                  <div className="mb-3 flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h4 className="text-xl font-bold">{exp.title}</h4>
                      <p className="text-muted-foreground font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-muted-foreground flex gap-3">
                        <span className="text-blue-600 flex-shrink-0 mt-1">→</span>
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div>
          <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-8 flex items-center gap-3">
            <BookOpen className="w-6 h-6" />
            Education
          </motion.h3>

          <div className="space-y-6">
            {educations.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-secondary border border-border rounded-xl p-6 hover:border-blue-600/30 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-3 flex-wrap">
                  <div>
                    <h4 className="text-xl font-bold">{edu.title}</h4>
                    <p className="text-muted-foreground font-medium">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground italic mt-1">{edu.description}</p>
                  </div>
                  <span className="text-sm text-muted-foreground bg-background px-3 py-1 rounded-full whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>

                <ul className="space-y-1 mt-4">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-blue-600">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

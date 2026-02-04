'use client'

import { motion } from 'framer-motion'

export function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
      className="py-20 md:py-32 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto"
    >
      <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-12">
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div variants={itemVariants} className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm a <span className="font-semibold text-foreground">frontend-focused developer</span> with a passion for building responsive, user-friendly web interfaces. My journey in web development has been driven by curiosity, continuous learning, and a commitment to writing clean, efficient code.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
  Hands-on experience through internships and real-world projects, with strong remote collaboration skills. Proven leadership from sports and cultural roles, effective communication, and active learning in full-stack development.
</p>


          <p className="text-lg text-muted-foreground leading-relaxed">
            I'm expanding my skill set into full-stack development through the MERN stack and Java-based backends. I believe in the power of technology to solve problems and create meaningful digital experiences.
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="space-y-6">
          <div className="bg-secondary rounded-xl p-6 border border-border">
            <h3 className="text-xl font-bold mb-4">Key Highlights</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">→</span>
                <span>Developed 5+ dynamic UI components with 98% design accuracy </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">→</span>
                <span>40% improvement in page load time through optimized React components</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">→</span>
                <span>100% on-time delivery across 3 real-time projects with zero defects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-600 mt-1">→</span>
                <span>Served as Sports Captain with proven leadership</span>
              </li>
            </ul>
          </div>

          <div className="bg-secondary rounded-xl p-6 border border-border">
            <h3 className="text-xl font-bold mb-4">When I'm Not Coding</h3>
            <p className="text-muted-foreground">
             I engage in activities such as participating in the college choir, reading classical literature, exploring emerging technologies, and creating content related to web development. I value maintaining a balance between technical development and creative expression.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}

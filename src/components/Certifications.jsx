import React from 'react'
import { motion } from 'framer-motion'

const entryVariant = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0, transition: { duration: 0.01 } } }

const CERTS = [
  { title: 'AI For Everyone - DeepLearning.AI', href: 'https://drive.google.com/file/d/1b5cm4-rNawkpWhWrzaQrI_AHNYL7KBzh/view' },
  { title: 'Data Analysis with Python - IBM', href: 'https://drive.google.com/file/d/1LwM401HXy7-Bz01yr9vTkgVHTo_LpsVd/view' },
  { title: 'Python for Data Science & AI - IBM', href: 'https://drive.google.com/file/d/1-b_xRRbAFiek4w1jajoUzaDJP_PI_qvJ/view' },
  { title: 'Flask for Beginners - Coursera', href: 'https://drive.google.com/file/d/1c9OcwSJF78o79p0hXNjgblPqnE6Wh6uM/view' },
]

export default function Certifications(){
  return (
    <motion.section className="section" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: false, amount: 0.22 }}>
      <div className="container">
        <div className="section-head"><h2>Certifications</h2></div>
        <div className="grid four">
          {CERTS.map(c => (
            <motion.a key={c.title} href={c.href} target="_blank" rel="noreferrer" className="card cert" whileHover={{ y: -3, scale: 1.01, boxShadow: '0 8px 22px rgba(214,178,255,0.12)' }}>
              <div className="row-between"><i className="bi bi-patch-check"/><span className="tiny muted">View</span></div>
              <h3 className="card-title">{c.title}</h3>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

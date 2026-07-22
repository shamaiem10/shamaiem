import React from 'react'
import { motion } from 'framer-motion'

const entryVariant = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0, transition: { duration: 0.01 } } }

export default function Achievements(){
  return (
    <motion.section className="section" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: false, amount: 0.2 }}>
      <div className="container">
        <div className="section-head"><h2>Achievements</h2></div>
        <div className="grid three">
          <motion.article className="card" whileHover={{ scale: 1.04, y: -2, boxShadow: '0 8px 22px rgba(247,163,197,0.16)' }}>
            <h3 className="card-title">Quaid-e-Azam Merit Scholarship</h3>
            <p className="muted">Awarded for placing 3rd in FSc Pre-Engineering, Faisalabad Board (2023)</p>
          </motion.article>
          <motion.article className="card" whileHover={{ scale: 1.04, y: -2, boxShadow: '0 8px 22px rgba(247,163,197,0.16)' }}>
            <h3 className="card-title">Hackathons</h3>
            <p className="muted">MIT IT Winter Contest 2025 · HackNation Global Hackathon (5th Edition) · University and national-level competitions</p>
          </motion.article>
          <motion.article className="card" whileHover={{ scale: 1.04, y: -2, boxShadow: '0 8px 22px rgba(247,163,197,0.16)' }}>
            <h3 className="card-title">Leadership & Activities</h3>
            <p className="muted">Organised SGT (department-wide) and Khaapa Fest as an entrepreneurship project.</p>
          </motion.article>
        </div>
      </div>
    </motion.section>
  )
}

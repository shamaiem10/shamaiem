import React from 'react'
import { motion } from 'framer-motion'

const entryVariant = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0, transition: { duration: 0.01 } } }

export default function Education(){
  return (
    <motion.section className="section" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: false, amount: 0.22 }}>
      <div className="container">
        <div className="section-head"><h2>Education</h2></div>
        <div className="list-cards">
          <motion.article className="list-card" whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,0.02)' }}>
            <h3 className="list-title">BE Software Engineering</h3>
            <div className="muted">National University of Sciences & Technology (NUST) · 2023 - 2027</div>
            <p className="muted tiny">Machine Learning, Cloud Computing, Web Engineering, Data Structures & Algorithms, Software Design & Architecture, Computer Networks</p>
          </motion.article>
          <motion.article className="list-card" whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,0.02)' }}>
            <h3 className="list-title">Intermediate, FSc Pre-Engineering</h3>
            <div className="muted">Punjab College Faisalabad · 2021 - 2023 · 1032 / 1100 · 3rd Position, Faisalabad Board</div>
          </motion.article>
        </div>
      </div>
    </motion.section>
  )
}

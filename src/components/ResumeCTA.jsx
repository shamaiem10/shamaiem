import React from 'react'
import { motion } from 'framer-motion'

const entryVariant = { initial: { opacity: 1, scale: 1 }, animate: { opacity: 1, scale: 1, transition: { duration: 0.01 } } }

export default function ResumeCTA(){
  return (
    <motion.section className="section cta-center" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: true, amount: 0.2 }}>
      <div className="container narrow">
        <h2>Need a detailed resume?</h2>
        <p className="muted">Email me and Ill share the latest copy.</p>
        <motion.a href="mailto:shamaiemshabbir2@gmail.com?subject=Resume%20Request" className="btn btn-primary" whileHover={{ scale: 1.03, backgroundColor: 'rgba(45,226,230,0.1)' }}>Request via Email</motion.a>
      </div>
    </motion.section>
  )
}

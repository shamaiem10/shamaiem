import React from 'react'
import { motion } from 'framer-motion'

const entryVariant = { initial: { opacity: 1, scale: 1 }, animate: { opacity: 1, scale: 1, transition: { duration: 0.01 } } }

export default function CollaborateCTA(){
  return (
    <motion.section className="section cta-center" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: true, amount: 0.2 }}>
      <div className="container narrow">
        <h2>Collaborate on research</h2>
        <p className="muted">Interested in XAI, multimodal ML, or testing? Lets talk.</p>
        <a href="#contact" className="btn btn-secondary">Get in touch</a>
      </div>
    </motion.section>
  )
}

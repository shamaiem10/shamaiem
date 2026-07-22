import React from 'react'
import { motion } from 'framer-motion'

export default function AboutContactCTA(){
  return (
    <section className="section cta-center">
      <div className="container narrow">
        <h2>Say hello</h2>
        <p className="muted">Always happy to chat about AI, automation, and full-stack systems.</p>
        <motion.a href="#contact" className="btn btn-secondary" whileHover={{ scale: 1.03, backgroundColor: 'rgba(247,163,197,0.12)' }}>Contact</motion.a>
      </div>
    </section>
  )
}

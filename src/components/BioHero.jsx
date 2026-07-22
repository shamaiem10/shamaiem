import React from 'react'
import { motion } from 'framer-motion'

const entryVariant = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0, transition: { duration: 0.01 } } }

export default function BioHero(){
  return (
    <motion.section className="section" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: true, amount: 0.22 }}>
      <div className="container">
        <div className="section-head"><h2>About Me</h2></div>
        <div className="bio-hero glass">
          <h3 className="card-title">I turn ambitious ideas into intelligent products people can actually use.</h3>
          <p className="muted">Im a software engineer working where full-stack development, AI, and automation meet. I enjoy taking a messy real-world problem, finding the useful signal inside it, and shipping a system that feels simple on the outside.</p>
          <p className="muted">Currently, Im an AI & Automation Intern at Matrix AE. Alongside building autonomous workflows and production integrations, I bring research experience in explainable AI and multimodal MLespecially work aimed at making intelligent systems more transparent.</p>
        </div>
      </div>
    </motion.section>
  )
}

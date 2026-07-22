import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const entryVariant = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0, transition: { duration: 0.01 } } }

export default function NowWidget(){
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end','end start'] })
  const y = useTransform(scrollYProgress, [0,1], [0,8])
  return (
    <motion.section ref={ref} className="section" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: false, amount: 0.22 }}>
      <div className="container">
        <div className="grid three">
          <motion.article className="card" style={{ y }} whileHover={{ y: -2, scale: 1.01, boxShadow: '0 6px 18px rgba(45,226,230,0.1)' }}>
            <div className="row-between"><span className="lozenge live"><span className="dot-live"/> CURRENTLY</span></div>
            <h4>ROLE</h4>
            <p className="muted">AI & Automation Intern · Matrix AE</p>
            <h4>BUILDING</h4>
            <p className="muted">Useful AI workflows that remove repetitive work.</p>
            <h4>CURIOUS ABOUT</h4>
            <p className="muted">Trustworthy AI, agents, and human-centered automation.</p>
            <h4>LEARNING IN PUBLIC</h4>
            <p className="muted">AI Automation · Full-Stack Engineering · Explainable AI · Cloud Deployment · Systems Thinking</p>
          </motion.article>
        </div>
      </div>
    </motion.section>
  )
}

import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

const entryVariant = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0, transition: { duration: 0.01 } } }

const STEPS = [
  { icon: 'bi-compass', title: 'Discover', text: 'Understand goals, constraints, and real-world context.' },
  { icon: 'bi-pen', title: 'Design', text: 'Shape the system and interfaces for clarity.' },
  { icon: 'bi-hammer', title: 'Build', text: 'Implement reliable, maintainable components.' },
  { icon: 'bi-arrow-repeat', title: 'Iterate', text: 'Measure, refine, and improve performance.' },
  { icon: 'bi-rocket-takeoff', title: 'Ship', text: 'Deliver and support with confidence.' },
]

export default function Process(){
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const scaleX = useTransform(scrollYProgress, [0,1], [0,1])
  const [pinned, setPinned] = useState(null)

  return (
    <motion.section className="section" ref={ref} variants={entryVariant} initial="initial" animate="animate" viewport={{ once: true, amount: 0.2 }}>
      <div className="container">
        <div className="section-head"><h2>Process</h2></div>
        <div className="progress-wrap">
          <motion.div className="progress-line" style={{ scaleX, transformOrigin: '0% 50%' }} />
          <div className="steps five">
            {STEPS.map((s, i) => (
              <motion.div key={s.title} className={`step ${pinned===i?'pinned':''}`} whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(45,226,230,0.15)' }} onClick={() => setPinned(i)}>
                <i className={`bi ${s.icon}`}/>
                <h4>{s.title}</h4>
                <p className="muted">{s.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

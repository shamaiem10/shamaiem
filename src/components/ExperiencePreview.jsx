import React, { useMemo, useRef, useState } from 'react'
import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

const entryVariant = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0, transition: { duration: 0.01 } } }

const ITEMS = [
  { role: 'AI & Automation Intern', org: 'Matrix AE', when: 'Jun 2026 - Present', tools: ['n8n','APIs','Integrations'] },
  { role: 'Full-Stack Intern', org: 'PulseQ', when: 'Feb 2026', tools: ['MEAN','REST'] },
  { role: 'Research Intern', org: 'DS/ML Lab, NUST', when: 'Oct 2025 - Jul 2026', tools: ['LIME','Grad-CAM'] },
]

export default function ExperiencePreview(){
  const [index, setIndex] = useState(0)
  const x = useMotionValue(0)
  const width = 280
  const onDragEnd = (_, info) => {
    const dir = info.offset.x < 0 ? 1 : -1
    const next = Math.min(Math.max(index + dir, 0), ITEMS.length-1)
    setIndex(next)
    animate(x, -next*width, { type: 'spring', stiffness: 300, damping: 32 })
  }

  return (
    <motion.section className="section" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: true, amount: 0.22 }}>
      <div className="container">
        <div className="section-head"><h2>Experience Preview</h2></div>
        <div className="timeline-mini">
          <motion.div className="timeline-track" drag="x" style={{ x }} dragElastic={0.1} dragConstraints={{ left: -width*(ITEMS.length-1), right: 0 }} onDragEnd={onDragEnd}>
            {ITEMS.map((it, i) => (
              <motion.article key={it.role} className={`card xp ${index===i?'active':''}`} animate={index===i?{ y: -6, boxShadow: '0 14px 36px rgba(214,178,255,0.2)' }:{ y:0, boxShadow: 'var(--shadow-1)' }}>
                <div className="row-between">
                  <h3 className="card-title">{it.role}</h3>
                  <span className="muted tiny">{it.when}</span>
                </div>
                <div className="muted">{it.org}</div>
                <div className="pill-row">
                  {it.tools.map(t => <span key={t} className="pill">{t}</span>)}
                </div>
              </motion.article>
            ))}
          </motion.div>
          <div className="dots">
            {ITEMS.map((_, i) => (
              <button key={i} className={`dot ${index===i?'active':''}`} onClick={()=>{
                setIndex(i)
                animate(x, -i*width, { type: 'spring', stiffness: 300, damping: 32 })
              }} />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  )
}

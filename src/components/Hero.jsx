import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Scene3D from '../Scene3D.jsx'
import { usePrefersReducedMotion } from '../utils/motion.js'
import { FilterContext } from '../App.jsx'

const entryVariant = {
  initial: { opacity: 1, y: 0 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.01 } }
}

export default function Hero(){
  const prefersReduced = usePrefersReducedMotion()
  const { activeChips, setActiveChips } = React.useContext(FilterContext)

  const words = ['AI Automation','Explainable AI','Full-Stack Systems']
  const [idx, setIdx] = useState(0)
  useEffect(() => {
    if (prefersReduced) return
    const t = setInterval(() => setIdx(i => (i+1)%words.length), 3000)
    return () => clearInterval(t)
  }, [prefersReduced])

  const fullHeadline = 'Intelligent Systems'
  const chars = fullHeadline.split('')

  return (
    <motion.section className="hero" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: true, amount: 0.2 }}>
      <div className="container hero-grid">
        <div className="hero-left glass">
          <div className="terminal-line">SS_OS v2.6 · STATUS: ONLINE · COORD: 33.6°N 73.0°E</div>
          <h1 className="display">
            {chars.map((c, i) => (
              <motion.span key={i} initial={{ opacity: prefersReduced?1:0 }} animate={{ opacity: 1 }} transition={{ delay: prefersReduced?0: i*0.032, duration: prefersReduced?0:0.04 }}>{c}</motion.span>
            ))}
            {!prefersReduced && (
              <motion.span className="cursor" aria-hidden animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}>|</motion.span>
            )}
          </h1>
          <p className="lead">MERN Stack Developer — I build AI-powered products and automation workflows that turn complex problems into useful, human-centered experiences.</p>

          <div className="chips-rotate" aria-live="polite">
            <span className="muted">Focus:</span>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span key={idx} className="chip-rotate" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.24 }}>{words[idx]}</motion.span>
            </AnimatePresence>
          </div>

          <div className="cta-row">
            <motion.a whileHover={{ scale: 1.03, boxShadow: '0 0 28px rgba(247,163,197,0.35)' }} whileTap={{ scale: 0.98 }} href="#projects" className="btn btn-primary"><i className="bi bi-lightning-charge"/> View Projects</motion.a>
            <div className="tooltip-wrap">
              <motion.a whileHover={{ scale: 1.02, boxShadow: '0 0 22px rgba(45,226,230,0.25)' }} whileTap={{ scale: 0.98 }} href="#contact" className="btn btn-secondary"><i className="bi bi-envelope"/> Get In Touch</motion.a>
              <AnimatePresence>
                <motion.span className="micro-tip" initial={{ opacity: 0, y: 4 }} whileHover={{}} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }} transition={{ duration: 0.18 }}>Sends you to the contact section</motion.span>
              </AnimatePresence>
            </div>
          </div>

          <div className="hero-chips">
            {['AI Automation','Explainable AI','Full-Stack Systems'].map(label => {
              const active = activeChips.includes(label)
              return (
                <motion.button key={label} className={`chip ${active? 'active':''}`} onClick={() => {
                  const next = active ? activeChips.filter(c => c!==label) : [...activeChips, label]
                  setActiveChips(next)
                }} whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} animate={active?{ boxShadow: ['0 0 0 rgba(45,226,230,0)','0 0 12px rgba(45,226,230,0.35)','0 0 0 rgba(45,226,230,0)'] }: {}} transition={{ duration: 1.8, repeat: active?Infinity:0 }}>
                  {label}
                </motion.button>
              )
            })}
          </div>
        </div>
        <div className="hero-right">
          <Scene3D />
          {!prefersReduced && (
            <motion.div className="scanlines" aria-hidden animate={{ opacity: [0.025, 0.03, 0.025] }} transition={{ duration: 6, repeat: Infinity, ease: 'linear' }} />
          )}
        </div>
      </div>
    </motion.section>
  )
}

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const entryVariant = { initial: { opacity: 1, scale: 1 }, animate: { opacity: 1, scale: 1, transition: { duration: 0.01 } } }

export default function CTA(){
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try { await navigator.clipboard.writeText('shamaiemshabbir2@gmail.com'); setCopied(true); setTimeout(()=>setCopied(false), 1500) } catch {}
  }
  return (
    <motion.section className="section cta-center" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: true, amount: 0.2 }}>
      <div className="container narrow">
        <motion.div className="radial-glow" animate={{ scale: [0.98,1.02,0.98], opacity: 0.28 }} transition={{ duration: 6, repeat: Infinity }} />
        <h2>Let's Build Intelligent Systems.</h2>
        <p className="muted">Open for collaborations, research, and exciting projects.</p>
        <div className="cta-row center">
          <motion.a href="#contact" className="btn btn-primary" whileHover={{ scale: 1.04, boxShadow: '0 0 34px rgba(247,163,197,0.35)' }} whileTap={{ scale: 0.98 }} initial={{ y: 6, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ duration: 0.28 }}> <i className="bi bi-send"/> Start a project</motion.a>
          <motion.button className="btn btn-secondary" whileHover={{ scale: 1.02, boxShadow: '0 0 24px rgba(45,226,230,0.3)' }} whileTap={{ scale: 0.98 }} onClick={copy}><i className="bi bi-envelope"/> Copy email</motion.button>
        </div>
        <AnimatePresence>
          {copied && <motion.div className="toast" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}>Email copied!</motion.div>}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

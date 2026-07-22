import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function DirectLinks(){
  const [toast, setToast] = useState('')
  const copy = async (text) => { try { await navigator.clipboard.writeText(text); setToast('Copied!'); setTimeout(()=>setToast(''), 1200) } catch{} }
  return (
    <section className="section">
      <div className="container">
        <div className="list-cards">
          <motion.a href="mailto:shamaiemshabbir2@gmail.com" className="list-card" whileHover={{ y: -2 }}><i className="bi bi-envelope"/> <span className="underline-on-hover">shamaiemshabbir2@gmail.com</span></motion.a>
          <motion.a href="https://github.com/shamaiem10" target="_blank" rel="noreferrer" className="list-card" whileHover={{ y: -2 }}><i className="bi bi-github"/> <span className="underline-on-hover">github.com/shamaiem10</span></motion.a>
          <motion.a href="https://linkedin.com/in/shamaiem-shabbir" target="_blank" rel="noreferrer" className="list-card" whileHover={{ y: -2 }}><i className="bi bi-linkedin"/> <span className="underline-on-hover">linkedin.com/in/shamaiem-shabbir</span></motion.a>
          <motion.button className="list-card" whileHover={{ y: -2 }} onClick={() => copy('shamaiemshabbir2@gmail.com')}><i className="bi bi-clipboard"/> <span className="underline-on-hover">Copy email</span></motion.button>
        </div>
        <AnimatePresence>
          {toast && <motion.div className="toast" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}>{toast}</motion.div>}
        </AnimatePresence>
      </div>
    </section>
  )
}

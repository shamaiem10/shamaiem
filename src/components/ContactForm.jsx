import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const entryVariant = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0, transition: { duration: 0.01 } } }

export default function ContactForm(){
  const [state, setState] = useState('idle') // idle | loading | success | error
  const onSubmit = (e) => {
    e.preventDefault()
    setState('loading')
    setTimeout(() => setState('success'), 900)
  }

  return (
    <motion.section className="section" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: true, amount: 0.22 }}>
      <div className="container">
        <div className="section-head"><h2>Contact</h2></div>
        <form className={`form ${state}`} onSubmit={onSubmit}>
          <label className="field">
            <span>Name</span>
            <input required placeholder="Your name" />
          </label>
          <label className="field">
            <span>Email</span>
            <input required type="email" placeholder="you@example.com" />
          </label>
          <label className="field wide">
            <span>Message</span>
            <textarea required rows="5" placeholder="Tell me about your project" />
          </label>
          <div className="row-between">
            <motion.button className="btn btn-primary" type="submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} disabled={state==='loading'}>
              {state==='loading' ? <span className="spinner"/> : 'Send'}
            </motion.button>
            <AnimatePresence>
              {state==='success' && (
                <motion.span className="muted" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}><i className="bi bi-check2-circle"/> Sent!</motion.span>
              )}
            </AnimatePresence>
          </div>
        </form>
      </div>
    </motion.section>
  )
}

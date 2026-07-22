import React from 'react'
import { motion } from 'framer-motion'
import { FilterContext } from '../App.jsx'

const entryVariant = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0, transition: { duration: 0.01 } } }

const AREAS = [
  { label: 'AI Automation', icon: 'bi-robot' },
  { label: 'Explainable AI', icon: 'bi-eye' },
  { label: 'Full-Stack Systems', icon: 'bi-layers' },
  { label: 'LLM Workflows', icon: 'bi-chat-dots' },
  { label: 'Research', icon: 'bi-journal-text' },
  { label: 'Cloud Deployment', icon: 'bi-cloud-upload' },
]

export default function FocusAreas(){
  const { activeChips, setActiveChips } = React.useContext(FilterContext)
  return (
    <motion.section className="section" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: true, amount: 0.18 }}>
      <div className="container">
        <div className="section-head">
          <h2>Focus Areas</h2>
          <p className="muted">AI Automation • Explainable AI • Full-Stack Systems • LLM Workflows • Research • Cloud Deployment</p>
        </div>
        <div className="chip-grid six">
          {AREAS.map((a, i) => {
            const active = activeChips.includes(a.label)
            return (
              <motion.button key={a.label} className={`chip focus ${active?'active':''}`} layout whileHover={{ scale: 1.03, y: -1 }} whileTap={{ scale: 0.97 }} onClick={() => {
                const next = active ? activeChips.filter(c=>c!==a.label) : [...activeChips, a.label]
                setActiveChips(next)
              }}
                animate={active?{ boxShadow: ['0 0 0 rgba(45,226,230,0)','0 0 12px rgba(45,226,230,0.35)','0 0 0 rgba(45,226,230,0)'] }: {}} transition={{ duration: 1.8, repeat: active?Infinity:0 }}
              >
                <i className={`bi ${a.icon}`} />
                <span>{a.label}</span>
              </motion.button>
            )
          })}
        </div>
      </div>
    </motion.section>
  )
}

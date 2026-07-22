import React, { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { FilterContext } from '../App.jsx'

const entryVariant = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0, transition: { duration: 0.01 } } }

const TAGS = [
  { icon: 'bi-lightning-charge', label: 'Automation' },
  { icon: 'bi-cpu', label: 'AI' },
  { icon: 'bi-box', label: 'Platform' },
  { icon: 'bi-mic', label: 'Voice' },
  { icon: 'bi-heart-pulse', label: 'Health' },
]

export default function ProjectsFilterBar(){
  const { activeChips, setActiveChips } = React.useContext(FilterContext)
  const [q, setQ] = useState('')
  const ref = React.useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const h = useTransform(scrollYProgress, [0, 0.3], ['80px', '56px'])
  const bg = useTransform(scrollYProgress, [0, 0.3], [0.5, 0.8])

  return (
    <motion.div className="filter-bar glass sticky" ref={ref} style={{ height: h }} variants={entryVariant} initial="initial" animate="animate" viewport={{ once: true, amount: 0.18 }}>
      <div className="container row-between">
        <div className="tag-row">
          {TAGS.map(t => {
            const active = activeChips.some(c => c.toLowerCase().includes(t.label.toLowerCase()))
            return (
              <motion.button key={t.label} className={`chip small ${active?'active':''}`} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={() => {
                const name = t.label
                const exists = activeChips.includes(name)
                setActiveChips(exists? activeChips.filter(c=>c!==name) : [...activeChips, name])
              }}>
                <i className={`bi ${t.icon}`} />
                <span>{t.label}</span>
              </motion.button>
            )
          })}
        </div>
        <div className="filter-controls">
          <label className="search"><i className="bi bi-search"/><input placeholder="Search projects" value={q} onChange={e=>setQ(e.target.value)} /></label>
        </div>
      </div>
    </motion.div>
  )
}

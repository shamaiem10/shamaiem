import React, { useState } from 'react'
import { motion } from 'framer-motion'

const THEMES = ['Explainable AI', 'Multimodal Classification', 'Intelligent Software Testing']

export default function ResearchThemes(){
  const [active, setActive] = useState(THEMES[0])
  return (
    <section className="section">
      <div className="container">
        <div className="section-head"><h2>Research Themes</h2></div>
        <div className="chip-row">
          {THEMES.map(t => (
            <motion.button key={t} className={`chip small ${active===t?'active':''}`} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} onClick={()=>setActive(t)}>{t}</motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}

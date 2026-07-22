import React from 'react'
import { motion } from 'framer-motion'

const ITEMS = [
  { title: 'Curious by default', text: 'Finding the useful signal in messy real-world problems.' },
  { title: 'Human-centered', text: 'Systems that feel simple on the outside.' },
  { title: 'Systems thinking', text: 'From end-to-end flows to reliable delivery.' },
]

export default function Principles(){
  return (
    <section className="section">
      <div className="container">
        <div className="section-head"><h2>Principles</h2></div>
        <div className="list-cards">
          {ITEMS.map(it => (
            <motion.article key={it.title} className="list-card principle" whileHover={{ y: -2 }}>
              <div className="accent"/>
              <h3 className="list-title">{it.title}</h3>
              <p className="muted">{it.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

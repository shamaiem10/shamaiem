import React, { useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'experience', label: 'Experience' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
  { id: 'resume', label: 'Resume' },
]

export default function Header({ active }) {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#home" className="brand" aria-label="shamaiem home">shamaiem</a>
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setOpen(v => !v)}>
          <i className="bi bi-list" />
        </button>
        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Primary">
          {navItems.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={`nav-link ${active===n.id?'active':''}`} onClick={() => setOpen(false)}>
              <span>{n.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

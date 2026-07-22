import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const entryVariant = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0, transition: { duration: 0.01 } } }

export default function ProjectsGrid({ projects }){
  const [detail, setDetail] = useState(null)
  const [visible, setVisible] = useState(6)
  const list = useMemo(() => projects.slice(0, visible), [projects, visible])

  return (
    <motion.div className="container section" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: false, amount: 0.22 }}>
      <div className="grid three">
        {list.map((p, i) => (
          <motion.article key={p.key} className="card project-plain" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.32 }} whileHover={{ y: -3 }}>
            <div className="row-between">
              <h3 className="card-title">{p.title}</h3>
              <span className="tag light">{p.tag}</span>
            </div>
            <p className="muted">{p.summary} {p.value}</p>
            <div className="pill-row">
              {p.tech.slice(0, 5).map(t => <span key={t} className="pill">{t}</span>)}
            </div>
            <div className="card-actions">
              {p.links.github && <a href={p.links.github} target="_blank" rel="noreferrer" className="link"><i className="bi bi-github"/> GitHub</a>}
              {p.links.live && <a href={p.links.live} target="_blank" rel="noreferrer" className="link"><i className="bi bi-box-arrow-up-right"/> Live</a>}
              <motion.button className="btn btn-mini" whileHover={{ scale: 1.02 }} onClick={()=>setDetail(p)}>Details</motion.button>
            </div>
          </motion.article>
        ))}
      </div>

      <AnimatePresence>
        {detail && (
          <motion.div className="slide-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={()=>setDetail(null)}>
            <motion.aside className="slide-panel" initial={{ x: 40, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 40, opacity: 0 }} onClick={e=>e.stopPropagation()}>
              <div className="row-between">
                <h3>{detail.title}</h3>
                <button className="icon-btn" aria-label="Close" onClick={()=>setDetail(null)}><i className="bi bi-x"/></button>
              </div>
              <p className="muted">{detail.value}</p>
              <div className="pill-row">{detail.tech.map(t => <span key={t} className="pill">{t}</span>)}</div>
              <div className="card-actions">
                {detail.links.github && <a href={detail.links.github} target="_blank" rel="noreferrer" className="link"><i className="bi bi-github"/> GitHub</a>}
                {detail.links.live && <a href={detail.links.live} target="_blank" rel="noreferrer" className="link"><i className="bi bi-box-arrow-up-right"/> Live</a>}
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

import React, { useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const entryVariant = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0, transition: { duration: 0.01 } } }

export default function FeaturedProjects({ projects }){
  const [active, setActive] = useState(0)
  const [quick, setQuick] = useState(null)
  const containerRef = useRef(null)

  const onPrev = () => setActive((i)=> (i-1+projects.length)%projects.length)
  const onNext = () => setActive((i)=> (i+1)%projects.length)

  return (
    <motion.section className="section" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: true, amount: 0.22 }}>
      <div className="container">
        <div className="section-head row-between">
          <h2>Featured Projects</h2>
          <div className="carousel-controls">
            <motion.button className="icon-btn" whileHover={{ scale: 1.05 }} onClick={onPrev} aria-label="Previous"><i className="bi bi-chevron-left"/></motion.button>
            <motion.button className="icon-btn" whileHover={{ scale: 1.05 }} onClick={onNext} aria-label="Next"><i className="bi bi-chevron-right"/></motion.button>
          </div>
        </div>
        <div className="carousel" ref={containerRef}>
          <div className="carousel-track" style={{ transform: `translateX(calc(${(-active)} * (min(340px, 86vw) + var(--sp-4))))` }}>
            {projects.slice(0,6).map((p, idx) => (
              <motion.article key={p.key} className="card project-card" whileHover={{ y: -6, scale: 1.02, boxShadow: '0 14px 40px rgba(247,163,197,0.18)' }} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.36 }}>
                <div className="card-head">
                  <i className={`bi ${p.icons?.[0]||'bi-box'}`} />
                  <span className="tag">{p.tag}</span>
                </div>
                <h3 className="card-title">{p.title}</h3>
                <p className="muted">{p.summary}</p>
                <div className="pill-row">
                  {p.tech.slice(0,4).map(t => <span key={t} className="pill">{t}</span>)}
                </div>
                <div className="card-actions">
                  {p.links.github && <a href={p.links.github} target="_blank" rel="noreferrer" className="link"><i className="bi bi-github"/> GitHub</a>}
                  {p.links.live && <a href={p.links.live} target="_blank" rel="noreferrer" className="link"><i className="bi bi-box-arrow-up-right"/> Live</a>}
                  <motion.button className="btn btn-tertiary" whileHover={{ scale: 1.02 }} onClick={() => setQuick(p)}>Quick View</motion.button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {quick && (
            <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setQuick(null)}>
              <motion.div className="modal-sheet" initial={{ opacity: 0, scale: 0.96, y: 8 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.98, y: 8 }} onClick={(e)=>e.stopPropagation()}>
                <div className="modal-head">
                  <h3>{quick.title}</h3>
                  <button className="icon-btn" aria-label="Close" onClick={()=>setQuick(null)}><i className="bi bi-x"/></button>
                </div>
                <p className="muted">{quick.value}</p>
                <div className="pill-row">
                  {quick.tech.map(t => <span key={t} className="pill">{t}</span>)}
                </div>
                <div className="card-actions">
                  {quick.links.github && <a href={quick.links.github} target="_blank" rel="noreferrer" className="link"><i className="bi bi-github"/> GitHub</a>}
                  {quick.links.live && <a href={quick.links.live} target="_blank" rel="noreferrer" className="link"><i className="bi bi-box-arrow-up-right"/> Live</a>}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

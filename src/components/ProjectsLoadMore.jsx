import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const entryVariant = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0, transition: { duration: 0.01 } } }

export default function ProjectsLoadMore({ total }){
  const [loading, setLoading] = useState(false)
  const [done, setDone] = useState(false)

  const onClick = () => {
    if (done) { window.scrollTo({ top: 0, behavior: 'smooth' }); return }
    setLoading(true)
    setTimeout(() => { setLoading(false); setDone(true) }, 900)
  }

  return (
    <motion.div className="container narrow section" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: false, amount: 0.2 }}>
      <div className="center">
        <motion.button className={`btn ${done? 'btn-primary' : 'btn-outline'}`} onClick={onClick} whileHover={{ scale: done?1.02:1.03 }} whileTap={{ scale: 0.98 }}>
          {!loading && !done && <><i className="bi bi-chevron-down"/> Load more</>}
          {loading && <span className="spinner" />}
          {!loading && done && <><i className="bi bi-arrow-up"/> Back to top</>}
        </motion.button>
      </div>
    </motion.div>
  )
}

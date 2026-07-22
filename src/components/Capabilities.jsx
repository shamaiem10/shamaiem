import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const entryVariant = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0, transition: { duration: 0.01 } } }

const ITEMS = [
  { icon: 'bi-robot', title: 'AI Automation', overview: 'Designing robust autonomous workflows with human-in-the-loop gating.', example: `flow.trigger('newEmail').extract().summarize().route()`, note: 'Used in LoopedIn, ResuMatch' },
  { icon: 'bi-eye', title: 'Explainable AI', overview: 'Applying LIME/Grad-CAM to build transparent ML systems.', example: `explain(model, input).with(['LIME','GradCAM']).aggregate()`, note: 'Research at NUST DS/ML Lab' },
  { icon: 'bi-layers', title: 'Full-Stack Systems', overview: 'Shipping end-to-end products from API to clean UI.', example: `app.routes('/events').ws().cache().observe()`, note: 'RapidResq, Localyse, Vytal' },
  { icon: 'bi-chat-dots', title: 'LLM Workflows', overview: 'Grounded generation with tools, memory, and eval gates.', example: `agent.use(tools).recall(memory).respond(user)`, note: 'AURI, LoopedIn' },
  { icon: 'bi-bezier', title: 'Research & Prototyping', overview: 'From messy problem to validated, minimal solution.', example: `hypothesis().prototype().measure().iterate()`, note: 'XAI + testing' },
  { icon: 'bi-cloud-upload', title: 'Cloud Deployment', overview: 'Reliable deployments on Vercel/Netlify and cloud services.', example: `ci.build().test().deploy('vercel')`, note: 'Localyse, RapidResq' },
]

export default function Capabilities(){
  const [open, setOpen] = useState(null)
  return (
    <motion.section className="section" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: true, amount: 0.22 }}>
      <div className="container">
        <div className="section-head">
          <h2>Capabilities</h2>
        </div>
        <div className="grid three">
          {ITEMS.map((it, idx) => (
            <motion.article key={it.title} className={`card cap ${open===idx?'expanded':''}`} layout whileHover={{ y: -4, scale: 1.01, boxShadow: '0 10px 28px rgba(214,178,255,0.18)' }}>
              <div className="cap-head">
                <i className={`bi ${it.icon}`}/>
                <h3 className="card-title">{it.title}</h3>
              </div>
              <p className="muted">{it.overview}</p>
              <div className="cap-actions">
                <motion.button className="btn btn-mini" whileHover={{ scale: 1.02, backgroundColor: 'rgba(45,226,230,0.08)' }} onClick={() => setOpen(open===idx?null:idx)}>See example</motion.button>
              </div>
              <AnimatePresence initial={false}>
                {open===idx && (
                  <motion.div className="code-pane" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.22 }}>
                    <pre><code>{it.example}<span className="caret">|</span></code></pre>
                    <div className="muted tiny">{it.note}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

import React, { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const entryVariant = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0, transition: { duration: 0.01 } } }

const DATA = {
  Languages: ['JavaScript (ES6+)', 'TypeScript', 'Python', 'SQL', 'HTML5', 'CSS3'],
  Frontend: ['React.js', 'Bootstrap', 'Responsive Design', 'Leaflet.js', 'Recharts'],
  Backend: ['Node.js', 'Express.js', 'Flask', 'RESTful APIs', 'WebSockets', 'JWT Auth', 'Nodemailer'],
  'AI/ML': ['PyTorch', 'TensorFlow', 'scikit-learn', 'NumPy', 'Pandas', 'LIME', 'Grad-CAM', 'Tesseract OCR'],
  'AI Automation': ['n8n', 'OpenRouter', 'OpenAI API', 'Groq', 'Hugging Face', 'Tavily API', 'Pollinations AI'],
  Data: ['MongoDB Atlas', 'MySQL', 'SQLite', 'Cloudinary'],
  DevOps: ['Git', 'Docker', 'Postman', 'JMeter', 'Google Cloud', 'Vercel', 'Netlify']
}

export default function Toolkit(){
  const tabs = Object.keys(DATA)
  const [active, setActive] = useState(tabs[0])
  const [favOnly, setFavOnly] = useState(false)
  const [q, setQ] = useState('')

  const items = useMemo(() => {
    let list = DATA[active]
    if (q) list = list.filter(x => x.toLowerCase().includes(q.toLowerCase()))
    if (favOnly) {
      const favs = ['React.js','Node.js','n8n','Groq','MongoDB Atlas','Vercel']
      list = [...list.filter(i => favs.includes(i)), ...list.filter(i => !favs.includes(i))]
    }
    return list
  }, [active, q, favOnly])

  return (
    <motion.section className="section" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: true, amount: 0.22 }}>
      <div className="container">
        <div className="section-head row-between">
          <h2>Toolkit</h2>
          <div className="tool-controls">
            <label className="search"><i className="bi bi-search"/><input placeholder="Search" value={q} onChange={e=>setQ(e.target.value)} /></label>
            <label className="switch"><input type="checkbox" checked={favOnly} onChange={e=>setFavOnly(e.target.checked)} /> <span>Show favorites</span></label>
          </div>
        </div>
        <div className="tabs">
          {tabs.map((t, i) => (
            <button key={t} className={`tab ${active===t?'active':''}`} onClick={()=>setActive(t)}>{t}</button>
          ))}
        </div>
        <div className="grid six tool-grid">
          <AnimatePresence initial={false}>
            {items.map((it) => (
              <motion.div key={it} className="tool-card" layout initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }} whileHover={{ y: -3, scale: 1.02, boxShadow: '0 8px 22px rgba(45,226,230,0.12)' }}>
                <i className="bi bi-code-slash"/>
                <span>{it}</span>
                <div className="dots-row" aria-hidden>
                  {Array.from({ length: 5 }).map((_, i) => <span key={i} className="dot" />)}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  )
}

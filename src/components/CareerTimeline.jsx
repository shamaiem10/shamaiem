import React from 'react'
import { motion } from 'framer-motion'

const entryVariant = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0, transition: { duration: 0.01 } } }

const ITEMS = [
  { level: 'LEVEL 01', role: 'AI & Automation Intern', org: 'Matrix AE', type: 'Internship', when: 'Jun 2026 - Present', bullets: ['Contributing to AI engineering and workflow automation initiatives.', 'Working with automation tools and intelligent integrations for operational use cases.'] },
  { level: 'LEVEL 02', role: 'Full-Stack Engineering Intern', org: 'PulseQ - Hospital Queue Intelligence Startup', type: 'Internship', when: 'Feb 2026', bullets: ['Contributed to MEAN stack development for a hospital patient queue management system.', 'Built UI components and integrated Express REST APIs for patient-facing views.'] },
  { level: 'LEVEL 03', role: 'Research Intern', org: 'Data Science & ML Lab, NUST', type: 'Research', when: 'Oct 2025 - Jul 2026', bullets: ['Implementing LIME and Grad-CAM feature attribution for transparent production ML models.', 'Evaluating robustness under distribution shift, adversarial inputs, and class imbalance.'] },
  { level: 'LEVEL 04', role: 'Frontend Development Intern', org: 'Software Productivity Strategists, Inc.', type: 'Internship', when: 'Oct 2025 - Nov 2025', bullets: ['Built responsive pages with HTML, CSS, JavaScript, and Bootstrap.', 'Resolved cross-browser layout inconsistencies through systematic testing.'] },
  { level: 'LEVEL 05', role: 'AI Fellow', org: 'Buildables (Bytewise Ltd.)', type: 'Fellowship', when: 'Aug 2025 - Nov 2025', bullets: ['Engineered RESTful AI microservices integrating text generation, STT, and TTS pipelines.', 'Applied few-shot and system-role prompt engineering to improve LLM output consistency.'] },
]

export default function CareerTimeline(){
  return (
    <motion.section className="section" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: false, amount: 0.22 }}>
      <div className="container">
        <div className="section-head"><h2>Career Timeline</h2></div>
        <div className="timeline">
          {ITEMS.map((it, i) => (
            <motion.div key={i} className="timeline-item" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="timeline-dot" />
              <div className="timeline-content card">
                <div className="muted tiny">{it.level} · {it.type} · {it.when}</div>
                <h3 className="card-title">{it.role}</h3>
                <div className="muted">{it.org}</div>
                <ul>
                  {it.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

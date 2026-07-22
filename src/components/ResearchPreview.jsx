import React from 'react'
import { motion } from 'framer-motion'

const entryVariant = { initial: { opacity: 1, y: 0 }, animate: { opacity: 1, y: 0, transition: { duration: 0.01 } } }

const ITEMS = [
  { status: 'Under Review - AI2ML Azerbaijan 2026', title: 'CONCORD-XAI: Explainability-Guided Detection and Mitigation of Shortcut Learning in Machine Learning Models', summary: 'Detects and mitigates shortcut learning through consensus across GradCAM++, SHAP, and LIME.' },
  { status: 'Under Review - ICET GIKI 2026', title: 'Empirical Evaluation of Bayesian Fusion and Post-Hoc XAI Methods for Biological Classification', summary: 'Validates Bayesian fusion of image and text classifiers and robustness of eight post-hoc XAI methods.' },
  { status: 'Under Review - ICoDT2 2026', title: 'Artificial Intelligence-Driven Optimization of Regression Testing: A Hybrid Adaptive Framework', summary: 'HARP: hybrid clustering, XGBoost, and RL for intelligent regression-test prioritization.' },
]

export default function ResearchPreview(){
  return (
    <motion.section className="section" variants={entryVariant} initial="initial" animate="animate" viewport={{ once: true, amount: 0.22 }}>
      <div className="container">
        <div className="section-head"><h2>Research Preview</h2></div>
        <div className="list-cards">
          {ITEMS.map((it, i) => (
            <motion.article key={i} className="list-card" whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,0.02)' }} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.28 }}>
              <div className="row-between">
                <span className="lozenge loz-uv">{it.status}</span>
              </div>
              <h3 className="list-title">{it.title}</h3>
              <p className="muted">{it.summary}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

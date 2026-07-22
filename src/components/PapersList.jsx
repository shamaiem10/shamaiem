import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PAPERS = [
  { status: 'Under Review', venue: 'AI2ML Azerbaijan 2026', title: 'CONCORD-XAI: Explainability-Guided Detection and Mitigation of Shortcut Learning in Machine Learning Models', summary: 'Detects and mitigates shortcut learning via consensus across GradCAM++, SHAP, and LIME.' },
  { status: 'Under Review', venue: 'ICET GIKI 2026', title: 'Empirical Evaluation of Bayesian Fusion and Post-Hoc XAI Methods for Biological Classification', summary: 'Validates Bayesian fusion of image and text classifiers and compares robustness of eight post-hoc XAI methods.' },
  { status: 'Under Review', venue: 'ICoDT2 2026', title: 'Artificial Intelligence-Driven Optimization of Regression Testing: A Hybrid Adaptive Framework', summary: 'HARP: hybrid clustering, XGBoost, and reinforcement-learning for regression-test prioritization.' },
]

export default function PapersList(){
  return (
    <section className="section">
      <div className="container">
        <div className="section-head"><h2>Papers</h2></div>
        <div className="list-cards">
          <AnimatePresence>
            {PAPERS.map((p, i) => (
              <motion.article key={p.title} className="list-card" initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} exit={{ opacity: 0, y: 12 }} whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,0.02)' }}>
                <div className="row-between">
                  <span className="lozenge loz-uv">{p.status} · {p.venue}</span>
                </div>
                <h3 className="list-title underline-on-hover">{p.title}</h3>
                <p className="muted">{p.summary}</p>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

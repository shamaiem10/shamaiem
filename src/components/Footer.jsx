import React from 'react'
import { motion } from 'framer-motion'

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h4 className="footer-brand">shamaiem</h4>
          <p className="muted">MERN Stack Developer — building AI-powered products and automation workflows that turn complex problems into useful, human-centered experiences.</p>
          <div className="social-row">
            <a href="https://github.com/shamaiem10" target="_blank" rel="noreferrer" className="social-link"><i className="bi bi-github"/> GitHub</a>
            <a href="https://linkedin.com/in/shamaiem-shabbir" target="_blank" rel="noreferrer" className="social-link"><i className="bi bi-linkedin"/> LinkedIn</a>
            <a href="mailto:shamaiemshabbir2@gmail.com" className="social-link"><i className="bi bi-envelope"/> Email</a>
            <a href="https://devpost.com/shamaiem10" target="_blank" rel="noreferrer" className="social-link"><i className="bi bi-box-arrow-up-right"/> Devpost</a>
          </div>
        </div>
        <div>
          <h5>Quick Links</h5>
          <ul className="footer-list">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h5>Services</h5>
          <ul className="footer-list">
            <li>AI Automation</li>
            <li>Explainable AI</li>
            <li>Full-Stack Systems</li>
            <li>LLM Workflows</li>
            <li>Cloud Deployment</li>
          </ul>
        </div>
        <div>
          <h5>Contact</h5>
          <ul className="footer-list">
            <li><i className="bi bi-envelope"/> shamaiemshabbir2@gmail.com</li>
          </ul>
          <a href="#home" className="back-top"><i className="bi bi-arrow-up"/> Back to top</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} shamaiem. All rights reserved.</span>
      </div>
    </footer>
  )
}

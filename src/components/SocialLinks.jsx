import React from 'react'

export default function SocialLinks(){
  return (
    <section className="section">
      <div className="container">
        <div className="section-head"><h2>Social</h2></div>
        <div className="social-row big">
          <a className="social-link" href="https://github.com/shamaiem10" target="_blank" rel="noreferrer"><i className="bi bi-github"/> GitHub</a>
          <a className="social-link" href="https://linkedin.com/in/shamaiem-shabbir" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"/> LinkedIn</a>
          <a className="social-link" href="mailto:shamaiemshabbir2@gmail.com"><i className="bi bi-envelope"/> Email</a>
          <a className="social-link" href="https://devpost.com/shamaiem10" target="_blank" rel="noreferrer"><i className="bi bi-box-arrow-up-right"/> Devpost</a>
        </div>
      </div>
    </section>
  )
}

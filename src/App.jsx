import React, { useMemo, useRef, useState, useEffect, createContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
import FocusAreas from './components/FocusAreas.jsx'
import FeaturedProjects from './components/FeaturedProjects.jsx'
import Capabilities from './components/Capabilities.jsx'
import Process from './components/Process.jsx'
import ExperiencePreview from './components/ExperiencePreview.jsx'
import ResearchPreview from './components/ResearchPreview.jsx'
import Toolkit from './components/Toolkit.jsx'
import CTA from './components/CTA.jsx'
import ProjectsFilterBar from './components/ProjectsFilterBar.jsx'
import ProjectsGrid from './components/ProjectsGrid.jsx'
import ProjectsLoadMore from './components/ProjectsLoadMore.jsx'
import CareerTimeline from './components/CareerTimeline.jsx'
import Education from './components/Education.jsx'
import Achievements from './components/Achievements.jsx'
import Certifications from './components/Certifications.jsx'
import ResumeCTA from './components/ResumeCTA.jsx'
import ResearchThemes from './components/ResearchThemes.jsx'
import PapersList from './components/PapersList.jsx'
import CollaborateCTA from './components/CollaborateCTA.jsx'
import BioHero from './components/BioHero.jsx'
import NowWidget from './components/NowWidget.jsx'
import Principles from './components/Principles.jsx'
import SocialLinks from './components/SocialLinks.jsx'
import AboutContactCTA from './components/AboutContactCTA.jsx'
import ContactForm from './components/ContactForm.jsx'
import DirectLinks from './components/DirectLinks.jsx'
import Availability from './components/Availability.jsx'
import { usePrefersReducedMotion } from './utils/motion.js'

export const FilterContext = createContext()

const pageVariants = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] } },
}

export default function App() {
  const prefersReduced = usePrefersReducedMotion()

  // Global focus chips state (persist to localStorage for session)
  const [activeChips, setActiveChips] = useState(() => {
    try {
      const saved = localStorage.getItem('activeChips')
      return saved ? JSON.parse(saved) : []
    } catch { return [] }
  })
  useEffect(() => {
    try { localStorage.setItem('activeChips', JSON.stringify(activeChips)) } catch {}
  }, [activeChips])

  // Projects data assembled from scraped content (no images)
  const projects = useMemo(() => ([
    { key: 'loopedin', title: 'LoopedIn', tag: 'AUTOMATION', summary: 'Autonomous LinkedIn Content Engine', value: 'Daily content workflow with approval gates and branded art.', tech: ['n8n','OpenRouter','Tavily','Discord','Buffer','Pollinations AI','Cloudinary'], links: { github: 'https://github.com/shamaiem10/LoopedIn' }, icons: ['bi-lightning-charge'] },
    { key: 'resumatch', title: 'ResuMatch', tag: 'AUTOMATION', summary: 'AI Resume Screening Automation', value: 'Reads, scores, and alerts against job description.', tech: ['n8n','Gmail','OpenRouter','Google Sheets'], links: { github: 'https://github.com/shamaiem10/ResuMatch' }, icons: ['bi-cpu'] },
    { key: 'localyse', title: 'Localyse', tag: 'AI PLATFORM', summary: 'AI Commerce Intelligence Layer', value: 'Multi-signal inference for context-aware offers.', tech: ['React','TypeScript','Node.js','MongoDB Atlas','Groq LLM','Tavily API'], links: { github: 'https://github.com/Kiranwaqar/Localyse', live: 'https://localyse-tawny.vercel.app/' }, icons: ['bi-box'] },
    { key: 'rapidresq', title: 'RapidResq', tag: 'FULL STACK', summary: 'Emergency Response Platform', value: 'AI guidance, alerts, safety map, volunteer notifications.', tech: ['React','Node.js','Express','MongoDB','Leaflet.js','Groq AI','JWT'], links: { github: 'https://github.com/shamaiem10/RapidResq', live: 'https://rapid-res-qn-ew.vercel.app/' }, icons: ['bi-heart-pulse'] },
    { key: 'auri', title: 'AURI', tag: 'VOICE AI', summary: 'Real-Time AI Voice Assistant', value: 'Duplex STT → LLM → TTS with sub-second audio.', tech: ['Python','Flask','React','Groq LLM','AssemblyAI','gTTS'], links: { github: 'https://github.com/shamaiem10/auri' }, icons: ['bi-mic'] },
    { key: 'vytal', title: 'Vytal', tag: 'HEALTH AI', summary: 'AI Health Intelligence Platform', value: 'Mood analysis, OCR prescriptions, realtime dashboards.', tech: ['React','Flask','SQLite','Hugging Face','Tesseract OCR','Recharts'], links: { github: 'https://github.com/shamaiem10/vytal' }, icons: ['bi-heart-pulse'] },
    { key: 'sync', title: 'Sync', tag: 'PRODUCTIVITY', summary: 'Student Project Manager', value: 'Workspace for teams to manage members and tasks.', tech: ['Python','Flask','HTML','CSS','JavaScript','SQLite'], links: { github: 'https://github.com/shamaiem10/sync' }, icons: ['bi-box'] },
  ]), [])

  // Apply filters from active chips (simple tag/keyword match)
  const filteredProjects = useMemo(() => {
    if (!activeChips || activeChips.length === 0) return projects
    const needle = activeChips.map(c => c.toLowerCase())
    return projects.filter(p =>
      needle.some(n => p.tag.toLowerCase().includes(n)) ||
      needle.some(n => p.summary.toLowerCase().includes(n)) ||
      needle.some(n => p.value.toLowerCase().includes(n))
    )
  }, [projects, activeChips])

  // Active nav highlight on scroll
  const [activeNav, setActiveNav] = useState('home')
  useEffect(() => {
    const ids = ['home','projects','research','experience','about','contact','resume']
    const sections = ids.map(id => document.getElementById(id)).filter(Boolean)
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) setActiveNav(e.target.id)
      })
    }, { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 })
    sections.forEach(s => io.observe(s))
    return () => io.disconnect()
  }, [])

  return (
    <FilterContext.Provider value={{ activeChips, setActiveChips }}>
      <motion.div initial="initial" animate="animate" exit="exit" variants={pageVariants}>
        <Header active={activeNav} />

        {/* HOME */}
        <main id="home" className="section-root" aria-label="Home">
          <Hero prefersReduced={prefersReduced} />
          <FocusAreas />
          <FeaturedProjects projects={projects} />
          <Capabilities />
          <Process />
          <ExperiencePreview />
          <ResearchPreview />
          <Toolkit />
          <CTA />
        </main>

        {/* PROJECTS */}
        <section id="projects" className="section-root" aria-label="Projects">
          <ProjectsFilterBar />
          <ProjectsGrid projects={filteredProjects} />
          <ProjectsLoadMore total={projects.length} />
        </section>

        {/* RESEARCH */}
        <section id="research" className="section-root" aria-label="Research">
          <ResearchThemes />
          <PapersList />
          <CollaborateCTA />
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section-root" aria-label="Experience">
          <CareerTimeline />
          <Education />
          <Achievements />
          <Certifications />
        </section>

        {/* ABOUT */}
        <section id="about" className="section-root" aria-label="About">
          <BioHero />
          <NowWidget />
          <Principles />
          <SocialLinks />
          <AboutContactCTA />
        </section>

        {/* CONTACT */}
        <section id="contact" className="section-root" aria-label="Contact">
          <ContactForm />
          <DirectLinks />
          <Availability />
        </section>

        {/* RESUME CTA (anchor) */}
        <section id="resume" className="section-root" aria-label="Resume">
          <ResumeCTA />
        </section>

        <Footer />
      </motion.div>
    </FilterContext.Provider>
  )
}

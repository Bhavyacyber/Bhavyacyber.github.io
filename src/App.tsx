import { motion } from 'framer-motion'
import { ArrowUpRight, GitBranch, Mail, Menu, X } from 'lucide-react'
import { lazy, Suspense, useEffect, useState, type FormEvent, type ReactNode } from 'react'
import ThemeToggle from './components/ThemeToggle'
import InteractivePortrait from './components/InteractivePortrait'
import Cursor from './components/Cursor'
import { portfolioData } from './data/portfolio'
import './App.css'

const InteractiveStage = lazy(() => import('./components/InteractiveStage'))

const projects = portfolioData.projects
const skills = portfolioData.technicalAreas

function Reveal({ children, className = '', id }: { children: ReactNode; className?: string; id?: string }) {
  return (
    <motion.div id={id} className={className} initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.65, ease: 'easeOut' }}>
      {children}
    </motion.div>
  )
}

function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState('ALL')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const visibleProjects = filter === 'ALL' ? projects : projects.filter((project) => project.category.includes(filter))

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const name = String(formData.get('name') ?? '')
    const email = String(formData.get('email') ?? '')
    const message = String(formData.get('message') ?? '')
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)

    window.location.href = `mailto:${portfolioData.links.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      <Cursor />
      <header className="portfolio-nav">
        <a href={portfolioData.links.blog} className="brand-mark blog-brand" target="_blank" rel="noreferrer">BLOG</a>
        <span className="availability"><i /> {portfolioData.identity.availability.map((item) => <span className="availability-item" key={item}>{item}</span>)}</span>
        <button className="menu-toggle icon-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        <nav className={`portfolio-links ${menuOpen ? 'is-open' : ''}`}>
          {['About', 'Skills', 'Work', 'Experience', 'Workshops', 'Contact'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
          <ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
        </nav>
      </header>

      <main id="top">
        <section className="portfolio-hero">
          <div className="hero-copy">
            <p className="eyebrow"><span>01</span> CYBERSECURITY / RESEARCH / DEFENSE</p>
            <h1>{portfolioData.identity.displayName}<span>{portfolioData.identity.title}</span></h1>
            <InteractivePortrait />
            <p className="hero-lede">I design resilient digital environments through threat detection, security research, and practical defense.</p>
            <p className="hero-location">{portfolioData.identity.location}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore work <ArrowUpRight size={15} /></a>
              <a className="button button-ghost" href={portfolioData.links.cv}>View CV <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-socials"><a href={portfolioData.links.github} aria-label="GitHub"><GitBranch size={17} /></a><a href={portfolioData.links.blog} aria-label="Security blog"><ArrowUpRight size={17} /></a><span>SCROLL TO EXPLORE ↓</span></div>
          </div>
          <Suspense fallback={<div className="stage-loading">LOADING 3D STAGE...</div>}><InteractiveStage /></Suspense>
        </section>

        <Reveal className="portfolio-section about-grid" id="about">
          <div className="section-kicker"><span>02</span> ABOUT THE PRACTICE</div>
          <div className="about-story"><h2>How systems fail <em>under attack.</em></h2><p>{portfolioData.about.copy}</p></div>
          <div className="facts-list">{portfolioData.about.facts.map(([label, value]) => <div key={label}><span>{label}</span><strong>{value}</strong></div>)}</div>
        </Reveal>

        <Reveal className="portfolio-section skills-section" id="skills">
          <div className="section-kicker"><span>03</span> CAPABILITIES</div>
          <div className="section-heading"><h2>Technical<br /><em>areas.</em></h2><p>Grouped areas from hands-on labs, security-engineering projects, and internship environments.</p></div>
          <div className="skill-grid">{skills.map((area, index) => <motion.article key={area.name} whileHover={{ y: -6, rotateX: 3, rotateY: -3 }}><span>0{index + 1}</span><h3>{area.name}</h3><div className="tag-row">{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></motion.article>)}</div>
        </Reveal>

        <Reveal className="portfolio-section work-section" id="work">
          <div className="section-kicker"><span>04</span> SELECTED WORK</div>
          <div className="section-heading"><h2>Research.<br /><em>Detection.</em><br />Defense.</h2><div className="filter-row">{['ALL', 'SOC', 'APPLICATION', 'THREAT', 'AI'].map((item) => <button className={filter === item ? 'active' : ''} key={item} type="button" onClick={() => setFilter(item)}>{item}</button>)}</div></div>
          <motion.div layout className="project-grid">{visibleProjects.map((project) => <motion.article layout key={project.title} className="project-tile"><div className="tile-meta"><span>{project.category}</span><ArrowUpRight size={17} /></div><h3>{project.title}</h3><p>{project.details}</p><div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="project-meta">{project.meta}</span></motion.article>)}</motion.div>
        </Reveal>

        <Reveal className="portfolio-section experience-section" id="experience">
          <div className="section-kicker"><span>05</span> EXPERIENCE / APPROACH</div>
          <div className="timeline">{portfolioData.experience.map((item) => <article key={`${item.role}-${item.company}`}><span>{item.period}</span><div><h3>{item.role}</h3><p>{item.company}</p>{item.details.map((detail) => <p key={detail}>{detail}</p>)}</div></article>)}</div>
        </Reveal>

        <Reveal className="portfolio-section experience-section" id="workshops">
          <div className="section-kicker"><span>06</span> HANDS-ON WORKSHOPS</div>
          <div className="timeline">{portfolioData.workshops.map((workshop) => <article key={workshop.title}><span>{workshop.meta}</span><div><h3>{workshop.title}</h3>{workshop.details.map((detail) => <p key={detail}>{detail}</p>)}</div></article>)}</div>
        </Reveal>

        <section className="contact-section" id="contact"><div className="contact-inner"><div><p className="section-kicker"><span>07</span> CONTACT</p><h2>Open to the <em>right role.</em></h2><p>{portfolioData.identity.status}. Reach out by email for opportunities, research, or collaboration.</p><div className="contact-links"><a href={`mailto:${portfolioData.links.email}`}><Mail size={15} /> Email</a><a href={portfolioData.links.linkedin} target="_blank" rel="noreferrer"><ArrowUpRight size={15} /> LinkedIn</a><a href={portfolioData.links.blog} target="_blank" rel="noreferrer"><ArrowUpRight size={15} /> Security blog</a></div></div><form onSubmit={handleSubmit}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@example.com" /></label><label>Message<textarea required name="message" placeholder="Tell me about the role or work" rows={3} /></label><button className="button button-dark" type="submit">{submitted ? 'Message ready' : 'Send inquiry'} <ArrowUpRight size={15} /></button></form></div></section>
      </main>

      <footer className="portfolio-footer"><div><a href="#top" className="brand-mark">BHAVYA<span>.</span></a><p>CYBERSECURITY / RESEARCH / DEFENSE</p></div><span>{portfolioData.identity.name}</span><a href="#top">Back to top ↑</a></footer>
    </>
  )
}

export default App

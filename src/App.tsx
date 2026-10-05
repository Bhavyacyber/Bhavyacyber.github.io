import { motion } from 'framer-motion'
import { ArrowUpRight, GitBranch, Mail, Menu, X } from 'lucide-react'
import { lazy, Suspense, useEffect, useState, type ReactNode } from 'react'
import ThemeToggle from './components/ThemeToggle'
import InteractivePortrait from './components/InteractivePortrait'
import { portfolioData } from './data/portfolio'
import './App.css'

const InteractiveStage = lazy(() => import('./components/InteractiveStage'))
const SecurityArchitecture = lazy(() => import('./components/SecurityArchitecture'))

const projects = portfolioData.projects
const skills = portfolioData.technicalAreas
const careerAlignedProjects = [
  {
    title: 'Android APK Security Analysis',
    category: 'APPLICATION SECURITY / MOBILE',
    details: 'Performed static and advanced static analysis of Android APK files to investigate application behavior and potential security risks.',
    meta: 'Cybersecurity Research Architect Intern · iTelematics · 2026',
    tags: ['Android', 'APK analysis', 'Application security'],
  },
  {
    title: 'Attack & Detection-Rule Simulator Integration',
    category: 'PRODUCT SECURITY / SECURITY ENGINEERING',
    details: 'Contributed to cyber-attack and detection-rule simulators through simulator integration, API testing, and workflow validation.',
    meta: 'Cybersecurity Research Architect Intern · iTelematics · 2026',
    tags: ['API testing', 'Detection rules', 'Workflow validation'],
  },
  {
    title: 'Web Application Security Testing',
    category: 'APPLICATION SECURITY',
    details: 'Practiced web-security testing with Burp Suite, OWASP ZAP, and WebGoat across SQL injection, XSS, and CSRF scenarios mapped to the OWASP Top 10.',
    meta: 'Cybersecurity Intern · Redynox Cybersecurity Solutions · February 2026',
    tags: ['Burp Suite', 'OWASP ZAP', 'WebGoat', 'OWASP Top 10'],
  },
]
const projectRoadmap = [
  {
    number: '01',
    category: 'APPLICATION SECURITY',
    title: 'Secure Web Application',
    summary: 'Build a deliberately vulnerable application, document its risks, then secure it and prove the fixes with repeatable tests.',
    flow: ['Architecture', 'Threat model', 'Controlled attack', 'Detection', 'Fix', 'Security test'],
    tags: ['Threat modeling', 'Web security', 'Detection', 'Regression tests'],
  },
  {
    number: '02',
    category: 'API SECURITY',
    title: 'API Security Lab',
    summary: 'Build a realistic REST API, introduce common API flaws in a controlled lab, then implement and verify secure fixes.',
    flow: ['JWT auth', 'RBAC', 'Rate limits', 'Input validation', 'Logging'],
    tags: ['BOLA', 'Broken authentication', 'Data exposure', 'Injection', 'Rate-limit bypass'],
  },
  {
    number: '03',
    category: 'PRODUCT SECURITY / DEVSECOPS',
    title: 'Product Security Pipeline',
    summary: 'Connect security checks to a product workflow and turn findings into clear reports developers can use to remediate issues.',
    flow: ['GitHub', 'Application', 'SAST', 'SCA', 'Secret detection', 'DAST', 'Report', 'Remediation'],
    tags: ['Secure SDLC', 'CI/CD', 'Developer feedback'],
  },
  {
    number: '04',
    category: 'AI APPLICATION SECURITY',
    title: 'AI Application Security Lab',
    summary: 'Build an AI-enabled application with explicit data and tool boundaries, exercise realistic abuse paths, and add layered defenses.',
    flow: ['User', 'Web app', 'AI gateway', 'LLM', 'Tools / RAG', 'Database'],
    attackPath: ['Prompt injection', 'Unauthorized tool use', 'Sensitive data'],
    tags: ['Prompt injection', 'Tool security', 'RAG', 'Defense in depth'],
  },
  {
    number: '05',
    category: 'AI RED TEAMING',
    title: 'AI Red-Team Framework',
    summary: 'Develop a small, repeatable testing framework that probes AI application risks and produces actionable security reports.',
    flow: ['Configure tests', 'Run evaluations', 'Record evidence', 'Report findings'],
    tags: ['Prompt injection', 'Jailbreaks', 'Data leakage', 'RAG poisoning', 'Tool abuse', 'Unsafe outputs'],
  },
]
const learningPath = [
  {
    number: '01',
    level: 'FOUNDATION',
    title: 'Understand the ground beneath the product.',
    description: 'Build the networking, operating-system, and security fundamentals needed to reason about trust boundaries and risk.',
    topics: ['Networking', 'Operating systems', 'Security fundamentals'],
  },
  {
    number: '02',
    level: 'APPLICATION SECURITY',
    title: 'Learn how software behaves.',
    description: 'Assess web, API, and mobile applications, then turn findings into clear, actionable fixes.',
    topics: ['Web & APIs', 'OWASP', 'Mobile security'],
  },
  {
    number: '03',
    level: 'PRODUCT SECURITY',
    title: 'Secure the whole product lifecycle.',
    description: 'Move beyond individual findings into design, threat modeling, engineering, release, and operations.',
    topics: ['Threat modeling', 'Secure engineering', 'Cloud foundations'],
  },
  {
    number: '04',
    level: 'AI APPLICATION SECURITY',
    title: 'Secure the AI features inside products.',
    description: 'Map trust boundaries across models, data, tools, and infrastructure; test abuse paths and build layered mitigations.',
    topics: ['LLM & prompt risks', 'RAG & agent tools', 'AI red teaming'],
  },
]

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

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const projectFilters = ['ALL', ...new Set(projects.map((project) => project.category.split(' ')[0]))]
  const visibleProjects = filter === 'ALL' ? projects : projects.filter((project) => project.category.startsWith(filter))
  const primaryNavigationItems = [
    { label: 'About', href: '#about', highlighted: true },
    { label: 'Projects', href: '#projects', highlighted: true },
    { label: 'Tutorials', href: 'https://bhavyacyber.github.io/tutorials/', highlighted: true, button: true },
  ]
  const moreNavigationItems = [
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <div className="fieldnotes-site">
      <header className="site-header">
        <a href={portfolioData.links.blog} className="site-brand" aria-label="Open Bhavya's security blog" target="_blank" rel="noreferrer"><span className="brand-symbol">B</span><span>BLOG</span><i>/</i><span className="brand-descriptor">CYBERSECURITY</span></a>
        <nav className="primary-nav" aria-label="Primary navigation">
          {primaryNavigationItems.map((item) => <a key={item.label} className={`${item.highlighted ? 'nav-link-highlight' : ''} ${'button' in item && item.button ? 'nav-link-button' : ''}`} href={item.href}>{item.label}</a>)}
        </nav>
        <div className="header-actions">
          <ThemeToggle theme={theme} onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />
          <button className="menu-toggle icon-button" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close more navigation links' : 'Open more navigation links'} aria-expanded={menuOpen}>
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
        <nav className={`more-menu ${menuOpen ? 'is-open' : ''}`} aria-label="More navigation links">
          {moreNavigationItems.map((item) => <a key={item.label} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>)}
        </nav>
      </header>

      <main id="top">
        <section className="fieldnotes-hero">
          <Suspense fallback={<div className="stage-loading">INITIALIZING INTERACTIVE STAGE...</div>}>
            <InteractiveStage />
          </Suspense>
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> MY PATH INTO SECURITY ENGINEERING</p>
            <h1>Build security depth.<br /><em>Secure products<br />end to end.</em></h1>
            <p className="hero-lede">I’m building toward <strong>Application &amp; Product Security</strong>, with API and AI Application Security as technical specializations.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#learning-path">Explore my path <span>↓</span></a>
              <a className="button button-ghost" href={portfolioData.links.cv}>View CV <ArrowUpRight size={15} /></a>
            </div>
            <div className="hero-meta"><span>{portfolioData.identity.location}</span><span>{portfolioData.identity.status}</span></div>
          </div>
          <aside className="direction-card" aria-label="Career direction overview">
            <div className="card-topline"><span>MY CAREER DIRECTION</span><span>01 / 04</span></div>
            <div className="direction-profile">
              <InteractivePortrait />
              <div><p>Building toward</p><h2>Application &amp;<br /><em>Product Security</em></h2></div>
            </div>
            <div className="direction-track" aria-hidden="true"><i /><i /><i /><i /></div>
            <div className="direction-caption"><span>CAREER DIRECTION</span><span>NICHE: API + AI APPSEC</span></div>
            <a href="#learning-path">Follow the learning path <ArrowUpRight size={15} /></a>
          </aside>
          <div className="hero-orbit" aria-hidden="true"><span /><span /><span /></div>
        </section>

        <Reveal className="why-section editorial-section" id="about">
          <p className="section-kicker">WHY THIS PATH</p>
          <p className="why-copy">I want to help secure <em>real products</em>—not only run tests against them. Application and Product Security are the core; API and AI Application Security are the technical niche. Cloud Security and AI Governance support that work.</p>
        </Reveal>

        <Reveal className="learning-section editorial-section" id="learning-path">
          <div className="section-heading">
            <div><p className="section-kicker">THE LEARNING PATH</p><h2>Build depth,<br /><em>step by step.</em></h2></div>
            <p>A broad technical base, followed by application and product security, then a focused specialty in AI-enabled products.</p>
          </div>
          <div className="path-grid">
            {learningPath.map((stage) => <motion.article key={stage.number} className="path-card" style={{ transformPerspective: 1000, transformStyle: 'preserve-3d' }} whileHover={{ y: -5, rotateX: 2.5, rotateY: -1.5 }}>
              <div className="path-card-top"><span>{stage.number}</span><ArrowUpRight size={16} /></div>
              <p className="path-level">{stage.level}</p>
              <h3>{stage.title}</h3>
              <p className="path-description">{stage.description}</p>
              <ul>{stage.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
            </motion.article>)}
          </div>
          <p className="path-note">Cloud Security and AI Governance are supporting knowledge areas—not competing specializations.</p>
          <div className="architecture-block">
            <div className="architecture-heading">
              <div><p className="section-kicker">INTERACTIVE SECURITY MODEL</p><h3>Follow the trust boundaries.</h3></div>
              <p>Explore how identity, application logic, models, tools, and data connect in an AI-enabled product.</p>
            </div>
            <Suspense fallback={<div className="architecture-loading">LOADING INTERACTIVE MODEL...</div>}>
              <SecurityArchitecture />
            </Suspense>
          </div>
        </Reveal>

        <Reveal className="capabilities-section editorial-section" id="skills">
          <div className="section-heading">
            <div><p className="section-kicker">FIELD NOTES / CURRENT TOOLKIT</p><h2>Learning by<br /><em>doing.</em></h2></div>
            <p>Hands-on experience across labs, application assessments, network analysis, and security engineering.</p>
          </div>
          <div className="capability-list">{skills.map((area, index) => <article key={area.name}><span className="capability-number">0{index + 1}</span><h3>{area.name}</h3><div className="tag-row">{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
        </Reveal>

        <Reveal className="projects-section editorial-section" id="projects">
          <div className="section-heading">
            <div><p className="section-kicker">THE BUILD ROADMAP</p><h2>One story.<br /><em>Built in depth.</em></h2></div>
            <p>Projects I’m building in sequence: from secure software foundations to AI application security and red teaming.</p>
          </div>
          <div className="roadmap-list">
            {projectRoadmap.map((project) => <motion.article key={project.number} className="roadmap-project" style={{ transformPerspective: 1000, transformStyle: 'preserve-3d' }} whileHover={{ y: -4, rotateX: 1.2 }}>
              <div className="roadmap-project-index"><span>{project.number}</span><i /></div>
              <div className="roadmap-project-content">
                <div className="project-card-top"><span>{project.category}</span><span>BUILD SEQUENCE</span></div>
                <h3>{project.title}</h3>
                <p className="roadmap-summary">{project.summary}</p>
                <div className="project-flow" aria-label={`${project.title} build steps`}>{project.flow.map((step, index) => <span className="project-flow-step" key={step}>{step}{index < project.flow.length - 1 && <b aria-hidden="true">→</b>}</span>)}</div>
                {project.attackPath && <div className="attack-path"><span>THREAT PATH</span>{project.attackPath.map((step, index) => <span className="attack-step" key={step}>{step}{index < project.attackPath!.length - 1 && <b aria-hidden="true">→</b>}</span>)}</div>}
                <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </div>
            </motion.article>)}
          </div>
          <div className="specialization-ribbon" aria-label="Project progression">
            <span>THE PROGRESSION</span>
            <p>Cybersecurity fundamentals <b>→</b> Web security <b>→</b> API security <b>→</b> Product security <b>→</b> Secure SDLC <b>→</b> AI application security <b>→</b> AI red teaming</p>
          </div>
          <div className="existing-fieldwork">
            <div className="fieldwork-heading">
              <div><p className="section-kicker">PREVIOUS CAREER-ALIGNED WORK</p><h3>Experience that informs this direction.</h3></div>
              <p>Completed internship work, grouped by its connection to application and product security.</p>
            </div>
            <div className="project-grid career-project-grid">{careerAlignedProjects.map((project, index) => <article className="project-card career-project-card" key={project.title}>
              <div className="project-card-top"><span>{project.category}</span><span>PAST WORK · 0{index + 1}</span></div>
              <h3>{project.title}</h3>
              <p>{project.details}</p>
              <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <span className="project-meta">{project.meta}</span>
            </article>)}</div>
            <div className="fieldwork-heading">
              <div><p className="section-kicker">OTHER FIELDWORK TO DATE</p><h3>Projects and practice.</h3></div>
              <div className="filter-row" aria-label="Filter existing fieldwork">{projectFilters.map((item) => <button className={filter === item ? 'active' : ''} key={item} type="button" onClick={() => setFilter(item)}>{item}</button>)}</div>
            </div>
            <motion.div layout className="project-grid">{visibleProjects.map((project, index) => <motion.article layout key={project.title} className="project-card">
              <div className="project-card-top"><span>{project.category}</span><span>0{index + 1} <ArrowUpRight size={15} /></span></div>
              <h3>{project.title}</h3>
              <p>{project.details}</p>
              <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <span className="project-meta">{project.meta}</span>
            </motion.article>)}</motion.div>
          </div>
        </Reveal>

        <Reveal className="experience-section editorial-section" id="experience">
          <div className="section-heading">
            <div><p className="section-kicker">EXPERIENCE</p><h2>Practice in<br /><em>the field.</em></h2></div>
            <p>Learning through research, testing, collaboration, and the practical work of making systems safer.</p>
          </div>
          <div className="timeline">{portfolioData.experience.map((item) => <article key={`${item.role}-${item.company}`}><span className="timeline-period">{item.period}</span><div><h3>{item.role}</h3><p className="timeline-company">{item.company}</p>{item.details.map((detail) => <p className="timeline-detail" key={detail}>{detail}</p>)}</div></article>)}</div>
        </Reveal>

        <Reveal className="workshops-section editorial-section" id="workshops">
          <div className="section-heading">
            <div><p className="section-kicker">WORKSHOPS / LAB NOTES</p><h2>Learn by<br /><em>testing safely.</em></h2></div>
            <p>Hands-on learning in authorized, sandboxed environments—connecting concepts to practical security work.</p>
          </div>
          <div className="timeline">{portfolioData.workshops.map((workshop) => <article key={workshop.title}><span className="timeline-period">{workshop.meta}</span><div><h3>{workshop.title}</h3>{workshop.details.map((detail) => <p className="timeline-detail" key={detail}>{detail}</p>)}</div></article>)}</div>
        </Reveal>

        <Reveal className="tutorials-section editorial-section" id="tutorials">
          <div className="fieldnotes-card">
            <div><p className="section-kicker">THE FIELDNOTES LIBRARY</p><h2>Make the next<br /><em>step practical.</em></h2><p>Structured cybersecurity learning—from foundations to application, product, and AI security. Explore the curriculum, standards, and technology notes.</p></div>
            <div className="fieldnotes-card-aside"><span>LEARN / TEST / DOCUMENT</span><a className="button button-primary" href="https://bhavyacyber.github.io/tutorials/" target="_blank" rel="noreferrer">Open Cybersecurity Fieldnotes <ArrowUpRight size={15} /></a><a className="text-link" href="https://bhavyacyber.github.io/tutorials/technologies.html" target="_blank" rel="noreferrer">Technologies &amp; cheat sheets <ArrowUpRight size={15} /></a></div>
          </div>
        </Reveal>

        <section className="responsible-note"><span>!</span><div><p className="section-kicker">LEARN RESPONSIBLY</p><h2>Practice on systems you own or have permission to use.</h2><p>Keep exercises local, use sample data, and never scan, access, or test someone else’s systems without clear authorization.</p></div></section>

        <section className="contact-section" id="contact"><div className="contact-inner"><div><p className="section-kicker">CONTACT / COLLABORATE</p><h2>Open to the<br /><em>right opportunity.</em></h2><p>{portfolioData.identity.status}. Reach out about security roles, research, or collaboration.</p><div className="contact-links"><a href={`mailto:${portfolioData.links.email}`}><Mail size={15} /> Email</a><a href={portfolioData.links.linkedin} target="_blank" rel="noreferrer"><ArrowUpRight size={15} /> LinkedIn</a><a href={portfolioData.links.github} target="_blank" rel="noreferrer"><GitBranch size={15} /> GitHub</a></div></div></div></section>
      </main>

      <footer className="site-footer"><a href="#top" className="site-brand"><span className="brand-symbol">B</span><span>BHAVYA</span><i>/</i><span className="brand-descriptor">CYBERSECURITY</span></a><span>APPLICATION &amp; PRODUCT SECURITY · API · AI</span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}

export default App

import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import Cursor from './components/Cursor'
import './App.css'

function App() {
    useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])


    useEffect(() => {
  const hero = document.querySelector('.hero-content') as HTMLElement | null

  if (!hero) {
    return
  }

  const handleMouseMove = (event: MouseEvent) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 20
    const y = (event.clientY / window.innerHeight - 0.5) * 20

    hero.style.transform = `translate(${x}px, ${y}px)`
  }

  const handleMouseLeave = () => {
    hero.style.transform = 'translate(0, 0)'
  }

  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('mouseleave', handleMouseLeave)

  return () => {
    window.removeEventListener('mousemove', handleMouseMove)
    window.removeEventListener('mouseleave', handleMouseLeave)
  }
}, [])  
    useEffect(() => {
      const elements = document.querySelectorAll('.reveal')

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible')
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
        },
      )

      elements.forEach((element) => observer.observe(element))

      return () => {
        observer.disconnect()
      }
    }, [])

    const revealRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const elements = revealRef.current?.querySelectorAll('.reveal')

    if (!elements) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
      },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
      <>
    <Cursor />

    <main>
        <nav className="site-nav">
         <a href="#" className="site-logo">
           BHAVYA<span>.</span>
        </a>

        <div className="site-nav-links">
           <a href="#about">About</a>
           <a href="#expertise">Expertise</a>
           <a href="#projects">Work</a>
           <a href="/blog/">Blog</a>
           <a href="#contact">Contact</a>
         </div>
        </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="hero-label">
            CYBERSECURITY • RESEARCH • DEFENSE
          </p>

          <h1>
            Bhavya
            <span>Cybersecurity</span>
          </h1>

          <p className="hero-description">
            Cybersecurity professional focused on threat detection,
            security research, and building resilient digital environments.
          </p>

          <div className="hero-actions">
            <a href="#projects">Explore my work</a>
            <a href="#contact">Get in touch</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              View Resume
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <img
            src="/profile.jpg"
            alt="Bhavya - Cybersecurity Professional"
          />
        </div>

        <div className="hero-scroll">
          <span>Scroll to explore</span>
          <span className="scroll-line" />
        </div>
      </section>


      {/* ABOUT */}
      <section className="about reveal" id="about">
        <div className="section-label">ABOUT</div>

        <div className="about-content">
          <h2>
            Security is not just
            <span> technology.</span>
          </h2>

          <div className="about-text">
            <p>
              I am a cybersecurity professional focused on threat detection,
              security research, and building resilient digital environments.
            </p>

            <p>
              My work combines security operations, SIEM engineering,
              vulnerability assessment, and practical security research.
            </p>

            <p>
              I enjoy understanding how attacks work, detecting them through
              meaningful telemetry, and turning security data into actionable
              defense.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="expertise reveal" id="expertise">
        <div className="section-label">02 — EXPERTISE</div>

        <div className="expertise-intro">
          <h2>
            Security from
            <br />
            detection to defense.
          </h2>

          <p>
            My focus is on practical cybersecurity — understanding threats,
            detecting malicious activity, investigating incidents, and
            strengthening systems against future attacks.
          </p>
        </div>

        <div className="expertise-grid">
          <article className="expertise-card">
            <span>01</span>
            <h3>Threat Detection</h3>
            <p>
              Identifying suspicious activity through log analysis,
              behavioral detection, and security monitoring.
            </p>
          </article>

          <article className="expertise-card">
            <span>02</span>
            <h3>SOC &amp; SIEM</h3>
            <p>
              Building detection pipelines, analyzing alerts, and
              engineering practical SOC workflows.
            </p>
          </article>

          <article className="expertise-card">
            <span>03</span>
            <h3>Security Research</h3>
            <p>
              Exploring attack techniques, vulnerabilities, and
              defensive strategies through hands-on research.
            </p>
          </article>

          <article className="expertise-card">
            <span>04</span>
            <h3>Incident Response</h3>
            <p>
              Investigating security events and developing structured
              approaches to containment and response.
            </p>
          </article>

          <article className="expertise-card">
            <span>05</span>
            <h3>GRC &amp; Compliance</h3>
            <p>
              Understanding cybersecurity risk, governance, privacy,
              and regulatory compliance requirements.
            </p>
          </article>

          <article className="expertise-card">
            <span>06</span>
            <h3>AI Security</h3>
            <p>
              Exploring security risks across AI and GenAI systems,
              including emerging attack and defense techniques.
            </p>
          </article>
        </div>
      </section>
          {/* PROJECTS */}
      <section className="projects reveal" id="projects">
        <div className="section-label">03 — SELECTED WORK</div>

        <div className="projects-intro">
          <h2>
            Research.
            <br />
            Detection.
            <br />
            Defense.
          </h2>

          <p>
            Hands-on cybersecurity projects focused on threat detection,
            security operations, attack simulation, and practical defense.
          </p>
        </div>

        <div className="project-list">
          <article className="project-card">
            <div className="project-number">01</div>

            <div className="project-content">
              <p className="project-type">
                SIEM / THREAT DETECTION
              </p>

              <h3>Wazuh SOC Detection Lab</h3>

              <p>
                A hands-on security operations lab using Wazuh, Sysmon,
                Windows telemetry, Kali Linux, and Python-based threat
                enrichment to detect and investigate malicious activity.
              </p>

              <div className="project-tags">
                <span>Wazuh</span>
                <span>Sysmon</span>
                <span>SIEM</span>
                <span>Python</span>
                <span>MITRE ATT&amp;CK</span>
              </div>

              <a
                href="https://github.com/Bhavyacyber/wazuh-soc-detection-lab"
                target="_blank"
                rel="noreferrer"
              >
                View project →
              </a>
            </div>
          </article>

          <article className="project-card">
            <div className="project-number">02</div>

            <div className="project-content">
              <p className="project-type">
                CYBERSECURITY RESEARCH
              </p>

              <h3>Attack Detection &amp; Analysis</h3>

              <p>
                Practical research into attack techniques, security
                telemetry, detection engineering, and defensive analysis
                using controlled lab environments.
              </p>

              <div className="project-tags">
                <span>Threat Hunting</span>
                <span>Detection Engineering</span>
                <span>Log Analysis</span>
              </div>
            </div>
          </article>

          <article className="project-card">
            <div className="project-number">03</div>

            <div className="project-content">
              <p className="project-type">
                AI SECURITY
              </p>

              <h3>AI &amp; GenAI Security Research</h3>

              <p>
                Exploring emerging security risks across AI and GenAI
                systems, including adversarial techniques, application
                security, and defensive controls.
              </p>

              <div className="project-tags">
                <span>OWASP</span>
                <span>GenAI Security</span>
                <span>AI Risk</span>
              </div>
            </div>
          </article>
        </div>
      </section>

{/* CONTACT */}
<section className="contact reveal" id="contact">
  <div className="section-inner">
    <p className="section-label">CONTACT</p>

    <h2>
      Let's build something
      <span>secure.</span>
    </h2>

    <p className="contact-description">
      Interested in cybersecurity, security research, or collaborating
      on something meaningful? Get in touch.
    </p>

    <div className="contact-links">
      <a href="mailto:bhavyanagasai@gmail.com">
        Email
      </a>

      <a
        href="https://www.linkedin.com/in/bhavya-naga-sai-parvathi-kshatri-3140251a2"
        target="_blank"
        rel="noreferrer"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/Bhavyacyber"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </div>
  </div>
</section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="footer-left">
          <span>BHAVYA.</span>
          <p>Cybersecurity • Research • Defense</p>
        </div>

        <div className="footer-right">
          <span>© 2026 Bhavya</span>
          <a href="#">Back to top ↑</a>
        </div>
      </footer>
    </main>
  </>
  )
}

export default App

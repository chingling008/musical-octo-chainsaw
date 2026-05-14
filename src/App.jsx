import { useState } from 'react'
import CybersecurityDashboard from './components/CybersecurityDashboard'
import ProjectCard from './components/ProjectCard'
import SkillBadge from './components/SkillBadge'
import { certifications } from './data/certifications'
import { education } from './data/education'
import { experience } from './data/experience'
import { projects } from './data/projects'
import { tryHackMeStats } from './data/rooms'
import { skills } from './data/skills'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Security Labs', href: '#security-labs' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/chingling008' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/cizario-gum-340a303b9/' },
  { label: 'TryHackMe', href: 'https://tryhackme.com/p/chinglingmadness' },
  { label: 'binaryheros.com', href: 'https://binaryheros.com' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.target)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')
    window.location.href = `mailto:gumcizario@gmail.com?subject=${encodeURIComponent(`Portfolio Contact from ${name}`)}&body=${encodeURIComponent(`From: ${name}\nEmail: ${email}\n\n${message}`)}`
  }

  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text">
      {/* NAV */}
      <header className="sticky top-0 z-10 border-b border-terminal-border/80 bg-terminal-bg/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <a href="#home" className="shrink-0 text-sm font-semibold uppercase tracking-[0.2em] text-neon-green">
            Cizario Gum
          </a>
          <ul className="hidden flex-wrap justify-end gap-x-5 gap-y-1 text-sm md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-neon-blue" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="ml-auto text-terminal-muted transition hover:text-neon-green md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </nav>
        {menuOpen && (
          <ul className="flex flex-col gap-3 border-t border-terminal-border/80 px-6 py-4 text-sm md:hidden">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  className="transition hover:text-neon-blue"
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-16 pt-14">

        {/* HERO */}
        <section id="home" className="scroll-mt-24 flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
          <div className="space-y-6 md:max-w-xl">
            <p className="text-sm uppercase tracking-widest text-neon-green">Penetration Tester &amp; Robotics Engineer</p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Hi, I&apos;m <span className="text-neon-blue">Cizario Gum</span>
            </h1>
            <p className="leading-relaxed text-terminal-muted">
              I help companies build and secure the next generation of technology. By combining expertise in Industrial
              Automation with high-level Software Engineering, I provide a unique, full-spectrum approach to technical
              projects — from custom-built Unix shells and environmental scanners to comprehensive vulnerability research.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-neon-green px-5 py-2.5 text-sm font-semibold text-terminal-bg transition hover:bg-neon-green/80"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-lg border border-neon-blue px-5 py-2.5 text-sm font-semibold text-neon-blue transition hover:bg-neon-blue/10"
              >
                Contact Me
              </a>
            </div>
            <ul className="flex flex-wrap gap-4 text-sm">
              {socialLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} target="_blank" rel="noreferrer" className="text-terminal-muted transition hover:text-neon-green">
                    {link.label} ↗
                  </a>
                </li>
              ))}
              <li>
                <a href="mailto:gumcizario@gmail.com" className="text-terminal-muted transition hover:text-neon-green">
                  Email ↗
                </a>
              </li>
            </ul>
          </div>
          <div className="shrink-0">
            <img
              src={`${import.meta.env.BASE_URL}avatar.png`}
              alt="Cizario Gum"
              className="h-56 w-56 rounded-full border-2 border-neon-green/50 object-cover shadow-glow md:h-64 md:w-64"
            />
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24 space-y-6">
          <header className="space-y-2">
            <p className="text-sm uppercase tracking-widest text-neon-blue">What I work with</p>
            <h2 className="text-3xl font-bold">Skills &amp; Tech</h2>
          </header>
          <ul className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <li key={skill}>
                <SkillBadge label={skill} />
              </li>
            ))}
          </ul>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24 space-y-6">
          <header className="space-y-2">
            <p className="text-sm uppercase tracking-widest text-neon-blue">Robotics Projects</p>
            <h2 className="text-3xl font-bold">Project Gallery</h2>
          </header>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-24 space-y-6">
          <header className="space-y-2">
            <p className="text-sm uppercase tracking-widest text-neon-green">Work History</p>
            <h2 className="text-3xl font-bold">Experience</h2>
          </header>
          <ol className="relative space-y-8 border-l border-terminal-border pl-6">
            {experience.map((job) => (
              <li key={`${job.company}-${job.period}`} className="relative">
                <span className="absolute -left-[1.45rem] mt-1.5 h-3 w-3 rounded-full border border-neon-green bg-terminal-bg" />
                <p className="text-xs uppercase tracking-widest text-neon-green">{job.period}</p>
                <h3 className="text-lg font-semibold text-terminal-text">{job.title}</h3>
                <p className="text-sm text-neon-blue">{job.company}</p>
                <p className="mt-1 text-sm text-terminal-muted">{job.description}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* EDUCATION */}
        <section id="education" className="scroll-mt-24 space-y-6">
          <header className="space-y-2">
            <p className="text-sm uppercase tracking-widest text-neon-blue">Academic Background</p>
            <h2 className="text-3xl font-bold">Education</h2>
          </header>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {education.map((edu) => (
              <article key={edu.degree} className="terminal-panel rounded-xl border border-terminal-border bg-terminal-card/70 p-5">
                <p className="text-lg font-semibold text-terminal-text">{edu.degree}</p>
                <p className="mt-1 text-sm text-neon-blue">{edu.school}</p>
                <p className="mt-1 text-xs text-terminal-muted">{edu.year}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SECURITY LABS */}
        <CybersecurityDashboard stats={tryHackMeStats} />

        {/* CERTIFICATIONS */}
        <section id="certifications" className="scroll-mt-24 space-y-6">
          <header className="space-y-2">
            <p className="text-sm uppercase tracking-widest text-neon-green">Credentials</p>
            <h2 className="text-3xl font-bold">Certifications</h2>
          </header>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((certification) => (
              <article
                key={certification.name}
                className="terminal-panel rounded-xl border border-terminal-border bg-terminal-card/70 p-5"
              >
                <p className="text-lg font-semibold text-terminal-text">{certification.name}</p>
                <p className="mt-2 text-sm text-terminal-muted">{certification.issuer}</p>
                <p className="text-sm text-neon-blue">Issued {certification.year}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 space-y-6">
          <header className="space-y-2">
            <p className="text-sm uppercase tracking-widest text-neon-green">Get In Touch</p>
            <h2 className="text-3xl font-bold">Contact</h2>
          </header>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-terminal-muted">
                Have a project in mind or want to discuss opportunities? I&apos;d love to hear from you.
              </p>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="mailto:gumcizario@gmail.com" className="flex items-center gap-2 text-terminal-muted transition hover:text-neon-green">
                    <span className="text-neon-green">→</span> gumcizario@gmail.com
                  </a>
                </li>
                {socialLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-terminal-muted transition hover:text-neon-green">
                      <span className="text-neon-green">→</span> {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-xs uppercase tracking-widest text-terminal-muted" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-lg border border-terminal-border bg-terminal-card px-4 py-2.5 text-sm text-terminal-text placeholder-terminal-muted/50 focus:border-neon-blue focus:outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-widest text-terminal-muted" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-terminal-border bg-terminal-card px-4 py-2.5 text-sm text-terminal-text placeholder-terminal-muted/50 focus:border-neon-blue focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs uppercase tracking-widest text-terminal-muted" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-terminal-border bg-terminal-card px-4 py-2.5 text-sm text-terminal-text placeholder-terminal-muted/50 focus:border-neon-blue focus:outline-none"
                  placeholder="Tell me about your project…"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-neon-green px-5 py-2.5 text-sm font-semibold text-terminal-bg transition hover:bg-neon-green/80"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-terminal-border/80 py-8 text-center text-sm text-terminal-muted">
        <p>© 2026 Cizario Gum · Built with React + Vite · Deployed on GitHub Pages</p>
        <p className="mt-1">
          <a href="https://binaryheros.com" target="_blank" rel="noreferrer" className="transition hover:text-neon-green">
            binaryheros.com
          </a>
        </p>
      </footer>
    </div>
  )
}

export default App

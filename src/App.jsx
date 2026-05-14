import CybersecurityDashboard from './components/CybersecurityDashboard'
import ProjectCard from './components/ProjectCard'
import { certifications } from './data/certifications'
import { projects } from './data/projects'
import { tryHackMeStats } from './data/rooms'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Robotics Projects', href: '#projects' },
  { label: 'Security Labs', href: '#security-labs' },
  { label: 'Certifications', href: '#certifications' },
]

function App() {
  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-text">
      <header className="sticky top-0 z-10 border-b border-terminal-border/80 bg-terminal-bg/90 backdrop-blur">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-neon-green">cyber-noir portfolio</p>
          <ul className="flex flex-wrap justify-end gap-4 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-neon-blue" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-16 pt-14">
        <section id="home" className="scroll-mt-24 space-y-6">
          <p className="text-sm uppercase tracking-widest text-neon-green">Freelance Robotics + Offensive Security</p>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Robotics Freelancing and Cybersecurity Pentesting for teams that ship secure automation.
          </h1>
          <p className="max-w-2xl text-terminal-muted">
            I design resilient robotic workflows, execute practical penetration testing, and build the tools that connect
            both worlds.
          </p>
        </section>

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

        <CybersecurityDashboard stats={tryHackMeStats} />

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
      </main>
    </div>
  )
}

export default App

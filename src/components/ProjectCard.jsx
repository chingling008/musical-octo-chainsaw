import SkillBadge from './SkillBadge'

function ProjectCard({ project }) {
  return (
    <article className="terminal-panel flex h-full flex-col justify-between gap-4 rounded-xl border border-neon-blue/30 p-5">
      <div className="space-y-3">
        <h3 className="text-xl font-semibold text-terminal-text">{project.title}</h3>
        <p className="text-sm text-terminal-muted">{project.summary}</p>
      </div>
      <div className="space-y-3">
        <ul className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <li key={tech}>
              <SkillBadge label={tech} />
            </li>
          ))}
        </ul>
        <a
          className="inline-flex items-center gap-2 text-sm text-neon-blue transition hover:text-neon-green"
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
        >
          View on GitHub <span aria-hidden="true">→</span>
        </a>
      </div>
    </article>
  )
}

export default ProjectCard

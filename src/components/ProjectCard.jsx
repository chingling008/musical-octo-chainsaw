import SkillBadge from './SkillBadge'

function ProjectCard({ project }) {
  return (
    <article className="terminal-panel flex h-full flex-col justify-between gap-4 rounded-xl border border-neon-blue/30 p-5">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold text-terminal-text">{project.title}</h3>
          <span className="shrink-0 rounded-full border border-neon-blue/40 px-2 py-1 text-xs text-neon-blue">
            {project.status}
          </span>
        </div>
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
        {project.projectUrl && (
          <a
            className="inline-flex items-center gap-2 text-sm text-neon-blue transition hover:text-neon-green"
            href={project.projectUrl}
            target="_blank"
            rel="noreferrer"
          >
            {project.linkLabel} <span aria-hidden="true">→</span>
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard

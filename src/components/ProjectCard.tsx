import type { Project } from "@/types/project";

const accents: Record<Project["accent"], string> = {
  pink: "bg-[#fbdad6]",
  blue: "bg-[#dce5f1]",
  green: "bg-[#e4eee4]",
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group [perspective:1000px]">
      <div className="grid h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)]">
        {/* Front */}
        <div className="flex min-h-[400px] flex-col gap-4 rounded-2xl border border-line bg-card p-6 [backface-visibility:hidden] [grid-area:1/1] dark:bg-card/30">
          <div className={`h-32 rounded-xl ${accents[project.accent]}`} />
          <h3 className="text-xl font-medium text-heading">{project.title}</h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-chip px-4 py-1 text-sm text-chip-ink"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Back */}
        <div className="flex min-h-[400px] flex-col justify-center gap-4 rounded-2xl bg-[#0f2a5c] p-6 text-white [backface-visibility:hidden] [grid-area:1/1] [transform:rotateY(180deg)]">
          <h3 className="text-xl font-medium">{project.title}</h3>
          <p className="text-white/80">{project.description}</p>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            className="self-start rounded-lg bg-coral px-6 py-2.5 text-white"
          >
            View code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;

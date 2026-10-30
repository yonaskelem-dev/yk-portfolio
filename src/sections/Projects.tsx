import ProjectCard from "@/components/ProjectCard";
import SectionTitle from "@/components/SectionTitle";
import { projects } from "@/data/projects";

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-[76rem] px-3 py-6">
      <div className="px-3 pb-6 pt-10">
        <SectionTitle>Selected projects</SectionTitle>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;

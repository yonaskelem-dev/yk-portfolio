import { useState, type MouseEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import type { Project } from "@/types/project";

const accents: Record<Project["accent"], string> = {
  pink: "bg-[#fbdad6]",
  blue: "bg-[#dce5f1]",
  green: "bg-[#e4eee4]",
};

function ProjectCard({ project }: { project: Project }) {
  const reduce = useReducedMotion();
  const [flipped, setFlipped] = useState(false);

  // Mouse position inside the card: 0 = left/top, 1 = right/bottom
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // The tilt, smoothed with a spring
  const rotateX = useSpring(useTransform(y, [0, 1], [6, -6]), {
    stiffness: 200,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [0, 1], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  });

  // The light that follows the mouse
  const lightX = useTransform(x, [0, 1], ["0%", "100%"]);
  const lightY = useTransform(y, [0, 1], ["0%", "100%"]);
  const light = useMotionTemplate`radial-gradient(240px circle at ${lightX} ${lightY}, rgba(255,255,255,0.16), transparent 70%)`;

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    if (reduce || !window.matchMedia("(hover: hover)").matches) return;
    const box = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - box.left) / box.width);
    y.set((e.clientY - box.top) / box.height);
  };

  const handleLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  // On phones there is no hover, so a tap flips the card
  const handleTap = () => {
    if (window.matchMedia("(hover: hover)").matches) return;
    setFlipped(!flipped);
  };

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={handleTap}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative [perspective:1000px]"
    >
      <div
        className={`grid h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] group-focus-within:[transform:rotateY(180deg)] ${
          flipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* Front */}
        <div className="flex flex-col gap-4 rounded-2xl border border-line bg-card p-6 [backface-visibility:hidden] [grid-area:1/1] dark:bg-card/30">
          {project.image ?
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className="h-40 w-full rounded-xl object-cover object-top"
            />
          : <div className={`h-40 rounded-xl ${accents[project.accent]}`} />}
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
        <div className="flex flex-col justify-center gap-4 rounded-2xl bg-[#0f2a5c] p-6 text-white [backface-visibility:hidden] [grid-area:1/1] [transform:rotateY(180deg)]">
          <h3 className="text-xl font-medium">{project.title}</h3>
          <p className="text-white/80">{project.description}</p>
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="self-start rounded-lg bg-coral px-6 py-2.5 text-white"
          >
            View code
          </a>
        </div>
      </div>

      {/* The light, on top of whichever side is showing */}
      <motion.div
        style={{ background: light }}
        className="pointer-events-none absolute inset-0 z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
    </motion.div>
  );
}

export default ProjectCard;

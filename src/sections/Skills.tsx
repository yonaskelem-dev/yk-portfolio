import { skills } from "@/data/skills";

function Skills() {
  const list = [...skills, ...skills];

  return (
    <section className="mx-auto max-w-[76rem] px-3 py-8">
      <div className="overflow-hidden rounded-2xl border border-line dark:bg-card/30 py-8">
        <div className="[mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            {list.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <span
                  key={index}
                  className="mr-3 flex items-center gap-2 whitespace-nowrap rounded-full bg-chip px-5 py-2 text-chip-ink"
                >
                  <Icon size={20} color={skill.color} />
                  {skill.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

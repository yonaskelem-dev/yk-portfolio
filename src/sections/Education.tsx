import { useRef } from "react";
import { motion, useScroll } from "motion/react";
import SectionTitle from "@/components/SectionTitle";
import { education } from "@/data/education";

function Education() {
  const listRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 80%", "end 60%"],
  });

  return (
    <section id="education" className="mx-auto max-w-[76rem] px-3 py-6">
      <div className="rounded-3xl border border-line bg-card p-8 dark:bg-card/30 md:p-12">
        <SectionTitle>Education and training</SectionTitle>

        <div ref={listRef} className="relative mt-8">
          <div className="absolute left-0 top-0 h-full w-0.5 bg-coral/20" />
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="absolute left-0 top-0 h-full w-0.5 origin-top bg-coral"
          />

          <ol>
            {education.map((item) => (
              <li key={item.id} className="relative pb-8 pl-8 last:pb-0">
                <span className="absolute -left-[7px] top-1.5 h-4 w-4 rounded-full bg-coral" />
                <p className="text-sm text-blue-600">{item.period}</p>
                <h3 className="text-lg font-medium text-heading">
                  {item.title}
                </h3>
                <p className="text-muted">{item.place}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Education;

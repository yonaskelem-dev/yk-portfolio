import SectionTitle from "@/components/SectionTitle";
import { education } from "@/data/education";

function Education() {
  return (
    <section id="education" className="mx-auto max-w-[90rem] px-3 py-6">
      <div className="rounded-3xl border border-line bg-card p-8 dark:bg-card/30 md:p-12">
        <SectionTitle>Education and training</SectionTitle>

        <ol className="mt-8 border-l-2 border-coral/40">
          {education.map((item) => (
            <li key={item.id} className="relative pb-8 pl-8 last:pb-0">
              <span className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full bg-coral" />
              <p className="text-sm text-blue-500">{item.period}</p>
              <h3 className="text-lg font-medium text-heading">{item.title}</h3>
              <p className="text-muted">{item.place}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Education;

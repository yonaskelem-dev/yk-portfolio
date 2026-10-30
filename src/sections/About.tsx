import SectionTitle from "@/components/SectionTitle";
import { profile } from "@/data/profile";
import { services } from "@/data/services";

function About() {
  return (
    <section id="about" className="mx-auto max-w-[85rem] px-3 py-6">
      <div className="rounded-3xl border border-line bg-page dark:bg-page/30 p-8 md:p-12">
        <SectionTitle>About me</SectionTitle>
        <p className="mt-4 max-w-3xl text-lg text-muted">{profile.about}</p>

        <h3 className="mt-10 text-xl font-medium text-heading">
          What I can build for you
        </h3>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-line bg-page p-6"
            >
              <div className="mb-4 h-1 w-10 rounded-full bg-coral" />
              <h4 className="text-lg font-medium text-heading">
                {service.title}
              </h4>
              <p className="mt-2 text-muted">{service.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;

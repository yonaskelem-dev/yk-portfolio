import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { profile } from "@/data/profile";
import RevealText from "@/components/RevealText";
import Magnetic from "@/components/Magnetic";

function Hero() {
  return (
    <section id="home" className="mx-auto max-w-[85rem] px-3 pt-6 pb-6">
      <div className="relative overflow-hidden rounded-3xl border border-line dark:bg-card/30 md:flex md:min-h-[calc(100svh-8rem)] md:items-center">
        <img
          src="/my_image.jpg"
          alt={`Portrait of ${profile.name}`}
          className="z-0 h-96 w-full object-cover object-[center_15%] [mask-image:linear-gradient(to_bottom,black_50%,transparent)] md:absolute md:inset-y-0 md:right-0 md:h-full md:w-2/5 md:[mask-image:linear-gradient(to_right,transparent,black_35%)]"
        />

        <div className="relative z-10 flex w-full gap-8 px-6 py-16 md:px-12">
          <div className="hidden flex-col gap-5 pt-2 text-muted sm:flex">
            <a
              href={profile.github}
              aria-label="GitHub"
              className="hover:text-coral"
            >
              <GithubIcon />
            </a>
            <a
              href={profile.linkedin}
              aria-label="LinkedIn"
              className="hover:text-coral"
            >
              <LinkedinIcon />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="hover:text-coral"
            >
              <Mail size={22} />
            </a>
          </div>

          <div>
            <h1 className="font-display text-5xl font-bold text-heading xl:text-6xl">
              <RevealText text={`I’m ${profile.name}`} delay={2.2} />
              <span className="block text-coral">
                <RevealText text={`a ${profile.role}`} delay={2.6} />
              </span>
            </h1>

            <p className="mt-5 max-w-md text-lg text-ink">{profile.tagline}</p>

            <div className="mt-8 flex gap-4">
              <Magnetic>
                <a
                  href={profile.cvUrl}
                  className="block rounded-lg bg-coral px-7 py-3 text-white"
                >
                  Download CV
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href="#projects"
                  className="block rounded-lg border-2 border-heading px-7 py-3 text-heading"
                >
                  View projects
                </a>
              </Magnetic>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

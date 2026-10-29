import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/BrandIcons";
import { navLinks } from "@/data/navLinks";
import { profile } from "@/data/profile";

const socialStyle =
  "grid h-12 w-12 place-items-center rounded-full border border-white/25 transition hover:bg-white/10";

function Footer() {
  return (
    <footer className="mx-auto w-full px-3 pb-6 pt-6">
      <div className="bg-[#0f2a5c] px-8 py-10 text-[#e6ecf8] md:px-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition hover:text-coral">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex gap-3">
            <a
              href={profile.github}
              aria-label="GitHub"
              className={socialStyle}
            >
              <GithubIcon />
            </a>
            <a
              href={profile.linkedin}
              aria-label="LinkedIn"
              className={socialStyle}
            >
              <LinkedinIcon />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className={socialStyle}
            >
              <Mail size={22} />
            </a>
          </div>
        </div>

        <p className="mt-8 border-t border-white/15 pt-6 text-sm text-white/60">
          © {new Date().getFullYear()} {profile.name}. Built with React,
          TypeScript, and Tailwind.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

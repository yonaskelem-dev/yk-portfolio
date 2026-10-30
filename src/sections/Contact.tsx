import { Mail, MapPin } from "lucide-react";
import { GithubIcon } from "@/components/BrandIcons";
import ContactForm from "@/components/ContactForm";
import SectionTitle from "@/components/SectionTitle";
import { profile } from "@/data/profile";

const details = [
  {
    icon: <Mail size={20} />,
    text: profile.email,
    href: `mailto:${profile.email}`,
  },
  { icon: <MapPin size={20} />, text: profile.location, href: "" },
  {
    icon: <GithubIcon size={20} />,
    text: "github.com/yonaskelem-dev",
    href: profile.github,
  },
];

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-[80rem] px-3 py-6">
      <div className="grid gap-10 px-3 py-10 md:grid-cols-2">
        <div>
          <SectionTitle>Have a project or question?</SectionTitle>
          <p className="mt-4 max-w-md text-lg text-muted">
            Send me a message and I’ll get back to you soon. I’m open to junior
            roles, internships, and freelance work.
          </p>

          <ul className="mt-8 space-y-4">
            {details.map((item) => (
              <li key={item.text} className="flex items-center gap-4 text-ink">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-coral/15 text-coral">
                  {item.icon}
                </span>
                {item.href ?
                  <a href={item.href} className="hover:text-coral">
                    {item.text}
                  </a>
                : item.text}
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "@/components/Logo";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinks } from "@/data/navLinks";
import { useScrolled } from "@/hooks/useScrolled";

function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled(40);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-white/10 transition-all duration-300 ${
        scrolled ? "bg-[#0f2a5c]/85 backdrop-blur-md" : "bg-[#0f2a5c]"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[76rem] items-center justify-between px-5 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <Logo />

        <ul className="hidden gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white/85 transition hover:text-coral"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white md:hidden"
          >
            {open ?
              <X size={22} />
            : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-white/15 px-5 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;

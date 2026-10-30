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
      className={`sticky top-0 z-40 border-b border-line transition-all duration-300 ${
        scrolled ? "bg-nav/80 backdrop-blur-md" : "bg-nav"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[85rem] items-center justify-between px-5 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <Logo />

        <ul className="hidden gap-10 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-ink transition hover:text-coral"
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
            className="grid h-12 w-12 place-items-center rounded-full border border-line bg-card text-heading md:hidden"
          >
            {open ?
              <X size={22} />
            : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-line px-5 pb-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-ink"
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

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="grid h-12 w-12 place-items-center rounded-full border border-white/25 text-white transition hover:rotate-12"
    >
      {theme === "dark" ?
        <Sun size={22} />
      : <Moon size={22} />}
    </button>
  );
}

export default ThemeToggle;

import { ArrowUp } from "lucide-react";
import { useScrolled } from "@/hooks/useScrolled";

function BackToTop() {
  const visible = useScrolled();

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-30 grid h-12 w-12 place-items-center rounded-full bg-coral text-white shadow-lg transition-all duration-300 ${
        visible ?
          "translate-y-0 opacity-100"
        : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={22} />
    </button>
  );
}

export default BackToTop;

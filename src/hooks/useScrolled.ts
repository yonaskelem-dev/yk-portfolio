import { useEffect, useState } from "react";

export function useScrolled(distance = 600) {
  const [scrolled, setScrolled] = useState(() => window.scrollY > distance);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > distance);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [distance]);

  return scrolled;
}

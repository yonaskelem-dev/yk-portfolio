import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

function Cursor() {
  const [enabled] = useState(
    () =>
      window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [big, setBig] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const smoothX = useSpring(x, { stiffness: 500, damping: 40 });
  const smoothY = useSpring(y, { stiffness: 500, damping: 40 });

  useEffect(() => {
    if (!enabled) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: MouseEvent) => {
      const target = e.target as Element;
      setBig(Boolean(target.closest("a, button, input, textarea")));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      style={{ x: smoothX, y: smoothY }}
      className="pointer-events-none fixed left-0 top-0 z-[70]"
    >
      <motion.div
        animate={{
          width: big ? 64 : 32,
          height: big ? 64 : 32,
          backgroundColor: big ? "rgba(240,95,87,0.15)" : "rgba(240,95,87,0)",
        }}
        transition={{ duration: 0.25 }}
        className="-translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-coral"
      />
    </motion.div>
  );
}

export default Cursor;

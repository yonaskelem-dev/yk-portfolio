import { useRef, type MouseEvent, type ReactNode } from "react";
import { motion, useReducedMotion, useSpring } from "motion/react";

function Magnetic({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const x = useSpring(0, { stiffness: 300, damping: 20 });
  const y = useSpring(0, { stiffness: 300, damping: 20 });

  const handleMove = (e: MouseEvent) => {
    const box = ref.current?.getBoundingClientRect();
    if (!box || reduce) return;
    x.set((e.clientX - (box.left + box.width / 2)) * 0.3);
    y.set((e.clientY - (box.top + box.height / 2)) * 0.3);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="inline-block"
    >
      <motion.div style={{ x, y }}>{children}</motion.div>
    </div>
  );
}

export default Magnetic;

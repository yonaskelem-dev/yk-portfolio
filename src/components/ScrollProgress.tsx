import { motion, useScroll } from "motion/react";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      style={{ scaleX: scrollYProgress }}
      className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-coral"
    />
  );
}

export default ScrollProgress;

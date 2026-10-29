import { motion } from "motion/react";

const INFINITY_PATH =
  "M50 25 C40 5 5 5 5 25 C5 45 40 45 50 25 C60 5 95 5 95 25 C95 45 60 45 50 25 Z";

function Loader() {
  return (
    <motion.div
      exit={{ y: "-100%", transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-50 grid place-items-center bg-[#0f2a5c]"
    >
      <svg
        viewBox="0 0 100 50"
        className="w-32"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        role="img"
        aria-label="Loading"
      >
        <path d={INFINITY_PATH} stroke="white" strokeOpacity="0.15" />
        <path
          d={INFINITY_PATH}
          pathLength="1"
          stroke="white"
          strokeDasharray="0.25 0.75"
          className="animate-trace"
        />
      </svg>
    </motion.div>
  );
}

export default Loader;

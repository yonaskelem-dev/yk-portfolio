import { motion } from "motion/react";

type RevealTextProps = {
  text: string;
  delay?: number;
};

function RevealText({ text, delay = 0 }: RevealTextProps) {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <span
          key={index}
          className="mr-[0.25em] inline-block overflow-hidden pb-1 align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
              delay: delay + index * 0.1,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </>
  );
}

export default RevealText;

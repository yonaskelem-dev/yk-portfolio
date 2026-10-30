import { useEffect, useState } from "react";

export function useTypewriter(words: string[]) {
  const [wordIndex, setWordIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex];
    const finished = charCount === word.length;

    const timer = setTimeout(
      () => {
        if (!deleting && finished) {
          setDeleting(true);
        } else if (deleting && charCount === 0) {
          setDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        } else {
          setCharCount(deleting ? charCount - 1 : charCount + 1);
        }
      },
      !deleting && finished ? 1500
      : deleting ? 40
      : 90,
    );

    return () => clearTimeout(timer);
  }, [charCount, deleting, wordIndex, words]);

  return words[wordIndex].slice(0, charCount);
}

import { useEffect, useState } from "react";
import { AnimatePresence, MotionConfig } from "motion/react";
import "lenis/dist/lenis.css";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import BackToTop from "@/components/BackToTop";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import ScrollProgress from "@/components/ScrollProgress";
import Starfield from "@/components/Starfield";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Education from "@/sections/Education";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import Skills from "@/sections/Skills";
import Cursor from "@/components/Cursor";

function App() {
  useSmoothScroll();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <Starfield />
      <Cursor />  
      <ScrollProgress />
      <BackToTop />
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <Reveal>
          <Skills />
        </Reveal>
        <Reveal>
          <About />
        </Reveal>
        <Reveal>
          <Projects />
        </Reveal>
        <Reveal>
          <Education />
        </Reveal>
        <Reveal>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </MotionConfig>
  );
}

export default App;

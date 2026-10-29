import { useEffect, useState } from "react";
import { AnimatePresence } from "motion/react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Skills from "@/sections/Skills";
import About from "./sections/About";
import Starfield from "@/components/Starfield";
import Projects from "@/sections/Projects";
import Education from "@/sections/Education";
import Contact from "@/sections/Contact";
import BackToTop from "@/components/BackToTop";
import Footer from "@/sections/Footer";
import ScrollProgress from "@/components/ScrollProgress";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      <Navbar />
      <main>
        <Hero />
        <Skills />
        <About />
        <Starfield />
        <ScrollProgress />
        <BackToTop />
        <AnimatePresence>{loading && <Loader />}</AnimatePresence>
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

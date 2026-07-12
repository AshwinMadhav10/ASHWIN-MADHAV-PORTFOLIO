import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Education from "./components/Education.jsx";
import Certifications from "./components/Certifications.jsx";
import Leadership from "./components/Leadership.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import BackgroundEffects from "./components/BackgroundEffects.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import PageLoader from "./components/PageLoader.jsx";

const sectionIds = [
  "home",
  "about",
  "experience",
  "projects",
  "skills",
  "certifications",
  "contact",
];

function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const section = document.getElementById(id);
      if (!section) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
      );

      observer.observe(section);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-canvas text-ink selection:bg-cobalt selection:text-paper">
      <BackgroundEffects />
      <AnimatePresence>{loading && <PageLoader />}</AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 0.45 }}
      >
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Certifications />
          <Leadership />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </motion.div>
    </div>
  );
}

export default App;

import { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import useTheme from "./hooks/useTheme";
import NavBar from "./components/navBar";
import HeroSection from "./sections/hero-section";
import StackSection from "./sections/stack-section";
import AboutMe from "./sections/about-section";
import Contact from "./sections/contact";
import MyWorkSection from "./sections/myWork-setion";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ReactLenis } from "lenis/react";
import { useLayoutEffect } from "react";
function App() {
  const [theme, toggleTheme] = useTheme();
  const [activeSection, setActiveSection] = useState("");

  const lenisRef = useRef();

  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const myWorkRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const heroInView = useInView(heroRef, { margin: "-70% 0px -100% 0px" });

  const sections = [
    { id: "hero", ref: heroRef },
    { id: "about", ref: aboutRef },
    { id: "myWork", ref: myWorkRef },
    { id: "skills", ref: skillsRef },
    { id: "contact", ref: contactRef },
  ];

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["end 90%", "end 70%"],
  });

  const marginTop = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
  const scale = useTransform(scrollYProgress, [0.2, 1], [1, 0]);

   const { scrollYProgress:aboutProgress } = useScroll({
    target: aboutRef,
    offset: ["start start", "end 80%"],
  });

  const scale2 = useTransform(aboutProgress, [0, 1], [0, 1]);

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time);
    }

    const rafId = requestAnimationFrame(update);

    return () => cancelAnimationFrame(rafId);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) setActiveSection(visibleSection.target.id);
      },
      {
        threshold: [0.5],
      }
    );

    sections.forEach((section) => {
      if (section.ref.current) observer.observe(section.ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (ref, offset) => {
    if (!ref.current || !lenisRef.current) return;
    lenisRef.current.lenis.scrollTo(ref.current, {
      offset: offset ?? -100,
      duration: 2,
    });
    console.log(ref.current);
  };

  return (
    <>
      <ReactLenis
        ref={lenisRef}
        root
        options={{ smoothWheel: true, duration: 1.8 }}
      >
        <div
          className={`pt-4 px-4 fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
            !heroInView ? "translate-y-0" : "-translate-y-200"
          }`}
        >
          <NavBar
            scrollToSection={scrollToSection}
            contactRef={contactRef}
            aboutRef={aboutRef}
            myWorkRef={myWorkRef}
            skillsRef={skillsRef}
            activeSection={activeSection}
          />
        </div>

        <motion.div id="hero" ref={heroRef} style={{ scale }}>
          <HeroSection />
        </motion.div>

        <motion.div
          style={{ marginTop }}
          className=" relative flex flex-col "
          ref={aboutRef}
          id="about"
        >
          <AboutMe />
          <motion.div
            className="px-6 mt-auto  z-10 pt-[40vh]  "
            style={{ scale:scale2, transformOrigin:"bottom left" }}
          >
            <div className=" bg-[linear-gradient(90deg,#474bff_0%,#cadc3f_50%,#bc48ff_100%)] h-1 rounded-full " />
          </motion.div>
        </motion.div>
        <div ref={myWorkRef} id="myWork" className=" min-h-[100vh] ">
          <MyWorkSection />
        </div>
        <div ref={skillsRef} id="skills">
          <StackSection />
        </div>
        <div ref={contactRef} id="contact">
          <Contact />
        </div>
      </ReactLenis>
    </>
  );
}

export default App;

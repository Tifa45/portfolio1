import { useScroll, useTransform, motion } from "motion/react";
import TechCard from "../components/tech-card";
import { techStack } from "../lib/constants";
import { useRef } from "react";

function StackSection() {
  const skillsInnerRef = useRef();

  const { scrollYProgress } = useScroll({
    target: skillsInnerRef,
    offset: ["start end", "start 10%"],
  });
  const xr = useTransform(scrollYProgress, [0.1, 1], ["-100vw", "0vw"]);
  const yr = useTransform(scrollYProgress, [0.1, 1], ["100vh", "0vh"]);

  const xr1 = useTransform(scrollYProgress, [0, 1], ["-100vw", "0vw"]);
  const yr1 = useTransform(scrollYProgress, [0, 1], ["-100vh", "0vh"]);

  const xl = useTransform(scrollYProgress, [0.1, 1], ["100vw", "0vw"]);
  const yl = useTransform(scrollYProgress, [0.1, 1], ["100vh", "0vh"]);

  const xl1 = useTransform(scrollYProgress, [0, 1], ["100vw", "0vw"]);
  const yl1 = useTransform(scrollYProgress, [0, 1], ["-100vh", "0vh"]);

  const yM = useTransform(scrollYProgress, [0.9, 1], [100, 0]);
  const opacityM = useTransform(scrollYProgress, [0.9, 1], [0, 1]);

  

  const animations = [
    { x:xr, y:yr },
    { x:xr1, y:yr1 },
    { y:yM, opacity:opacityM },
    { x:xl, y:yl },
    { x:xl1, y:yl1 },
  ];

  return (
    <div
      ref={skillsInnerRef}
      id="skills"
      className="p-6 lg:p-12 space-y-20 scroll-mt-8 min-h-[100vh]"
    >
      <div>
        <div className="section-h-wrapper">
          <h2>🎖 Skills 🎖</h2>
          <p>
            I work mainly with the MERN stack (MongoDB, Express, React, Node.js)
            and Tailwind CSS to build modern, responsive applications. <br />{" "}
            Alongside that, I’m confident with JavaScript, HTML, and CSS. <br />{" "}
            I enjoy enhancing user experience with tools like Framer Motion,
            GSAP, and Three.js.
            <br /> I also use shadcn/ui to create clean, accessible, and
            professional interfaces.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap gap-8 px-8 lg:px-4 justify-around items-around w-full ">
        {techStack.map((techItem, index) => (
          <motion.div className=" w-full sm:w-auto " style={{x:animations[index]?.x ||0, y:animations[index]?.y||0, opacity:animations[index]?.opacity||1}}>
          <TechCard key={techItem.title} techItem={techItem} index={index} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default StackSection;

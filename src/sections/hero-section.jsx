import { useEffect, useRef, useState } from "react";
import { defaulProps, words, wordsVars } from "../lib/constants";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import RippleGrid from "../components/RippleGrid";
import useTheme from "../hooks/useTheme";

function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [thetheme, theme, toggleTheme] = useTheme();
  const opc = thetheme === "dark" ? 1 : 0.1;

  const heroInnerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroInnerRef,
    offset: ["start -10%", "end 80%"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
  const y1 = useTransform(
    scrollYProgress,
    [0, 0.1, 1],
    ["0vh", "0vh", "-100vh"]
  );
  const y2 = useTransform(
    scrollYProgress,
    [0, 0.15, 1],
    ["0vh", "0vh", "-100vh"]
  );
  const y3 = useTransform(
    scrollYProgress,
    [0, 0.2, 1],
    ["0vh", "0vh", "-100vh"]
  );

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((curr) => (curr + 1) % words.length),
      2000
    );

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      ref={heroInnerRef}
      id="hero"
      className="px-4 py-8 h-[100vh] grid place-items-center relative "
    >
      <div className=" absolute top-[50%] left-[50%] -z-10 translate-x-[-50%] translate-y-[-50%]  w-full h-[90%] overflow-hidden grid place-items-center ">
        <RippleGrid
          enableRainbow={false}
          gridColor="#5227ff"
          rippleIntensity={0.01}
          gridSize={20}
          gridThickness={15}
          mouseInteraction={false}
          mouseInteractionRadius={1.2}
          opacity={opc}
          fadeDistance={1.5}
        />
      </div>
      <div>
        <motion.div className="text-center">
          <motion.h1 style={{ y }} className="text-5xl! pb-4">
            Turning Your Ideas Into{" "}
          </motion.h1>
          <motion.div
            className="overflow-hidden h-[4rem]  relative isolate"
            style={{ y: y1 }}
          >
            <AnimatePresence mode="popLayout">
              <motion.h1 key={currentIndex} {...defaulProps}>
                <motion.span
                  variants={wordsVars}
                  className="w-full items-center justify-center flex gap-2"
                >
                  <span className="bg-secondaryC h-14 w-14 rounded-full p-2">
                    <img
                      src={words[currentIndex].src}
                      alt=""
                      className="object-fill"
                    />
                  </span>
                  <span> {words[currentIndex].word} </span>
                </motion.span>
              </motion.h1>
            </AnimatePresence>
          </motion.div>
          <motion.h1 style={{ y: y2 }}>Digital Products That Work</motion.h1>
        </motion.div>

        <div className="p-4">
          <motion.p className="text-lg font-semibold" style={{ y: y3 }}>
            I’m Mostafa Yousry, a full stack developer passionate about crafting
            web apps that don’t just look good — they work beautifully.
          </motion.p>
        </div>

        <div className="flex">
          <a href="#contact"></a>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;

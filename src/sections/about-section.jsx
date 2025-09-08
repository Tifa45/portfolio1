import { useRef } from "react";
import { aboutVars, aboutVars2, features, vpProps2 } from "../lib/constants";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

function AboutCard({ feature }) {
  return (
    <div className="py-8 px-8 bg-cardC rounded-lg shadow-myShadow2 ">
      <div className="space-y-3">
        <div className=" size-12 rounded-full overflow-hidden">
          <img className="object-fill" src={feature.src} alt="" />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-3">{feature.title}</h2>
          <p className="text-base font-semibold"> {feature.desc} </p>
        </div>
      </div>
    </div>
  );
}

function AboutMe() {
  const aboutRef = useRef(null);
  const inView = useInView(aboutRef, { once: false });

  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ["start end", "start start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.2], ["0vh", "-90vh"]);

  return (
    <motion.div
      ref={aboutRef}
      id="about"
      className="p-6 lg:p-12 space-y-20 bg-primaryC sticky top-0 "
      {...vpProps2}
    >
      <div>
        <div className="section-h-wrapper">
          <h2>🤝 About Me</h2>
          <p>
            With a clear vision and a well-structured plan, I believe we can
            achieve your goals in the way you imagine 👌 — or even better 😍.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-6 md:grid-cols-12 gap-4  ">
        <div className="col-span-1 sm:col-span-2 md:col-span-3 xl:col-span-2 flex">
          <motion.div variants={aboutVars2}>
            <h2 className=" text-3xl lg:text-4xl xl:text-5xl font-bold">
              What You
            </h2>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
              Can Expect
            </h2>
          </motion.div>
        </div>
        <div className="col-span-1 sm:col-span-4 md:col-span-9 xl:col-span-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature) => (
            <motion.div key={feature.title} variants={aboutVars}>
              <AboutCard key={feature.title} feature={feature} />
            </motion.div>
          ))}
        </div>
      </div>
      
    </motion.div>
  );
}

export default AboutMe;

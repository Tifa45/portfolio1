import { Link } from "react-router-dom";
import MyButton from "../components/myButton";
import { motion } from "framer-motion";
import { aboutVars, vpProps3, worksVars } from "../lib/constants";

function MyWorkSection() {
  return (
    <motion.div
      {...vpProps3}
      id="myWork"
      className="p-6 lg:p-12 space-y-20  scroll-mt-8 min-h-[100vh]  "
    >
      <div className="section-h-wrapper">
        <h2>💎 My Work</h2>
        <p>
          Here’s a selection of projects that showcase what I can deliver — from
          clean, simple websites to fully featured, complex applications 🤖.
        </p>
      </div>
      <div className="flex flex-col-reverse lg:flex-row w-full gap-4 ">
        <div className=" w-full lg:w-[80%] flex flex-col 2xl:flex-row xl:items-start gap-6">
          <motion.div
            variants={worksVars}
            className=" max-w-4xl bg-cardC rounded-lg overflow-hidden shadow-myShadow2"
          >
            <div className="border-b ">
              <img
                className="object-contain h-full w-full"
                src="/scene.jpg"
                alt=""
              />
            </div>
            <div className="p-4">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
                Sceene
              </h2>
              <p>
                Movie & TV show library with multi-role access, where users can
                rate, comment, and add titles to their favorites.
              </p>
              <p>
                Moderators manage content by adding and editing shows, while
                Admins have full control
              </p>
              <p>
                Admins can reset user passwords, remove abusive comments, and
                monitor overall user activity.
              </p>
            </div>
            <div className="flex justify-center p-6">
              <Link to="/sceene-details" target="new" rel="noopener noreferrer">
                <MyButton text="See more" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            variants={worksVars}
            className=" flex flex-col md:grid md:grid-cols-3 gap-4 2xl:grid-cols-1 max-w-4xl  "
          >
            <div className="h-90 bg-cardC rounded-lg overflow-hidden flex flex-col shadow-myShadow2 ">
              <div className="bg-gray-800 min-h-35 h-35 p-4 border-b flex justify-center ">
                <div className="border-black border-3 rounded-lg h-full">
                  <img
                    className=" object-contain w-full h-full"
                    src="fylo.JPG"
                    alt=""
                  />
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Fylo</h2>
                <p>
                  Simple yet elegant landing page with 'Call to action form"
                </p>
              </div>
              <div className="flex justify-center mt-auto p-4">
                <Link
                  to="https://fylo-landig-page-challenge.vercel.app/"
                  target="new"
                  rel="noopener noreferrer"
                >
                  <MyButton text="Take a look" />
                </Link>
              </div>
            </div>
            <div className="h-90 bg-cardC rounded-lg overflow-hidden flex flex-col shadow-myShadow2 ">
              <div className="bg-[#0BAEB0] min-h-35 h-35 p-4 border-b flex justify-center ">
                <img
                  className=" object-contain scale-120 w-full "
                  src="shortly.png"
                  alt=""
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Shortly</h2>
                <p>Single page app that lets you shorten your long links</p>
              </div>
              <div className="flex justify-center mt-auto p-4">
                <Link
                  to="https://shortly-alpha-silk.vercel.app/"
                  target="new"
                  rel="noopener noreferrer"
                >
                  <MyButton text="Take a look" />
                </Link>
              </div>
            </div>
            <div className="h-90 bg-cardC rounded-lg overflow-hidden flex flex-col shadow-myShadow2 ">
              <div className="bg-blue-400 min-h-35 h-35 p-4 border-b flex justify-center ">
                <img
                  className=" object-contain scale-120 w-full "
                  src="where.png"
                  alt=""
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">Where in the world</h2>
                <p>Explore countries with fall back data.</p>
              </div>
              <div className="flex justify-center mt-auto p-4">
                <Link
                  to="https://where-in-the-world-liart.vercel.app/"
                  target="new"
                  rel="noopener noreferrer"
                >
                  <MyButton text="Take a look" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="w-full lg:w-[20%]  flex  ">
          <motion.div variants={aboutVars} className="pr-4 ">
            <h2 className=" text-3xl lg:text-4xl xl:text-5xl font-bold">
              Selected
            </h2>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
              Projects
            </h2>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default MyWorkSection;

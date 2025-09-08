import useTheme from "../hooks/useTheme";
import ContactForm from "../components/contact-form";
import MyButton from "../components/myButton";
import { motion } from "framer-motion";
import { sceeneImgVars, sceeneTxtVars, vpProps } from "../lib/constants";
import { ReactLenis } from "lenis/react";

function SceeneDetails() {
  const [theme, toggleTheme] = useTheme();
  return (
    <ReactLenis root options={{ smoothWheel: true, duration: 1.8 }}>
      <div className="p-12 md:px-18 flex flex-col gap-8 ">
        <div className="space-y-2 text-center mb-30">
          <h1 className="">SCeeNe Overview</h1>
          <p className="text-lg">
            ✨ Take a closer look at this project's features ✨
          </p>
        </div>
        <motion.div {...vpProps} className="featureWapper">
          <motion.div variants={sceeneTxtVars} className="textWrapper">
            <div>
              <h2 className="text-4xl xl:text-7xl font-bold "> Modern,</h2>
              <h2 className="text-4xl xl:text-7xl font-bold ">
                Professional Look
              </h2>
              <p>Elegant, modern UI that enhances the user experience.</p>
            </div>
          </motion.div>
          <motion.div variants={sceeneImgVars} className="imgWrapper">
            <div className="imgContainer">
              <img src="/overview.png" alt="" />
            </div>
          </motion.div>
        </motion.div>
        <motion.div {...vpProps} className="featureWapper2">
          <motion.div variants={sceeneImgVars} className="imgWrapper">
            <div className="imgContainer">
              <img src="/addedit.png" alt="" />
            </div>
          </motion.div>
          <motion.div variants={sceeneTxtVars} className="textWrapper">
            <div>
              <h2 className="text-4xl xl:text-7xl font-bold ">
                Moderators Can
              </h2>
              <h2 className="text-4xl xl:text-7xl font-bold ">
                Add & Edit Shows
              </h2>
              <p>
                With a reliable and straightforward backend, moderators can
                manage multiple shows quickly and easily.
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div {...vpProps} className="featureWapper">
          <motion.div variants={sceeneTxtVars} className="textWrapper">
            <div>
              <h2 className="text-4xl xl:text-7xl font-bold "> Admins Have</h2>
              <h2 className="text-4xl xl:text-7xl font-bold ">Full Control</h2>
              <p>
                Full administrative access allows control of user accounts and
                visibility into user activity.
              </p>
            </div>
          </motion.div>
          <motion.div variants={sceeneImgVars} className="imgWrapper">
            <div className="imgContainer">
              <img src="/panelfull.png" alt="" />
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          {...vpProps}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
        >
          <motion.div
            variants={sceeneImgVars}
            className=" bg-blue-500/10 p-6 border-dashed border-2 min-h-70 min-w-80 max-w-100 justify-self-center rounded-2xl text-center flex flex-col "
          >
            <div className="space-y-4">
              <h2 className="font-bold">Public Access</h2>
              <p>
                Test the app as a guest, or log in with any dummy email to see
                public user features
              </p>
            </div>
            <div className="h-full w-full flex items-center justify-center ">
              <a
                href="https://sceene.vercel.app"
                target="blank"
                rel="noopener noreferrer"
                className="w-full inline-block "
              >
                <MyButton text="Try" styles="w-full" />
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={sceeneImgVars}
            className="bg-pink-900/10 p-6 border-dashed border-2 min-w-70 max-w-100 justify-self-center rounded-2xl text-center flex flex-col "
          >
            <div className="space-y-4 mb-6">
              <h2 className="font-bold">Admin Access</h2>
              <p>
                Interested in exploring the admin and moderator features? Reach
                out to me for a session, or use this form.
              </p>
            </div>
            <div className="h-full flex items-center justify-center ">
              <ContactForm defaultMsg={"I wanna try 'Sceene' admin features"} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </ReactLenis>
  );
}

export default SceeneDetails;

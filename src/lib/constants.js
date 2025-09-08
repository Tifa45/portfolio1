import { title } from "motion/react-client";
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";

export const navLinks = [
  { title: "About", ref: "#about" },
  { title: "My Work", ref: "#myWork" },
  { title: "Skills", ref: "#skills" },
  { title: "Contact", ref: "#contact" },
];

export const features = [
  {
    title: "On-Time Delivery",
    desc: "Your deadlines matter — I plan carefully and deliver work when promised, without last-minute surprises.",
    src: "/ontime01.png",
  },
  {
    title: "Clear & Reliable Communication",
    desc: "I keep you updated throughout the process, making sure we’re always aligned on progress and expectations.",
    src: "/communication.png",
  },
  {
    title: "Quality First",
    desc: "I focus on clean, maintainable work that meets professional standards — done right the first time.",
    src: "/quality.png",
  },
  {
    title: "Attention to Details",
    desc: "Small things make a big difference. I double-check my work to ensure accuracy and polish in every project.",
    src: "/details.png",
  },
];

export const techStack = [
  { title: "React", icon: "/models/react.gltf" },
  { title: "NodeJs", icon: "/models/nodejs.gltf" },
  { title: "Express", icon: "/models/express.gltf" },
  { title: "Mongo", icon: "/models/mongo.gltf" },
  { title: "Tailwind", icon: "/models/tailwind.glb" },
];

export const words = [
  { word: "Modern", src: "/modern.png" },
  { word: "Reliable", src: "/reliable.png" },
  { word: "Functional", src: "/functional.png" },
  { word: "Fast", src: "/fast.png" },
  { word: "Scalable", src: "/scalable.png" },
];

export const defaulProps = {
  initial: "start",
  animate: "entry",
  exit: "out",
};

export const vpProps = {
  initial: "start",
  whileInView: "entry",
  viewport: { once: true, amount: 0.5 },
  transition: { staggerChildren: 0.2 },
};

export const vpProps2 = {
  initial: "start",
  whileInView: "entry",
  viewport: { once: false, amount: 0.3 },
  transition: { staggerChildren: 0.2 },
};
export const vpProps3 = {
  initial: "start",
  whileInView: "entry",
  viewport: { once: false, amount: 0.2, margin: "-300px 0px 0px 0px" },
  transition: { staggerChildren: 0.7 },
};

export const aboutVars = {
  start: {
    x: 200,
    opacity: 0,
  },
  entry: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};
export const aboutVars2 = {
  start: {
    y: -70,
    opacity: 0,
  },
  entry: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const wordsVars = {
  start: {
    y: 100,
  },
  entry: {
    y: 0,
    transition: { duration: 1, ease: [0.19, 1, 0.22, 1] },
  },
  out: {
    y: "-100%",
    transition: { duration: 0.3 },
  },
};

export const worksVars = {
  start: {
    opacity: 0,
  },
  entry: {
    opacity: [0, 1, 0.5, 1, 0.25, 1],
    transition: { duration: 1, times: [0, 0.2, 0.35, 0.6, 0.8, 1] },
  },
};

export const sceeneTxtVars = {
  start: {
    opacity: 0,
  },
  entry: {
    opacity: 1,
    transition: { duration: 0.5, ease: [0.55, 0, 1, 0.45] },
  },
};

export const sceeneImgVars = {
  start: {
    opacity: 0,
    x: 100,
  },
  entry: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0, 0.55, 0.45, 1] },
  },
};

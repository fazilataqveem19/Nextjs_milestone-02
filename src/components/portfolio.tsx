"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import project1 from "../assets/proj1.png";
import project2 from "../assets/proj2.png";
import project3 from "../assets/proj3.png";
import project4 from "../assets/proj4.png";

const projects = [
    {
        title: "Blog Website",
        desc: "A fully functional blog platform with user authentication using auth API, where users can create, edit and delete posts.",
        devstack: "Next.js, Tailwind CSS, Node.js",
        src: project1
    },

    {
      title: "Ecommerce Website",
      desc: "A basic e-commerce site featuring products, product details and a shopping cart. Integrate API routes for handling products data.",
      devstack: "Next.js, Tailwind CSS, Node.js",
      src: project2
  },

  {
    title: "Portfolio Website",
    desc: "A personal portfolio built with React.js to showcase projects, skills, and achievements.",
    devstack: "React, Tailwind CSS, Node.js",
    src: project3
},

  {
    title: "Resume Builder App",
    desc: "A web app using HTML, CSS, and TypeScript to create, edit, and download resumes with photo upload and unique shareable links.",
    devstack: "HTML5, CSS, TypeScript, Node.js",
    src: project4
},
]

const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">
      <h1 className="text-white text-6xl sm:text-6xl w-full text-center font-semibold my-12">
        Selected <span className="text-orange-400">Projects</span>
      </h1>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
      {projects.map((project, index) => (
  <motion.div
    key={index}
    initial={{ opacity: 0, y: 75 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: 0.25 }}
    className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "flex-col md:flex-row"}`}
  >
    <div className="space-y-6 md:space-y-4 max-w-[550px] px-4 md:px-0">
      <h2 className="text-5xl sm:text-7xl text-white/70">{`0${index + 1}`}</h2>
      <h2 className="text-3xl sm:text-4xl mb-4">{project.title}</h2>
      <p className="text-md sm:text-lg text-white/70 mb-4">{project.desc}</p>
      <p className={`text-lg sm:text-xl text-orange-400 font-semibold ${index === 0 || index === 2 ? 'mt-4' : ''} ${index % 2 === 0 ? 'mb-4' : ''}`}>
      {project.devstack}
      </p>
    </div>

    <div className="flex justify-center items-center px-4 md:px-0">
      <Image
        src={project.src}
        alt={project.title}
        className="h-[250px] sm:h-[350px] w-full sm:w-[500px] object-cover border rounded border-gray-600"
      />
    </div>
  </motion.div>
))}
      </div>
    </div>
  );
};

export default Portfolio;

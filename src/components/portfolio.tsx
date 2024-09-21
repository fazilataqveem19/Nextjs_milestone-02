"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import project1 from "../assets/proj1.png";
import project2 from "../assets/proj2.png";
import project3 from "../assets/proj3.png";

const projects = [
    {
        title: "Inventory Management System",
        desc: "A web app using HTML, CSS, and TypeScript to add and manage products in real-time.",
        src: project1
    },

    {
      title: "Resume Builder App",
      desc: " A web app using HTML, CSS, and TypeScript to create, edit, and download resumes with photo upload and unique shareable links.",
      src: project2
  },

  {
    title: "Portfolio Website",
    desc: "A personal portfolio built with React.js to showcase projects, skills, and achievements.",
    src: project3
},
]


const Portfolio = () => {
  return (
    <div className="text-white bg-gradient-to-b from-black to-[#381a5f] py-18 mt-52" id="portfolio">

      <h1 className="text-white text-6xl w-[320px] mx-auto font-semibold my-12">Selected <span className="text-orange-400">Projects</span>
      </h1>

      <div className="px-6 md:px-0 max-w-[1000px] mx-auto mt-40 space-y-24">
        {projects.map((project, index) => (
          <motion.div
              key={index}
              initial={{opacity: 0, y: 75}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{duration: 0.5, delay: 0.25}}
              className={`mt-12 flex flex-col ${index % 2 === 1 ? "md:flex-row-reverse gap-12" : "flex-col md:flex-row"}`}
          >

            <div className="space-y-2 max-w-[550px]">
              <h2 className="text-7xl my-4 text-white/70">{`0${index + 1}`}</h2>
              <h2 className="text-4xl">{project.title}</h2>
              <p className="text-lg text-white/70 break-words p-4">{project.desc}</p>
            </div>

            <div className="flex justify-center items-center">
              <Image src={project.src} alt={project.title} className="h-[350px] w-[500px] object-cover border
                                                 rounded border-gray-600"/>
            </div>

          </motion.div>
        ))}


      </div>


    </div>
  )
}

export default Portfolio 

import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const projects = [
  {
    name: "ecommerce website",
    align: "right",
    image: "/images/image copy.png", // ✅ مسار صحيح
    link: "https://only-brand.vercel.app/",
  },
  {
    name: "Black Iphone",
    align: "left",
    image: "/images/ifv.jpeg", // ✅ مسار صحيح
    link: "https://iphone-website-kappa.vercel.app/",
  },
  {
    name: "simple project",
    align: "right",
    image: "/images/b566ddb4-2511-4dc6-89d0-5ff73023cfc2.jpg", // ✅ مسار صحيح
    link: "https://simpel-progect-fp9e.vercel.app/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((project, index) => {
          return (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <SingleProject
                name={project.name}
                year={project.year}
                align={project.align}
                image={project.image}
              />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;

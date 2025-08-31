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
    name: " vs code clone",
    align: "right",
    image: "/images/WhatsApp Image 2025-08-31 at 8.27.58 PM.jpeg", // ✅ مسار صحيح
    link: "https://vs-clone-three.vercel.app/",
  },
  {
    name: " product belder",
    align: "left",
    image: "/images/WhatsApp Image 2025-08-31 at 8.30.26 PM.jpeg", // ✅ مسار صحيح
    link: "https://prudact-belder.vercel.app/",
  },
  {
    name: " Super-Pro – Business Website",
    align: "right",
    image: "/images/WhatsApp Image 2025-08-31 at 8.42.21 PM.jpeg", // ✅ مسار صحيح
    link: "https://super-pro-frontend.vercel.app/ ",
  },
  {
    name: "Auto-Store – Business Website  ",
    align: "left",
    image: "/images/WhatsApp Image 2025-08-31 at 8.47.02 PM.jpeg", // ✅ مسار صحيح
    link: "https://auto-store-landing-page.vercel.app/",
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

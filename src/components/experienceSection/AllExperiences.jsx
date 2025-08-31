import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Developer",
    responsibilities: [
      "Designing reusable UI components.",
      "Improving performance and reducing load time.",
      "Ensuring smooth interaction across devices.",
      "Collaborating with backend teams for seamless API integration.",
      "Keeping up with the latest front-end technologies.",
    ],
  },
  {
    job: "Front-End Developer",
    responsibilities: [
      "Developing dynamic and interactive user interfaces with React.",
      "Implementing responsive and mobile-first designs.",
      "Applying accessibility and usability best practices.",
      "Researching and integrating modern front-end technologies.",
    ],
  },

  {
    job: "Front-End Developer",
    responsibilities: [
      "Build web apps with React/JS.",
      "Design UI/UX with TailwindCSS.",
      "Create reusable components.",
      "Optimize for performance.",
      "Follow latest trends.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;

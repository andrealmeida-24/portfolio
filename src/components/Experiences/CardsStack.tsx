import { motion } from "motion/react";
import React, { useState } from "react";

const experiences = [
  {
    id: 1,
    image: "/img/g1.jpg",
    company: "Gaming1",
    location: "Liege, BE",
    period: "2023 - Present",
    role: "Senior Software Engineer",
    responsibilities: [
      "Developing micro frontend applications using React",
      "Building stores-ready mobile application with React Native",
      "Collaborating with backend systems using C# and .NET",
      "Utilized WebSockets for real-time features",
    ],
    z: "z-[2]",
    translate: "translate-y-[200%]",
    scale: "scale-[95%]",
  },
  {
    id: 2,
    image: "/img/celfocus.png",
    company: "Celfocus",
    location: "Lisbon, PT",
    period: "2022 - 2023",
    role: "Software Developer",
    responsibilities: [
      "Migrated and scaffolded a new frontend application using React",
      "Designed and implemented RESTful APIs",
      "Modernized the development stack",
      "Implemented secure authentication systems",
    ],
    z: "z-[1]",
    translate: "translate-y-[100%]",
    scale: "scale-[90%]",
  },
  {
    id: 3,
    image: "/img/tetralec.jpg",
    company: "Tetralec",
    location: "Lisbon, PT",
    period: "2020 - 2022",
    role: "Junior Software Developer",
    responsibilities: [
      "Created the company online presence",
      "Developed the website from end to end using HTML, CSS and Javascript",
      "Built backend REST API",
      "Implemented i18n features",
    ],
    z: "z-[0]",
    translate: "translate-y-[0%]",
    scale: "scale-[85%]",
  },
];

export const CardsStack: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center gap-2 selection:text-primary">
      <div className=" w-full">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className={`relative w-full box-border bg-primaryLight
          transition-all duration-[0.3s] ease-[cubic-bezier(.68,-0.55,0.27,1.55)]
         mb-4 p-4 rounded-xl border-2 border-primaryDarker ${
           experience.z
         } shadow-md 
         ${experience.translate} ${experience.scale} ${
              showAll && "transform-none"
            }`}
          >
            <div className="relative flex gap-4">
              <img
                src={experience.image}
                className="relative w-12 h-12 bg-black rounded-full"
              />
              <div className="relative flex flex-col">
                <h2 className="relative text-md font-displaySemibold">
                  {experience.company}
                </h2>
                <span className="relative text-xs font-displayRegular text-gray-600">
                  {experience.location}
                </span>
                <span className="relative text-xs font-displayRegular text-gray-600">
                  {experience.period}
                </span>
                <span className="relative text-md font-displaySemibold text-primaryDark">
                  {experience.role}
                </span>
                {showAll && (
                  <ul className="list-none">
                    {experience.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="text-primaryDark font-displayRegular text-xs flex items-start"
                      >
                        <span className="text-primary mr-2">•</span>
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative text-center">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          onClick={toggleShowAll}
          className="relative px-8 py-2 bg-primaryLight rounded-full border border-primaryDarker shadow-md text-sm font-displaySemibold"
        >
          {showAll ? "Hide" : "Show All"}
        </motion.button>
      </div>
    </div>
  );
};

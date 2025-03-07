import { Briefcase, Calendar, MapPin } from "lucide-react";
import { motion, useInView } from "motion/react";
import { FC, useEffect, useRef, useState } from "react";

const experiences = [
  {
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
  },
  {
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
  },
  {
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
  },
];

export const ExperiencesCarousel: FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.75, once: false });

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const autoPlayInterval = 5000;

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % experiences.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(interval);
  }, [autoPlayInterval]);

  return (
    <motion.div
      ref={containerRef}
      id="carouselContainer"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
      className="relative w-full md:w-1/2 overflow-hidden"
    >
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full bg-primaryLight border-2 border-primaryDark p-8 rounded-xl shadow-lg"
          >
            <div className="absolute top-2 right-2 w-32 h-32 bg-primary rounded-bl-full opacity-50" />
            <div className="relative z-10">
              <h3 className="text-2xl text-primary font-displaySemibold mb-2">
                {exp.company}
              </h3>
              <p className="text-gray-800 text-sm font-displayRegular mb-4 flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                {exp.location}
              </p>
              <p className="text-gray-800 text-sm font-displayRegular mb-4 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {exp.period}
              </p>
              <p className="text-md font-displaySemibold mb-4 text-primaryDark flex items-center">
                <Briefcase className="w-4 h-4 mr-2" />
                {exp.role}
              </p>
              <ul className="list-none space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="text-primaryDark flex items-start">
                    <span className="text-primary mr-2">•</span>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        {experiences.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 mx-2 rounded-full ${
              currentIndex === index ? "bg-primary" : "bg-gray-400"
            } transition-colors duration-300`}
          />
        ))}
      </div>
    </motion.div>
  );
};

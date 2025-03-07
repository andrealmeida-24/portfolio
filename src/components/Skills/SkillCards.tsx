import { Code, Layout, Server, Smartphone } from "lucide-react";
import { motion, useInView } from "motion/react";
import { FC, useRef } from "react";

type SkillTypes = "FE" | "BE";

type Skill = {
  type: SkillTypes;
  icon: JSX.Element;
  title: string;
  description: string;
};

const skills: Skill[] = [
  {
    type: "FE",
    icon: <Layout className="w-6 h-6 text-blue-500" />,
    title: "Frontend Development",
    description:
      "Built with React or React Native, focusing on performance and UX.",
  },
  {
    type: "BE",
    icon: <Server className="w-6 h-6 text-green-500" />,
    title: "Backend Development",
    description: "Server-side solutions using Node.js or C# and .NET.",
  },
  {
    type: "BE",
    icon: <Code className="w-6 h-6 text-purple-500" />,
    title: "API Development",
    description: "RESTful and GraphQL API design.",
  },
  {
    type: "FE",
    icon: <Smartphone className="w-6 h-6 text-yellow-500" />,
    title: "Responsive Design",
    description:
      "Mobile-first, responsive web designs across all devices and screen sizes.",
  },
];

type SkillCardsProps = {
  activeIndex: number;
};

export const SkillCards: FC<SkillCardsProps> = ({ activeIndex }) => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.75, once: false });

  return (
    <motion.div
      ref={containerRef}
      className="h-fit min-h-[60%] md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4"
      animate={{ opacity: isInView ? 1 : 0 }}
    >
      {skills.map((skill, index) => {
        const isActiveFE = activeIndex === 0 && skill.type === "FE";
        const isActiveBE = activeIndex === 1 && skill.type === "BE";

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isInView ? (isActiveFE || isActiveBE ? 1 : 0.5) : 0.5,
              y: isInView ? 0 : 50,
              filter: isInView
                ? isActiveFE || isActiveBE
                  ? "none"
                  : "blur(4px)"
                : "blur(4px)",
            }}
            transition={{ duration: 0.5, delay: index / 6 }}
            className="bg-primaryDark p-6 rounded-xl shadow-md"
          >
            {skill.icon}
            <h3 className="text-md md:text-xl font-displaySemibold text-primaryLight mt-2 mb-1">
              {skill.title}
            </h3>
            <p className="text-sm md:text-md font-displayRegular dark:text-gray-300">
              {skill.description}
            </p>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

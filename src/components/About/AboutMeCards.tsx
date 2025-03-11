import { Code, Database, Server, Gamepad } from "lucide-react";
import { FC, useRef } from "react";
import { motion, useInView } from "motion/react";

import reactImg from "/img/react.webp";
import nextImg from "/img/nextJs.png";
import nodeImg from "/img/nodeJs.png";
import dotNetImg from "/img/dotNetCore.png";
import mongoDbImg from "/img/mongoDb.png";
import postgresSqlImg from "/img/postgreSQL.png";
import phaser1Img from "/img/phaser.png";
import phaser2Img from "/img/phaser2.png";
import {
  COLOR_PRIMARY_DARKER,
  IN_VIEW_TRIGGER_ANIMATION_AMOUNT,
} from "../../utils";

const skills = [
  {
    icon: <Code className="about-me-card-icon text-blue-500" />,
    title: "Frontend",
    description:
      "Building responsive and interactive user interfaces with modern React, React Native and Next.js for optimal performance.",
    borderColor: "border-blue-500",
    textSelection: "selection:text-blue-500",
    image1: reactImg,
    image2: nextImg,
  },
  {
    icon: <Server className="about-me-card-icon text-green-500" />,
    title: "Backend",
    description:
      "Creating server-side applications with focus on scalability and clean architecture using Node js or C# and .NET Core.",
    borderColor: "border-green-500",
    textSelection: "selection:text-green-500",
    image1: nodeImg,
    image2: dotNetImg,
  },
  {
    icon: <Database className="about-me-card-icon text-purple-500" />,
    title: "Database",
    description:
      "Designing efficient database schemas and queries for optimal data management using MongoDB, Mongoose or PostgreSQL.",
    borderColor: "border-purple-500",
    textSelection: "selection:text-purple-500",
    image1: mongoDbImg,
    image2: postgresSqlImg,
  },
  {
    icon: <Gamepad className="about-me-card-icon text-yellow-500" />,
    title: "Games",
    description:
      "Crafting creating and engaging 2D web games using Javascript/Typescript with Phaser.",
    borderColor: "border-yellow-500",
    textSelection: "selection:text-yellow-500",
    image1: phaser1Img,
    image2: phaser2Img,
  },
];
export const AboutMeCards: FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const isInView = useInView(containerRef, {
    amount: IN_VIEW_TRIGGER_ANIMATION_AMOUNT,
    once: false,
  });

  return (
    <motion.div
      ref={containerRef}
      className="h-fit md:w-1/2 grid grid-cols-2 gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 50,
          }}
          transition={{ duration: 0.5, delay: index / 6 }}
          whileHover={{
            scale: 1.05,
            boxShadow: `0px 5px 8px ${COLOR_PRIMARY_DARKER}`,
          }}
          className={`relative overflow-hidden min-h-[200px] md:min-h-[100px] bg-primaryDark p-6 shadow-md rounded-xl border-2 border-primaryDarker ${skill.textSelection}`}
        >
          <img
            src={skill.image1}
            className="absolute w-14 md:w-16 bottom-5 right-5 opacity-30 md:opacity-20 z-20"
          />
          <img
            src={skill.image2}
            className="absolute w-12 md:w-14 bottom-[-5px] right-[-5px] opacity-30 md:opacity-20 z-10"
          />
          {skill.icon}
          <h3 className="text-md md:text-2xl font-displaySemibold text-primaryLight mt-2 md:mt-4 mb-1 md:mb-2">
            {skill.title}
          </h3>
          <p className="text-sm md:text-lg font-displayRegular text-primaryLight">
            {skill.description}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};

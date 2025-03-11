import { motion, MotionValue } from "motion/react";
import { FC } from "react";

type CardProps = {
  rotationX: MotionValue<number>;
  rotationY: MotionValue<number>;
};
export const Card: FC<CardProps> = ({ rotationX, rotationY }) => {
  return (
    <motion.div
      className="w-full flex justify-center items-center"
      style={{ rotateX: rotationX, rotateY: rotationY }}
    >
      <div className="min-h-[25dvh] border-2 border-primary w-full rounded-md backdrop-blur-sm brightness-125 p-4 flex flex-col justify-center items-center">
        <div className="mx-auto py-2 px-4 flex rounded-full gap-3 justify-center items-center bg-primaryDark w-fit drop-shadow-xl">
          <span className="relative flex size-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
          </span>
          <p className="font-displayRegular text-xs text-primaryLight">
            Available for work <span className="ml-1">🚀</span>
          </p>
        </div>
        <div className="w-full h-full p-4 flex justify-center items-center text-center text-primaryLight font-displaySemibold text-2xl drop-shadow-md">
          Let's talk about your next big project!{" "}
        </div>
      </div>
    </motion.div>
  );
};

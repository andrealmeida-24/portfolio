import { FC } from "react";

const DEFAULT_GRADIENT_COLORS = ["#ffaa40", "#9c40ff", "#ffaa40"];

type GradientTextProps = {
  /* defines the text to be displayed */
  children: string;
  /* (optional) defines an array of strings defining the colors to be present in
  the gradient animation */
  colors?: string[];
};

export const GradientText: FC<GradientTextProps> = ({
  children,
  colors = DEFAULT_GRADIENT_COLORS,
}) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: "8s",
  };

  return (
    <div
      className={`z-10 relative mx-auto flex max-w-fit flex-row items-center justify-center font-displayBold text-5xl md:text-6xl transition-shadow duration-500 overflow-hidden`}
    >
      <h1
        className="text-center inline-block relative text-transparent bg-cover animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "300% 100%",
        }}
      >
        {children}
      </h1>
    </div>
  );
};

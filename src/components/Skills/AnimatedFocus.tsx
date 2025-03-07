import { FC, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const SENTENCE = "Frontend Backend";
export const BLUR_AMOUNT = 3;
export const BORDER_COLOR = "#7f00ff";
export const GLOW_COLOR = "#5900b2";
export const ANIMATION_DURATION = 0.5;
export const PAUSE_BETWEEN_ANIMATIONS = 1;

type FocusRect = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type AnimatedFocusProps = {
  currentIndex: number;
  changeCurrentIndexHandler: (index: number) => void;
};

export const AnimatedFocus: FC<AnimatedFocusProps> = ({
  currentIndex,
  changeCurrentIndexHandler,
}) => {
  const words = SENTENCE.split(" ");
  const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [focusRect, setFocusRect] = useState<FocusRect>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (currentIndex === null || currentIndex === -1) return;
    if (!wordRefs.current[currentIndex] || !containerRef.current) return;

    const parentRect = containerRef.current.getBoundingClientRect();
    const activeRect = wordRefs.current[currentIndex]!.getBoundingClientRect();

    setFocusRect({
      x: activeRect.left - parentRect.left,
      y: activeRect.top - parentRect.top,
      width: activeRect.width,
      height: activeRect.height,
    });
  }, [currentIndex, words.length]);

  const handleMouseEnter = (index: number) => {
    setLastActiveIndex(index);
    changeCurrentIndexHandler(index);
  };

  const handleMouseLeave = () => {
    changeCurrentIndexHandler(lastActiveIndex!);
  };

  return (
    <div
      className="relative h-fit min-h-[10%] mt-8 md:mt-0 mb-4 md:mb-0 w-full flex gap-6 justify-center items-center"
      ref={containerRef}
    >
      {words.map((word, index) => {
        const isActive = index === currentIndex;
        return (
          <span
            key={index}
            ref={(el) => (wordRefs.current[index] = el)}
            className="relative text-2xl font-displaySemibold text-primaryDark cursor-pointer"
            style={
              {
                filter: isActive ? `blur(0px)` : `blur(${BLUR_AMOUNT}px)`,
                transition: `filter ${ANIMATION_DURATION}s ease`,
              } as React.CSSProperties
            }
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            {word}
          </span>
        );
      })}

      <motion.div
        className="absolute top-0 left-0 pointer-events-none box-border border-0"
        animate={{
          x: focusRect.x,
          y: focusRect.y,
          width: focusRect.width,
          height: focusRect.height,
          opacity: currentIndex >= 0 ? 1 : 0,
        }}
        transition={{
          duration: ANIMATION_DURATION,
        }}
        style={
          {
            "--border-color": BORDER_COLOR,
            "--glow-color": GLOW_COLOR,
          } as React.CSSProperties
        }
      >
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] left-[-10px] border-r-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] top-[-10px] right-[-10px] border-l-0 border-b-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] left-[-10px] border-r-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        ></span>
        <span
          className="absolute w-4 h-4 border-[3px] rounded-[3px] bottom-[-10px] right-[-10px] border-l-0 border-t-0"
          style={{
            borderColor: "var(--border-color)",
            filter: "drop-shadow(0 0 4px var(--border-color))",
          }}
        ></span>
      </motion.div>
    </div>
  );
};

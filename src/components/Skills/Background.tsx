import { FC } from "react";

export const SkillsBackground: FC = () => {
  return (
    <div className="absolute inset-0 opacity-100">
      <svg
        id="visual"
        viewBox="0 0 1920 1080"
        width="1920"
        height="1080"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <rect x="0" y="0" width="1920" height="1080" fill="transparent"></rect>
        <g transform="translate(0, 1080)">
          <path
            d="M0 -702C73.7 -659.3 147.4 -616.6 245.7 -593.1C343.9 -569.7 466.7 -565.6 496.4 -496.4C526.1 -427.2 462.6 -293 481.3 -199.4C500.1 -105.8 601 -52.9 702 0L0 0Z"
            fill="#7f00ff"
          ></path>
        </g>
      </svg>
    </div>
  );
};

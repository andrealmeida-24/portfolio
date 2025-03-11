import { FC } from "react";
import { Send } from "lucide-react";
import { useAppInteraction } from "../../contexts";

type CTAButtonProps = {
  onClickHandler: () => void;
  viewport: "large" | "small";
};

export const CTAButton: FC<CTAButtonProps> = ({ onClickHandler, viewport }) => {
  const { isAppReadyForInteraction } = useAppInteraction();

  if (!isAppReadyForInteraction) {
    return null;
  }

  return (
    <button
      className={`${
        viewport === "large" ? "hidden md:flex " : "flex"
      } w-48 bg-primary text-center rounded-full relative my-auto py-2 px-4 font-displayRegular text-md group`}
      type="button"
      onClick={onClickHandler}
    >
      <div className="bg-primaryLight text-primary rounded-full h-full w-1/4 flex items-center justify-center absolute left-0 top-0 group-hover:w-full z-10 duration-500">
        <Send />
      </div>
      <p className="translate-x-[50%] text-primaryLight">Get in touch</p>
    </button>
  );
};

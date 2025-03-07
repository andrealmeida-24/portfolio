import { FC, useState } from "react";
import { useAppInteraction } from "../../contexts";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

const sections = [
  { id: "about", label: "about" },
  { id: "experience", label: "experiences" },
  { id: "contact", label: "contacts" },
];

export const Navbar: FC = () => {
  const { isAppReadyForInteraction } = useAppInteraction();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMenuNavigation = (element: string) => {
    const elementToScroll = document.getElementById(element);

    if (isOpen) {
      toggleMenu();

      const scrollToEl = setTimeout(() => {
        elementToScroll?.scrollIntoView({
          behavior: "smooth",
        });
      }, 400);

      return () => {
        clearTimeout(scrollToEl);
      };
    } else {
      elementToScroll?.scrollIntoView({
        behavior: "smooth",
      });
      return;
    }
  };

  return (
    <nav
      className={`absolute z-[1000] top-0 w-full shadow-lg ${
        isOpen
          ? "brightness-125 backdrop-blur-xl"
          : isAppReadyForInteraction
          ? "brightness-100 backdrop-blur-sm"
          : "bg-primaryLight shadow-none"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ justifyContent: "center" }}
          animate={{
            justifyContent: isAppReadyForInteraction
              ? "space-between"
              : "center",
          }}
          transition={{ duration: 1 }}
          className="flex"
        >
          <motion.span
            initial={{ color: "#202020" }}
            animate={{
              color: isAppReadyForInteraction ? "#FAF9F6" : "#202020",
            }}
            transition={{ duration: 0.1 }}
            className="font-displayBold text-2xl text-primaryDark py-4 px-2 selection:text-primary"
          >
            André Almeida
            <span className="text-primary selection:text-primaryLight">.</span>
          </motion.span>

          {isAppReadyForInteraction && (
            <div className="hidden md:flex items-center space-x-1">
              {sections.map((section) => (
                <a
                  key={section.id}
                  onClick={() => handleMenuNavigation(section.label)}
                  className="cursor-pointer capitalize py-4 px-2 text-lg text-primaryLight font-displaySemibold hover:text-primary transition duration-300 selection:text-primary"
                >
                  {section.label}
                </a>
              ))}
            </div>
          )}

          {isAppReadyForInteraction && (
            <button
              onClick={() => handleMenuNavigation("contacts")}
              className="hidden md:flex gap-2 items-center h-fit my-auto py-2 px-4 border-2 rounded-full border-primary bg-primary hover:border-primaryHover text-primaryLight font-displaySemibold text-md"
            >
              <Sparkles />
              <div
                className="text-[#b5b5b5a4] inline-block bg-clip-text animate-shine"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  animationDuration: "3s",
                }}
              >
                Get in touch
              </div>
            </button>
          )}

          {isAppReadyForInteraction && (
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={toggleMenu}
                className="outline-none"
                whileTap={{ scale: 0.97 }}
              >
                <svg
                  className="w-6 h-6 text-primaryLight hover:text-primary"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <motion.path
                    d="M4 6h16M4 12h16M4 18h16"
                    variants={{
                      closed: { d: "M4 6h16M4 12h16M4 18h16" },
                      open: { d: "M6 18L18 6M6 6l12 12" },
                    }}
                    initial="closed"
                    animate={isOpen ? "open" : "closed"}
                    transition={{ duration: 0.3 }}
                  />
                </svg>
              </motion.button>
            </div>
          )}
        </motion.div>
      </div>

      {isAppReadyForInteraction && (
        <motion.div
          className="md:hidden"
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "100dvh", display: "block" },
            closed: { opacity: 0, height: 0, display: "none" },
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col h-2/3 justify-center items-center px-4 pt-2 pb-3 space-y-1 sm:px-3">
            {sections.map((section) => (
              <a
                key={section.id}
                onClick={() => handleMenuNavigation(section.label)}
                className="cursor-pointer py-4 px-2 capitalize text-primaryLight font-displaySemibold text-xl hover:text-primary transition duration-300"
              >
                {section.label}
              </a>
            ))}
            <button
              onClick={() => handleMenuNavigation("contacts")}
              className="w-fit flex gap-2 items-center py-2 px-4 border-2 rounded-full border-primary bg-primary hover:border-primaryHover text-primaryLight font-displaySemibold text-xl"
            >
              <Sparkles />
              <div
                className="text-[#b5b5b5a4] inline-block bg-clip-text animate-shine"
                style={{
                  backgroundImage:
                    "linear-gradient(120deg, rgba(255, 255, 255, 0) 10%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0) 60%)",
                  backgroundSize: "200% 100%",
                  WebkitBackgroundClip: "text",
                  animationDuration: "3s",
                }}
              >
                Get in touch
              </div>
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

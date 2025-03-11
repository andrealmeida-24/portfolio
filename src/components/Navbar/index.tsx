import { FC, useState } from "react";
import { useAppInteraction } from "../../contexts";
import { motion } from "motion/react";
import { COLOR_PRIMARY_DARK, COLOR_PRIMARY_LIGHT } from "../../utils";
import { CTAButton } from "./CTAButton";

const SCROLL_TO_SECTION_DURATION = 400;

const sections = [
  { id: "about", label: "about" },
  { id: "experience", label: "experiences" },
];

export const Navbar: FC = () => {
  const { isAppReadyForInteraction } = useAppInteraction();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMenuNavigation = (element: string) => {
    const elementToScroll = document.getElementById(element);

    if (isOpen) {
      toggleMenu();

      const scrollToSection = setTimeout(() => {
        elementToScroll?.scrollIntoView({
          behavior: "smooth",
        });
      }, SCROLL_TO_SECTION_DURATION);

      return () => {
        clearTimeout(scrollToSection);
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
            initial={{ color: COLOR_PRIMARY_DARK }}
            animate={{
              color: isAppReadyForInteraction
                ? COLOR_PRIMARY_LIGHT
                : COLOR_PRIMARY_DARK,
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

          <CTAButton
            viewport="large"
            onClickHandler={() => handleMenuNavigation("contacts")}
          />

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

            <CTAButton
              viewport="small"
              onClickHandler={() => handleMenuNavigation("contacts")}
            />
          </div>
        </motion.div>
      )}
    </nav>
  );
};

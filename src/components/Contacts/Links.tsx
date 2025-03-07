import { Linkedin, Mail, Github } from "lucide-react";
import { motion, useInView } from "motion/react";
import { FC, useRef } from "react";

export const Links: FC = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { amount: 0.75, once: false });

  return (
    <motion.div
      ref={containerRef}
      id="linksContainer"
      className="md:w-1/2 relative flex justify-center space-x-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: isInView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <motion.a
        href="https://github.com/andrealmeida-24"
        rel="external"
        className="p-3 rounded-full bg-primaryLight"
        aria-label="GitHub Profile"
      >
        <Github className="w-6 h-6 text-primaryDark" />
      </motion.a>
      <a
        href="https://www.linkedin.com/in/andr%C3%A9-almeida-web-dev/"
        className="p-3 rounded-full bg-blue-600"
        aria-label="LinkedIn Profile"
      >
        <Linkedin className="w-6 h-6 text-primaryLight" />
      </a>
      <a
        href="mailto:andrealmeida.webdev@gmail.com"
        className="p-3 rounded-full bg-primary"
        aria-label="Email Contact"
      >
        <Mail className="w-6 h-6 text-primaryLight" />
      </a>
    </motion.div>
  );
};

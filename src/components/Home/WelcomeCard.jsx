"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const WelcomeCard = ({ img, icon, title }) => {
  return (
    <motion.article className="relative w-full aspect-[370/474] overflow-hidden" initial="initial" whileHover="hover">
      <div className="relative w-full h-full">
        <Image className="w-full h-full object-cover" src={img} alt="Welcome Image" width={370} height={474} />
        <motion.div className="absolute inset-0 bg-black/80 border_line flex flex-col items-center justify-center gap-3 p-6 text-white text-center text" variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }} transition={{ duration: 0.4 }}>
          <div className="corner-triangle-left" />
          <div className="corner-triangle-right" />
          <Image className="border border-[var(--color-surface-highlight-primary)] p-2" src={icon} alt="icon" width={60} height={60} />
          <motion.h5 className="font-bold" variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }} transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}>
            {title}
          </motion.h5>

          <motion.span className="text-[1.2rem]" variants={{ initial: { opacity: 0, x: 80 }, hover: { opacity: 1, x: 0 } }} transition={{ duration: 1.5, ease: "easeOut" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </motion.span>
        </motion.div>
      </div>
    </motion.article>
  );
};

export default WelcomeCard;

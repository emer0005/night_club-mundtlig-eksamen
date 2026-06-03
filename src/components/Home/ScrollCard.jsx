"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const ScrollCard = ({ img, isActive, isComingSoon, onClick, title }) => {
  return (
    <motion.div onClick={onClick} className={`grid relative ${!isActive && !isComingSoon ? "cursor-pointer" : ""}`} initial="initial" whileHover="hover">
      <Image src={img.image} width={233} height={217} alt="track thumbnail" className={`col-start-1 row-start-1 ${isComingSoon ? "opacity-50 grayscale" : ""} ${isActive ? "opacity-50 grayscale" : ""}`} />
      {isActive && (
        <div className={`absolute inset-0 flex items-center justify-center z-30`}>
          <Image src="/assets/icon/AudioWave.png" alt="Playing animation" width={60} height={60} />
        </div>
      )}
      <motion.span className="col-start-1 row-start-1 self-end w-full bg-black/80 text-[var(--color-text-headline)] text-center font-semibold z-20" variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }} transition={{ duration: 0.4 }}>
        {title}
      </motion.span>
      <motion.div className="absolute inset-0 bg-black/80 border_line z-10 flex items-center justify-center" variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }} transition={{ duration: 0.4 }}>
        {!isComingSoon && !isActive && <Image src="/assets/icon/Play_btn.svg" alt="Play button" width={50} height={50} className="z-30" />}
      </motion.div>
      <motion.div className="absolute inset-0 pointer-events-none z-40" variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }} transition={{ duration: 0.4 }}>
        <div className="corner-triangle-left" />
        <div className="corner-triangle-right" />
      </motion.div>
      {isComingSoon && <div className="absolute inset-0 flex items-center justify-center text-white font-semibold z-50">Coming soon</div>}
    </motion.div>
  );
};

export default ScrollCard;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroLogo = () => {
  return (
    <div className="inline-block text-center">
      <motion.div initial={{ rotateX: 60, y: -120, opacity: 0, scale: 0.9, transformPerspective: 900 }} animate={{ rotateX: 0, y: 0, opacity: 1, scale: 1 }} transition={{ duration: 2.4, ease: [0.16, 1, 0.3, 1] }}>
        <Image className="block w-full" src="/assets/icon/Logo.svg" alt="Logo" width={500} height={500} />
      </motion.div>

      <motion.div initial={{ rotateX: 90, y: -60, opacity: 0, transformPerspective: 1000 }} animate={{ rotateX: 0, y: 0, opacity: 1 }} transition={{ duration: 2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}>
        <span className="text-white block uppercase mx-auto w-fit text-[clamp(1.2rem,0.8rem+1vw,2rem)] tracking-[0.8em]">Have a good time</span>
        <Image src="/assets/bottom_line.png" alt="Bottom Line" width={500} height={500} className="mx-auto mt-4" />
      </motion.div>
    </div>
  );
};

export default HeroLogo;

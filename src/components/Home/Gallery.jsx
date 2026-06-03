"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Gallery = ({ img, imgalt, onClick }) => {
  return (
    <motion.div
      className="relative h-60 flex-grow min-w-[350px] cursor-pointer"
      variants={{
        hidden: { x: -100, opacity: 0 },
        visible: { x: 0, opacity: 1 },
        hover: {},
      }}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 2, ease: "easeOut" }}
      onClick={onClick}
    >
      <Image src={`${process.env.NEXT_PUBLIC_API_URL}${img}`} alt={imgalt} fill className="object-cover" />

      <motion.div
        className="absolute inset-0 bg-black/60 border_line"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 0 },
          hover: { opacity: 1 },
        }}
        transition={{ duration: 0.4 }}
      >
        <div className="corner-triangle-left" />
        <div className="corner-triangle-right" />
      </motion.div>
    </motion.div>
  );
};

export default Gallery;

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import HeroLogo from "./HeroLogo";
import Image from "next/image";

const heroImages = ["/assets/bg/header_bg_2.jpg", "/assets/bg/header_bg_1.jpg"];

const Hero = () => {
  const heroImage = heroImages[Math.floor(Math.random() * 2)];

  return (
    <section className="relative h-[600px] h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image src={heroImage} alt="Hero image" fill className="object-cover object-center opacity-50" />
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <HeroLogo />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.5,
            duration: 1.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex gap-10 mt-6"
        >
          <Link href="/Events">
            <button className="hero_btn_1">View events</button>
          </Link>
          <Link href="/BookTable">
            <button className="hero_btn_2">Book table</button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

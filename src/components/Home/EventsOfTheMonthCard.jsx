"use client";
import Image from "next/image";
import { dayDate, timeDate } from "@/app/dateConverter";
import { motion } from "framer-motion";
import Link from "next/link";

const EventsOfTheMonthCard = ({ eventImg, doorsOpen, location, date, imgalt, description, title, id }) => {
  console.log(description);
  return (
    <motion.article className="grid" initial="initial" whileHover="hover">
      <div className="relative max-h-[450px]">
        <Image src={`${process.env.NEXT_PUBLIC_API_URL}${eventImg}`} alt={imgalt} className="w-full h-full object-cover" width={500} height={500} />

        <motion.div className="absolute inset-0 bg-black/80 flex flex-col" variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }} transition={{ duration: 0.6, ease: "easeOut" }}>
          <div className="corner-triangle-left absolute top-0 left-0" />
          <div className="corner-triangle-right absolute bottom-0 right-0 z-120" />
          <Link href={`/BookTable?eventId=${id}`} className="w-fit mx-auto mt-10">
            <button className="px-6 py-2 bg-[var(--color-surface-highlight-primary)] cursor-pointer hover:bg-[var(--color-surface-highlight-secondary)] text-white uppercase font-semibold tracking-wide">Book now</button>
          </Link>

          <motion.div className="mt-auto text-white bg-black p-4" variants={{ initial: { y: 200 }, hover: { y: 0 } }} transition={{ duration: 0.3, ease: "easeOut" }}>
            <h5 className="uppercase font-semibold">{title}</h5>
            <span className="text-s">{description}</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="self-end text-white flex w-full justify-between bg-[var(--color-surface-highlight-primary)] p-2 z-100">
        <span>{dayDate(date)}</span>
        <span>{timeDate(doorsOpen)}</span>
        <span>{location}</span>
      </div>
    </motion.article>
  );
};

export default EventsOfTheMonthCard;

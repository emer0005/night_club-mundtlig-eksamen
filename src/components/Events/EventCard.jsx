"use client";
import Image from "next/image";
import { eventDate } from "../../app/dateConverter.js";
import Link from "next/link.js";
import PrimaryBtn from "../GlobalComponents/PrimaryBtn.jsx";

const EventCard = ({ title, date, location, description, img, imgalt, slug, id }) => {
  return (
    <article className="flex flex-col odd:lg:flex-row even:lg:flex-row-reverse ">
      <div className="w-full lg:w-1/2">
        <Image src={`${process.env.NEXT_PUBLIC_API_URL}${img}`} alt={imgalt} width={500} height={400} className=" w-full max-h-[400px] overflow-hidden object-cover object-center" />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col lg:max-w-[650px] p-10 lg:p-0 lg:px-10 lg:mt-10 ">
        <h3 className="mb-[0.1rem]">{title}</h3>
        <p className="mb-[var(--space-xs)]">
          <span className="text-[var(--color-surface-highlight-primary)]">{eventDate(date)} | </span>
          {location}
        </p>
        <p className=" mb-[var(--space-xl)] lg:mb-[var(--space-m)]">{description}</p>
        <Link className="flex justify-center md:justify-end" href={`/EventPage/${slug}/${id}`}>
          <PrimaryBtn text="Read more" />
        </Link>
      </div>
    </article>
  );
};

export default EventCard;

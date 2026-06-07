"use client";
import { eventDate } from "@/app/dateConverter";

const Review = ({ name, date, content }) => {
  return (
    <section className="">
      <h6 className=" mt-[var(--space-l)] mb-[var(--space-s)] text-[var(--color-text-headline)] text-xl">
        {name}
        <span className="text-[var(--color-surface-highlight-primary)]"> - Posted {eventDate(date)}</span>
      </h6>
      <p className="mb-[var(--space-xs)] max-w-[65ch] text-s text-[var(--color-text-body)]  ">{content}</p>
    </section>
  );
};

export default Review;

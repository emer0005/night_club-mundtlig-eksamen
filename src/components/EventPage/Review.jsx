"use client";
import { eventDate } from "@/app/dateConverter";

const Review = ({ name, date, content }) => {
  return (
    <section className="">
      <h5 className=" mt-[var(--space-l)]">
        {name}
        <span className="text-[var(--color-surface-highlight-primary)]"> - Posted {eventDate(date)}</span>
      </h5>
      <p className="mb-[var(--space-xs)] max-w-[65ch]">{content}</p>
    </section>
  );
};

export default Review;

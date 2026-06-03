"use client";
import EventCard from "./EventCard";
import { useState, useRef } from "react";

const EventContainer = ({ events }) => {
  const [page, setPage] = useState(1);
  const itemsOnPage = 3;

  const startIndex = (page - 1) * itemsOnPage;
  const endIndex = startIndex + itemsOnPage;

  const totalPage = Math.ceil(events.length / itemsOnPage);

  const visibleEvents = events.slice(startIndex, endIndex);
  const topRef = useRef(null);

  return (
    <section className="max-w-[100rem] mx-auto">
      <div ref={topRef}>
        {visibleEvents.map((event) => (
          <EventCard key={event.id} title={event.title} date={event.date} location={event.location} description={event.description} img={event.asset.url} imgalt={event.asset.alt} slug={event.slug} id={event.id} />
        ))}
      </div>
      <div className="text-center mt-[var(--space-xl)]">
        {Array.from({ length: totalPage }, (_, i) => (
          <button
            className={`ml-3 cursor-pointer hover:underline hover:text-[var(--color-surface-highlight-primary)] ${page === i + 1 ? "text-[var(--color-surface-highlight-primary)]" : "text-white"}`}
            key={i}
            onClick={() => {
              setPage(i + 1);
              topRef.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="text-white ml-5 cursor-pointer hover:underline hover:text-[var(--color-surface-highlight-primary)]"
          onClick={() => {
            setPage(page + 1);
            topRef.current?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Next &gt;
        </button>
      </div>
    </section>
  );
};

export default EventContainer;

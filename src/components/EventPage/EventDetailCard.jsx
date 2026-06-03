"use client";
import Image from "next/image";
import { eventDate } from "@/app/dateConverter";
import Link from "next/link";
import PrimaryBtn from "../GlobalComponents/PrimaryBtn";

const EventDetailCard = ({ id, event }) => {
  return (
    <section className="text-white px-6 py-12 xl:p-0 space-y-12 max-w-[80rem] mx-auto">
      <div className="w-full overflow-hidden">
        <Image src={`${process.env.NEXT_PUBLIC_API_URL}${event.heroAsset.url}`} alt={event.title} width={event.heroAsset.width} height={event.heroAsset.height} className="w-full h-auto object-cover" />
      </div>

      <div className="space-y-2">
        <span className="text-[var(--color-surface-highlight-primary)] text-sm uppercase tracking-widest">{event.category}</span>
        <h1 className="text-4xl font-bold">{event.title}</h1>
        <span className="text-lg text-[var(--color-surface-highlight-primary)]">{eventDate(event.date)}</span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="px-3 py-2 text-center bg-white/5 border border-[var(--color-surface-highlight-primary)]">
          <span className="block text-white text-[11px] uppercase tracking-wide font-medium">Doors opening</span>
          <span className="block text-sm font-semibold">{eventDate(event.doorsOpen)}</span>
        </div>

        <div className="px-3 py-2 text-center bg-white/5 border border-[var(--color-surface-highlight-primary)]">
          <span className="block text-white text-[11px] uppercase tracking-wide font-medium">Location</span>
          <span className="block text-sm font-semibold">{event.location}</span>
        </div>

        <div className="px-3 py-2 text-center bg-white/5 border border-[var(--color-surface-highlight-primary)]">
          <span className="block text-white text-[11px] uppercase tracking-wide font-medium">Price</span>
          <span className="block text-sm font-semibold">{event.price}</span>
        </div>

        <div className="px-3 py-2 text-center bg-white/5 border border-[var(--color-surface-highlight-primary)]">
          <span className="block text-white text-[11px] uppercase tracking-wide font-medium">Age limit</span>
          <span className="block text-sm font-semibold">{event.ageLimit}</span>
        </div>
      </div>

      <p className="text-xl text-white">{event.excerpt}</p>

      <div>
        <h2 className="text-3xl font-bold mb-4 text-white">Lineup</h2>
        <div className="flex gap-4 flex-wrap whitespace-nowrap py-2">
          {event.lineup.map((artist, index) => (
            <div key={index} className="px-4 py-2 bg-white/5 border border-[var(--color-surface-highlight-primary)] flex-shrink-0">
              {artist}
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4">Program</h2>
        <ul className="space-y-3">
          {event.schedule.map((item, index) => (
            <li key={index} className="flex justify-between p-4 bg-white/5 border border-[var(--color-surface-highlight-primary)]">
              <span className="font-semibold text-white">{item.time}</span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-12 text-lg leading-relaxed max-w-[75ch]">
        <div className="space-y-4">
          <h3 className="font-semibold">Description</h3>
          <p>{event.description}</p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold">Content</h3>
          <p>{event.content}</p>
        </div>
      </div>

      <div className="text-right md:text-left mb-[7rem]">
        <Link href={`/BookTable?eventId=${id}`}>
          <PrimaryBtn text="Book table" />
        </Link>
      </div>
    </section>
  );
};

export default EventDetailCard;

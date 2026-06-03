import EventsOfTheMonthCard from "@/components/Home/EventsOfTheMonthCard";
import Carrousel from "../GlobalComponents/Carrousel";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const EventsOfTheMonthContainer = () => {
  return (
    <section className="p-10 max-w-[80rem] mx-auto">
      <h2 className="text-center mb-[var(--space-s)]">Events of the month</h2>
      <div className="gradient_line h-[5px] w-[200px] mx-auto mb-[var(--space-xl)]"></div>
      <Suspense
        fallback={
          <div className="flex flex-col items-center py-10">
            <Image src="/assets/loader/madbars.gif" alt="Loading..." width={60} height={60} priority />
            <p className="mt-2 text-sm text-gray-500">Loading events of the month…</p>
          </div>
        }
      >
        <FetchEvent />
      </Suspense>
    </section>
  );
};

export default EventsOfTheMonthContainer;

const FetchEvent = async () => {
  "use server";
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
  });

  const events = await response.json();

  return (
    <Carrousel autoSize>
      {events.map((event) => (
        <div key={event.id} className="flex-[0_0_100%] px-4">
          <Link href={`/EventPage/${event.slug}/${event.id}`}>
            <EventsOfTheMonthCard location={event.location} date={event.date} eventImg={event.asset.url} imgalt={event.asset.alt} doorsOpen={event.doorsOpen} description={event.description} title={event.title} id={event.id} />
          </Link>
        </div>
      ))}
    </Carrousel>
  );
};

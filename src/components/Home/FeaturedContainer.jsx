import FeaturedCard from "@/components/Home/FeaturedCard";
import Carrousel from "../GlobalComponents/Carrousel";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";


const FeaturedContainer = () => {
  return (
    <section className="eventsOfTheMonth_bg p-10">
      <div className="max-w-[80rem] mx-auto">
        <h2 className="text-center mb-[var(--space-s)]">Featured events</h2>
        <div className="gradient_line h-[5px] w-[200px] mx-auto mb-[var(--space-xl)]"></div>
        <Suspense
          fallback={
            <div className="flex flex-col items-center py-10">
              <Image src="/assets/loader/madbars.gif" alt="Loading..." width={60} height={60} priority />
              <p className="mt-2 text-sm text-gray-500">Loading featured events…</p>
            </div>
          }
        >
          <FetchFeaturedEvents />
        </Suspense>
      </div>
    </section>
  );
};

export default FeaturedContainer;

const FetchFeaturedEvents = async () => {
  "use server";
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`, {
  });
  const events = await response.json();
  const featuredEvents = events.filter((event) => event.isFeatured);

  return (
    <Carrousel autoSize>
      {featuredEvents.map((event) => (
        <div key={event.id} className="flex-[0_0_50%] px-4">
          <Link href={`/EventPage/${event.slug}/${event.id}`}>
            <FeaturedCard title={event.title} date={event.date} eventImg={event.asset.url} imgalt={event.asset.alt} id={event.id} description={event.description} />
          </Link>
        </div>
      ))}
    </Carrousel>
  );
};

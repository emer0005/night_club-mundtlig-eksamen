"use client";
import Image from "next/image";
import SelectEventCard from "./SelectEventCard";
import FormBar from "./FormBar";

const SelectEvent = ({ reservations, events }) => {
  return (
    <div className="p-7 md:p-0 grid grid-cols-1 lg:grid-cols-2 gap-15 mx-auto max-w-[1200px] min-h-[calc(100vh-80px)] place-content-center items-start">
      <div className="hidden lg:flex justify-center">
        <Image src="/assets/content-img/thumb1.jpg" alt="Guest" width={450} height={450} />
      </div>

      <div className="flex flex-col w-[500px]">
        <div className="mx-auto">
          <FormBar />
        </div>

        <div className="mb-5 text-center">
          <h3>Choose Event</h3>
          <div className="gradient_line h-[5px] w-[200px] mx-auto mb-[var(--space-m)]"></div>
        </div>

        <div className="h-[350px] overflow-y-scroll custom-scrollbar pr-4">
          <>
            {events.map((event) => (
              <SelectEventCard key={event.id} name={event.title} date={event.date} location={event.location} img={event.asset.url} id={event.id} reservations={reservations} />
            ))}
          </>
        </div>
      </div>
    </div>
  );
};

export default SelectEvent;

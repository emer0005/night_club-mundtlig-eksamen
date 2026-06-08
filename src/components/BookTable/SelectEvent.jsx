import Image from "next/image";
import SelectEventCard from "./SelectEventCard";
import FormBar from "./FormBar";

const SelectEvent = () => {

  return (
    <div className="max-w-[80rem] mx-auto p-7 md:p-0 mt-[7rem] grid grid-cols-1 gap-[12rem] md:grid-cols-2 gap-4">
      <Image src="/assets/content-img/thumb1.jpg" alt="Guest" width={450} height={450} />
      <div className="flex flex-col items-center">
        <FormBar />
        <div className="mb-[2rem]">
        <h2>Choose Event</h2>
        <div className="gradient_line h-[5px] w-[200px]"></div>
        </div>
        <FetchSelctEvent />
      </div>
    </div>
  );
};

export default SelectEvent;

const FetchSelctEvent = async () => {
    "use server";
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
    const events = await response.json();

    return (
  <>
    {events.map((event) => (
      <SelectEventCard
        key={event.id}
        name={event.title}
        date={event.date}
        location={event.location}
        img={event.asset.url}
        id={event.id}
      />
    ))}
  </>
);
};


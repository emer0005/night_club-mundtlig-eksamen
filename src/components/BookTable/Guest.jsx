"use client";

import Image from "next/image";
import FormBar from "./FormBar";
import { useRouter, useSearchParams } from "next/navigation";
import { tables } from "@/app/data/tables";

const Guest = ({ reservations }) => {
  const router = useRouter();
  const params = useSearchParams();
  const eventId = params.get("eventId");

  function handleGuestSelection(guests) {
    if (eventId) {
      router.push(`/BookTable/SelectEvent?guests=${guests}&event=${eventId}`);
    } else {
      router.push(`/BookTable/SelectEvent?guests=${guests}`);
    }
  }

  const reservation = reservations.filter((res) => res.eventId === Number(eventId));
  const tableID = reservation.map((res) => Number(res.table));
  const availableTables = tables.filter((table) => !tableID.includes(table.id));

  function IsGuestAllowed(guests) {
    const isAllowed = availableTables.some((table) => table.guest >= guests);
    return isAllowed;
  }

  console.log(reservation);
  console.log(eventId);
  console.log(tableID);
  console.log(availableTables);
  console.log(IsGuestAllowed(4));

  return (
    <div className="p-7 md:p-0 grid grid-cols-1 lg:grid-cols-2 gap-15 min-h-[calc(100vh-80px)] place-content-center items-start mx-auto max-w-[1200px]">
      <div className="hidden lg:flex justify-center">
        <Image src="/assets/content-img/thumb1.jpg" alt="Guest" width={450} height={450} />
      </div>

      <div className="flex flex-col w-[500px]">
        <div className="mx-auto">
          <FormBar />
        </div>

        <div className="mb-10 text-center">
          <h3>Number of Guests</h3>
          <div className="gradient_line h-[5px] w-[200px] mx-auto mb-[var(--space-xl)]"></div>
        </div>

        <div className="grid grid-cols-4 gap-15 mx-auto">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
            <button
              key={number}
              disabled={!IsGuestAllowed(number)}
              onClick={() => handleGuestSelection(number)}
              className={`bg-black border border-[var(--color-surface-highlight-primary)]
                         text-white w-[70px] h-[70px] text-xl font-semibold 
                
                         ${!IsGuestAllowed(number) ? "opacity-50 cursor-not-allowed" : "cursor-pointer hover:bg-[color-mix(in_srgb,var(--color-surface-highlight-primary)_20%,transparent)] transition-all duration-200"}`}
            >
              {number}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guest;

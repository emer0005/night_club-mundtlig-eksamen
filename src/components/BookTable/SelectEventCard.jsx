"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { eventDate } from "@/app/dateConverter";
import { tables } from "@/app/data/tables";

const SelectEventCard = ({ name, date, location, img, id, reservations }) => {
  const router = useRouter();
  const params = useSearchParams();
  const guest = params.get("guests");
  const event = params.get("event");

  console.log(id);

  const tablesGuest = tables.filter((table) => table.guest >= Number(guest));
  const reservation = reservations.filter((res) => res.eventId === id);

  const tableID = tablesGuest.map((table) => Number(table.id));
  const reservedTables = reservation.map((res) => Number(res.table));

  const availableTables = tableID.filter((id) => !reservedTables.includes(id));
  console.log(tablesGuest);
  console.log(reservation);
  console.log(tableID);
  console.log(reservedTables);
  console.log(availableTables);

  function handleEventSelection(id) {
    router.push(`/BookTable/SelectTable?guests=${guest}&event=${id}`);
  }
  return (
    <div className={`relative flex flex-row items-center gap-4 border mb-4 p-2 transition-all duration-200 border-[var(--color-surface-highlight-primary)] ${Number(event) === id ? "bg-[color-mix(in_srgb,var(--color-surface-highlight-primary)_20%,transparent)]" : ""} ${availableTables.length === 0 ? "" : "hover:bg-[color-mix(in_srgb,var(--color-surface-highlight-primary)_20%,transparent)] cursor-pointer"} `} onClick={availableTables.length === 0 ? undefined : () => handleEventSelection(id)}>
      {availableTables.length === 0 && <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-[1.2rem] uppercase font-bold">No Tables Available </span>}
      <Image src={`${process.env.NEXT_PUBLIC_API_URL}${img}`} alt="Guest" width={100} height={100} className={`${availableTables.length === 0 ? "opacity-10" : ""}`} />
      <div className={`${availableTables.length === 0 ? "opacity-30" : ""}`}>
        <h6 className="text-white text-xl font-semibold uppercase">{name}</h6>
        <span className="text-white">{eventDate(date)} </span>
        <span className="text-[var(--color-text-body)]"> | </span>
        <span className="text-[var(--color-surface-highlight-primary)]">{location} </span>
      </div>
    </div>
  );
};

export default SelectEventCard;

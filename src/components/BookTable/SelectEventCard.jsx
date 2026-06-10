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
    <div
      className={`
      flex flex-row items-center gap-4 cursor-pointer border mb-4 p-2 transition-all duration-200
      ${availableTables.length === 0 ? "bg-red-200 border-red-500 cursor-not-allowed" : "border-[var(--color-surface-highlight-primary)] hover:bg-[color-mix(in_srgb,var(--color-surface-highlight-primary)_20%,transparent)]"}
    `}
      onClick={() => handleEventSelection(id)}
    >
      <Image src={`${process.env.NEXT_PUBLIC_API_URL}${img}`} alt="Guest" width={100} height={100} />
      <div>
        <h5 className="text-white">{name}</h5>
        <span className="text-white">{eventDate(date)}</span>
        <span className="text-[var(--color-surface-highlight-primary)]">{location}</span>
      </div>
    </div>
  );
};

export default SelectEventCard;

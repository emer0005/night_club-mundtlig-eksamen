"use client";
import Image from "next/image";
import FormBar from "./FormBar";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { tables } from "@/app/data/tables";

const SelectTable = ({ reservations }) => {
  const router = useRouter();
  const params = useSearchParams();
  const guest = params.get("guests");
  const event = params.get("event");

  const tablesMatchingGuest = tables.filter((table) => table.guest >= Number(guest));
  const eventReservations = reservations.filter((res) => res.eventId === Number(event));

  const reservedTableIds = eventReservations.map((res) => Number(res.table));

  const availableTables = tablesMatchingGuest.filter((table) => !reservedTableIds.includes(table.id));
  
  console.log(tablesMatchingGuest);
  console.log(eventReservations);
  console.log(availableTables);

  function handleTableSelection(id) {
    router.push(`/BookTable/Informations?guests=${guest}&event=${event}&table=${id}`);
  }

  return (
    <div className=" p-7 md:p-0 grid grid-cols-1 lg:grid-cols-2 gap-15 min-h-[calc(100vh-80px)] place-content-center items-start mx-auto max-w-[1200px]">
      <div className="hidden lg:flex justify-center">
        <Image src="/assets/content-img/thumb1.jpg" alt="Guest" width={450} height={450} />
      </div>

      <div className="flex flex-col w-[500px]">
        <div className="mx-auto">
          <FormBar />
        </div>

        <div className="text-center">
          <h3>Choose your table</h3>
          <div className="gradient_line h-[5px] w-[200px] mx-auto mb-[var(--space-m)]"></div>
        </div>

        <div className="grid grid-cols-5 gap-x-6 gap-y-15 justify-center items-center mx-auto">
          {availableTables.map((table) => (
            <div key={table.id} onClick={() => handleTableSelection(table.id)} className="cursor-pointer grid hover:scale-120 transition-transform">
              <Image src={table.img} alt={`Table ${table.id}`} width={230} height={150} className="row-start-1 col-start-1 w-full h-full" />
              <span className="text-white row-start-1 col-start-1 place-self-center">{table.id}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectTable;

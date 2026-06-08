"use client";

import Image from "next/image";
import FormBar from "./FormBar";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const tables = [
  { id: 1, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 2, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 3, guest: 6, img: "/assets/icon/table2.svg" },
  { id: 4, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 5, guest: 8, img: "/assets/icon/table3.svg" },
  { id: 6, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 7, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 8, guest: 6, img: "/assets/icon/table2.svg" },
  { id: 9, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 10, guest: 8, img: "/assets/icon/table3.svg" },
  { id: 11, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 12, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 13, guest: 6, img: "/assets/icon/table2.svg" },
  { id: 14, guest: 4, img: "/assets/icon/table1.svg" },
  { id: 15, guest: 8, img: "/assets/icon/table3.svg" },
];

const SelectTable = () => {
  const router = useRouter();
  const params = useSearchParams();
  const guest = params.get("guests");
  const event = params.get("event");

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

        <div className="grid grid-cols-5 gap-x-6 gap-y-15">
          {tables.map((table) => (
            <div key={table.id} onClick={() => handleTableSelection(table.id)} className="cursor-pointer grid">
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

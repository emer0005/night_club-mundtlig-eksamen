"use client";

import Image from "next/image";
import FormBar from "./FormBar";
import {useRouter} from "next/navigation"
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
    <div className="max-w-[80rem] mx-auto p-7 md:p-0 mt-[7rem] grid grid-cols-1 md:grid-cols-3 gap-[2rem]">
    <div className="md:col-span-1">
        <Image src="/assets/content-img/thumb1.jpg" alt="Guest" width={450} height={450} />
    </div>
    <div className="md:col-span-2">

      <div className="flex flex-col items-center">
        <FormBar />
        <h2>Choose your table</h2>
        <div className="gradient_line h-[5px] w-[200px]"></div>
        </div>
       <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
  {tables.map((table) => (
    <div
      key={table.id}
      onClick={() => handleTableSelection(table.id)}
      className="cursor-pointer flex justify-center"
    >
      <Image
        src={table.img}
        alt={`Table ${table.id}`}
        width={100}
        height={100}
      />
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default SelectTable;
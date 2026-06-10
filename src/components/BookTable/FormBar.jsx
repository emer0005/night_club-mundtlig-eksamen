"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { usePathname } from "next/navigation";

const FormBar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  console.log(pathname);
  const guest = params.get("guests");
  const event = params.get("event");
  const table = params.get("table");
  const information = params.get("information");

  function handleFormbar(step) {
    if (step === 1) {
      router.push(`/BookTable`);
    }
    if (step === 2) {
      router.push(`/BookTable/SelectEvent?guests=${guest}`);
    }
    if (step === 3) {
      router.push(`/BookTable/SelectTable?guests=${guest}&event=${event}`);
    }
    if (step === 4) {
      router.push(`/BookTable/Informations?guests=${guest}&event=${event}&table=${table}`);
    }
  }

  return (
    <div className="flex mb-[5rem]">
      <div className="flex flex-col items-center w-[100px] h-[20px]">
        <Image src="/assets/icon/user.svg" alt="User" width={40} height={40} onClick={pathname !== "/BookTable/Confirm" ? () => handleFormbar(1) : undefined} className={`cursor-pointer ${!guest && "opacity-50"}`} />
        <span className={`text-[0.8rem] ${guest ? "text-white" : "text-gray-500"}`}>{guest ? `#${guest} Guests` : "Select Guests"}</span>
      </div>
      <div className="flex flex-col items-center w-[100px] h-[20px]">
        <Image src="/assets/icon/Calendar.svg" alt="Calendar" width={40} height={40} className={`cursor-pointer ${!event && "opacity-50"}`} onClick={event && pathname !== "/BookTable/Confirm" ? () => handleFormbar(2) : undefined} />
        <span className={`text-[0.8rem] ${event ? "text-white" : "text-gray-500"}`}>{event ? `Event #${event}` : "Select Event"}</span>
      </div>
      <div className="flex flex-col items-center w-[100px] h-[20px]">
        <Image src="/assets/icon/Table.svg" alt="Table" width={40} height={40} className={`cursor-pointer ${!table && "opacity-50"}`} onClick={table && pathname !== "/BookTable/Confirm" ? () => handleFormbar(3) : undefined} />
        <span className={`text-[0.8rem] ${table ? "text-white" : "text-gray-500"}`}>{table ? `Table #${table}` : "Select Table"}</span>
      </div>
      <div className="flex flex-col items-center w-[100px] h-[20px]">
        <Image src="/assets/icon/Information.svg" alt="Info" width={40} height={40} className={`cursor-pointer ${!information && "opacity-50"}`} onClick={information && pathname !== "/BookTable/Confirm" ? () => handleFormbar(2) : undefined} />
        <span className={`text-[0.8rem] ${information ? "text-white" : "text-gray-500"}`}>{information ? "Details added" : "Enter Details"}</span>
      </div>
      <div className="flex flex-col items-center w-[100px] h-[20px]">
        <Image src="/assets/icon/Event_Accepted.svg" alt="Confirm" width={40} height={40} className={`cursor-pointer ${pathname != "/BookTable/Confirm" && "opacity-50"}`} />
        <span className={`text-[0.8rem] ${pathname === "/BookTable/Confirm" ? "text-white" : "text-gray-500"}`}>{pathname === "/BookTable/Confirm" ? "Completed" : "Confirm"}</span>
      </div>
    </div>
  );
};

export default FormBar;

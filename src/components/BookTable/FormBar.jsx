"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";

const FormBar = () => {
  const router = useRouter();
  const params = useSearchParams();
  const guest = params.get("guests");
  const event = params.get("event");
  const table = params.get("table");

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
    <div className="flex gap-12 mb-[3rem]">
      <Image src="/assets/icon/user.svg" alt="User" width={40} height={40} className="cursor-pointer" onClick={() => handleFormbar(1)} />
      <Image src="/assets/icon/Calendar.svg" alt="Calendar" width={40} height={40} className="cursor-pointer" onClick={() => handleFormbar(2)} />
      <Image src="/assets/icon/Table.svg" alt="Table" width={40} height={40} className="cursor-pointer" onClick={() => handleFormbar(3)} />
      <Image src="/assets/icon/Information.svg" alt="Info" width={40} height={40} className="cursor-pointer" onClick={() => handleFormbar(4)} />
      <Image src="/assets/icon/Event_Accepted.svg" alt="Confirm" width={40} height={40} className="cursor-pointer" />
    </div>
  );
};

export default FormBar;

"use client";
import Image from "next/image";
import {useRouter} from "next/navigation"
import { useSearchParams } from "next/navigation";
import { eventDate } from "@/app/dateConverter";


const SelectEventCard = ({ name, date, location, img, id }) => {
    const router = useRouter();
    const params = useSearchParams();
    const guest = params.get("guests");
    
function handleEventSelection(id) {
router.push(`/BookTable/SelectTable?guests=${guest}&event=${id}`);
}
  return (
    <div className="flex flex-row items-center gap-4 cursor-pointer mb-[2rem]" onClick={() => handleEventSelection(id)}>
      <Image src={`${process.env.NEXT_PUBLIC_API_URL}${img}`} alt="Guest" width={200} height={200} />
      <div>
        <h5  className="text-white">{name}</h5>
        <span className="text-white">{eventDate(date)}</span>
        <span className="text-[var(--color-surface-highlight-primary)]">{location}</span>
      </div>
    </div>
  );
};

export default SelectEventCard;
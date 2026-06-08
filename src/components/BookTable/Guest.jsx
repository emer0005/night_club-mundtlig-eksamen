"use client";

import Image from "next/image";
import FormBar from "./FormBar";
import {useRouter} from "next/navigation"

const Guest = () => {
    const router = useRouter();

function handleGuestSelection(guests) {
    router.push(`/BookTable/SelectEvent?guests=${guests}`);
}

  return (
    <div className="max-w-[80rem] mx-auto p-7 md:p-0 mt-[7rem] grid grid-cols-1 gap-[12rem] md:grid-cols-2 gap-4">
      <Image src="/assets/content-img/thumb1.jpg" alt="Guest" width={450} height={450} />
    <div className="flex flex-col items-center">
        <FormBar />
        <div className="mb-[3rem]">
        <h2>Number of Guests</h2>
        <div className="gradient_line h-[5px] w-[200px]"></div>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 ">        
        <button className="form_button bg-black border border-[var(--color-surface-highlight-primary)] text-white px-4 py-2 cursor-pointer" onClick={() => handleGuestSelection(1)}>1</button>
        <button className="form_button bg-black border border-[var(--color-surface-highlight-primary)] text-white px-4 py-2 cursor-pointer"onClick={() => handleGuestSelection(2)}>2</button>
        <button className="form_button bg-black border border-[var(--color-surface-highlight-primary)] text-white px-4 py-2 cursor-pointer" onClick={() => handleGuestSelection(3)}>3</button>
        <button className="form_button bg-black border border-[var(--color-surface-highlight-primary)] text-white px-4 py-2 cursor-pointer" onClick={() => handleGuestSelection(4)}>4</button>
        <button className="form_button bg-black border border-[var(--color-surface-highlight-primary)] text-white px-4 py-2 cursor-pointer" onClick={() => handleGuestSelection(5)}>5</button>
        <button className="form_button bg-black border border-[var(--color-surface-highlight-primary)] text-white px-4 py-2 cursor-pointer" onClick={() => handleGuestSelection(6)}>6</button>
        <button className="form_button bg-black border border-[var(--color-surface-highlight-primary)] text-white px-4 py-2 cursor-pointer" onClick={() => handleGuestSelection(7)}>7</button>
        <button className="form_button bg-black border border-[var(--color-surface-highlight-primary)] text-white px-4 py-2 cursor-pointer" onClick={() => handleGuestSelection(8)}>8</button>
        </div>
      </div>
    </div>
  );
};

export default Guest;
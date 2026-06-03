"use client";
import Image from "next/image";

const Tables = ({ img, number, isTaken }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 relative">
      <Image className="col-start-1 row-start-1 w-full h-full object-cover min-w-[180px]" src={img} alt="table" width={230} height={150} />

      <h2 className={`col-start-1 row-start-1 grid place-items-center w-full h-full z-10 ${isTaken ? "isTakenTabel" : ""}`}>{number}</h2>
    </div>
  );
};

export default Tables;

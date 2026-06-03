"use client";
import Image from "next/image";
const Subhero = ({ title }) => {
  return (
    <section className="grid grid-cols-1 grid-rows-1 w-full h-[120px] md:h-[300px] relative ">
      <Image className="col-start-1 row-start-1 w-full h-full object-cover object-bottom opacity-30" src="/assets/bg/footerbg.jpg" alt="footer background" fill />
      <div className="col-start-1 row-start-1 flex flex-col items-center justify-center z-10">
        <h2>{title}</h2>
        <div className="gradient_line h-[5px] w-[200px]"></div>
      </div>
    </section>
  );
};

export default Subhero;

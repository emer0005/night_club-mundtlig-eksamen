import Image from "next/image";
import FormBar from "./FormBar";

const Confirm = () => {
  return (
    <section className="p-7 md:p-0 grid grid-cols-1 lg:grid-cols-2 gap-10 min-h-[calc(100vh-80px)] place-content-center items-start mx-auto max-w-[1000px]">
      <div className="hidden lg:flex justify-center">
        <Image src="/assets/content-img/thumb1.jpg" alt="Guest" width={450} height={450} />
      </div>
      <div className="flex flex-col w-[500px]">
        <div className="mx-auto">
          <FormBar />
        </div>

        <div className="mb-5 flex flex-col items-center justify-center h-[400px] text-center">
          <h3>Thanks for your reservation. We are looking forward to greeting you!</h3>
          <div className="gradient_line h-[5px] w-[200px]"></div>
        </div>
      </div>
    </section>
  );
};

export default Confirm;

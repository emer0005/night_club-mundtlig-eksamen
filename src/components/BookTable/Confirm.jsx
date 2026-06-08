import Image from "next/image";
import FormBar from "./FormBar";

const Confirm = () => {
  return (
    <div>
      <Image src="/assets/content-img/thumb1.jpg" alt="Guest" width={200} height={200} />
      <div>
        <FormBar />
        <h2>Thanks for your reservation. We are looking forward to greeting you!</h2>
        <div className="gradient_line h-[5px] w-[200px]"></div>
      </div>
    </div>
  );
};

export default Confirm;
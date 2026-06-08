import Image from "next/image";

const FormBar = () => {
  return (
    <div className="flex gap-12 mb-[3rem]">
      <Image src="/assets/icon/user.svg" alt="User" width={40} height={40} />
      <Image src="/assets/icon/Calendar.svg" alt="Calendar" width={40} height={40} />
      <Image src="/assets/icon/Table.svg" alt="Table" width={40} height={40} />
      <Image src="/assets/icon/Information.svg" alt="Info" width={40} height={40} />
      <Image src="/assets/icon/Event_Accepted.svg" alt="Confirm" width={40} height={40} />
    </div>
  );
};

export default FormBar;
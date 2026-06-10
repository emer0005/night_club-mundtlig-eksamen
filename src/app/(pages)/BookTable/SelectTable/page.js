import Header from "@/components/GlobalComponents/Header";
import SelectTable from "@/components/BookTable/SelectTable";

export default async function BookTablePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations`);
  const reservations = await res.json();
  return (
    <>
      <Header />
      <SelectTable reservations={reservations} />
    </>
  );
}

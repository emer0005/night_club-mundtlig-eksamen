import Header from "@/components/GlobalComponents/Header";
import SelectEvent from "@/components/BookTable/SelectEvent";

export default async function BookTablePage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  const events = await response.json();

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/reservations`);
  const reservations = await res.json();
  return (
    <>
      <Header />
      <SelectEvent events={events} reservations={reservations} />
    </>
  );
}

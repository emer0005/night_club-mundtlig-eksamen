import Header from "@/components/GlobalComponents/Header";
import Guest from "@/components/BookTable/Guest";

export default async function BookTablePage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  const events = await response.json();
  return (
    <>
      <Header />
      <Guest />
    </>
  );
}

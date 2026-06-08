import Header from "@/components/GlobalComponents/Header";
import Subhero from "@/components/GlobalComponents/Subhero";
import BookTableContainer from "@/components/BookTable/BookTableContainer";
import Footer from "@/components/GlobalComponents/Footer/Footer";

export default async function BookTablePage() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  const events = await response.json();
  return (
    <>
      <Header />
      <Subhero title="Book table" />
      <BookTableContainer events={events} />
      <Footer />
    </>
  );
}

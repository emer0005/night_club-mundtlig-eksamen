import EventContainer from "@/components/Events/EventContainer";
import Header from "@/components/GlobalComponents/Header";
import Subhero from "@/components/GlobalComponents/Subhero";
import Footer from "@/components/GlobalComponents/Footer/Footer";

export default async function Events() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/events`);
  const events = await response.json();

  return (
    <section>
      <Header />
      <Subhero title="Events" />
      <EventContainer events={events} />
      <Footer />
    </section>
  );
}

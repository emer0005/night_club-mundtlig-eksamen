import Footer from "@/components/GlobalComponents/Footer/Footer";
import CommentContainer from "@/components/EventPage/CommentContainer";
import EventDetailCard from "@/components/EventPage/EventDetailCard";
import ReviewContainer from "@/components/EventPage/ReviewContainer";
import Header from "@/components/GlobalComponents/Header";
import Subhero from "@/components/GlobalComponents/Subhero";

export default async function EventPage({ params }) {
  const { slug, id } = await params;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/events/${id}`,
  );
  const event = await response.json();

  return (
    <>
      <Header />
      <Subhero title={event.title} />
      <EventDetailCard id={id} event={event} />
      <ReviewContainer />
      <CommentContainer />
      <Footer />
    </>
  );
}

import Header from "@/components/GlobalComponents/Header";
import WelcomeContainer from "@/components/Home/WelcomeContainer";
import FeaturedContainer from "@/components/Home/FeaturedContainer";
import GalleryContainer from "@/components/Home/GalleryContainer";
import TrackContainer from "@/components/Home/TrackContainer";
import VideoContainer from "@/components/Home/VideoContainer";
import TestimonialsContainer from "@/components/Home/TestimonialsContainer";
import NewsFormContainer from "@/components/Home/NewsFormContainer";
import EventsOfTheMonthContainer from "@/components/Home/EventsOfTheMonthContainer";
import Footer from "@/components/GlobalComponents/Footer/Footer";
import Hero from "@/components/Home/Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Header />
      <WelcomeContainer />
      <FeaturedContainer />
      <EventsOfTheMonthContainer />
      <GalleryContainer />
      <TrackContainer />
      <VideoContainer />
      <TestimonialsContainer />
      <NewsFormContainer />
      <Footer />
    </div>
  );
}

import Header from "@/components/GlobalComponents/Header";
import Subhero from "@/components/GlobalComponents/Subhero";
import Contact from "@/components/ContactUs/Contact";
import Footer from "@/components/GlobalComponents/Footer/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Subhero title="Contact us" />
      <Contact />
      <Footer />
    </>
  );
}

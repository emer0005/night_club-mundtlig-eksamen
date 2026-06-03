import TestimonialsCard from "./TestimonialsCard";
import Carrousel from "../GlobalComponents/Carrousel";


const TestimonialsContainer = async () => {
  const testimonials = await fetchTestimonials();

  return (
    <Carrousel slidesToShow={1}>
      {testimonials.map((testimonial) => (
        <TestimonialsCard key={testimonial.id} name={testimonial.name} content={testimonial.content} img={testimonial.asset.url} facebookLink={testimonial.facebook} twitterLink={testimonial.twitter} />
      ))}
    </Carrousel>
  );
};

export default TestimonialsContainer;

const fetchTestimonials = async () => {
  "use server";
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`);
  return response.json();
};

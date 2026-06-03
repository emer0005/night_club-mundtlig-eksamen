"use client";
import NewsCard from "./NewsCard";

const newsImages = ["/assets/content-img/recent_post1.jpg", "/assets/content-img/recent_post2.jpg"];

const NewsContainer = () => {
  return (
    <section className="mt-8">
      {newsImages.map((image, i) => (
        <NewsCard key={i} img={image} />
      ))}
    </section>
  );
};

export default NewsContainer;

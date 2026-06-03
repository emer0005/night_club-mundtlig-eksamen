"use client";
import ResentBlogCard from "./ResentBlogCard";
import Image from "next/image";

const blogImages = ["/assets/content-img/blog_full1.jpg", "/assets/content-img/blog_full2.jpg", "/assets/content-img/blog_full3.jpg"];

const ResentBlogContainer = () => {
  return (
    <section>
      <h2>Recent blog</h2>
      <Image src="/assets/bottom_line2.png" alt="bottom line" width={300} height={24} />
      {blogImages.map((image, i) => (
        <div key={i}>
          <ResentBlogCard img={image} />{" "}
        </div>
      ))}
    </section>
  );
};

export default ResentBlogContainer;

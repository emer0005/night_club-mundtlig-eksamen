"use client";
import Image from "next/image";

const ResentBlogCard = ({ img }) => {
  return (
    <section>
      <Image src={img} alt="blog image" width={810} height={429} />
      <h3>More than 20 yea...</h3>
      <span>BY: Admin / 3 Comments / 16 Nov 2018</span>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout</p>
    </section>
  );
};

export default ResentBlogCard;

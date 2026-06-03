"use client";
import Image from "next/image";

const NewsCard = ({ img }) => {
  return (
    <section className="grid grid-cols-3 gap-4">
      <div className="col-span-1">
        <Image src={img} alt="news image" width={100} height={91} />
      </div>
      <div className="col-span-2 space-y-1">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting.</p>
        <span className="text-[var(--color-surface-highlight-primary)]">April 17, 2026</span>
      </div>
    </section>
  );
};

export default NewsCard;

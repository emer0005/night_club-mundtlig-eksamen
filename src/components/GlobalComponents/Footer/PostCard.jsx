"use client";
import Image from "next/image";

const PostCard = () => {
  return (
    <section className="grid grid-cols-[auto_1fr] gap-4 items-start">
      <div>
        <Image src="/assets/icon/Cross.svg" alt="cross icon" width={20} height={20} />
      </div>
      <div>
        <p>It is a long established fact that a reader will be distracted by the readable... </p>
        <span>5 hours ago</span>
      </div>
    </section>
  );
};

export default PostCard;

"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";

const TestimonialsCard = ({ name, content, img, facebookLink, twitterLink }) => {
  const [expanded, setExpanded] = useState(false);

  const characters = 200;

  return (
    <section className="flex flex-col items-center text-center gap-4 p-6">
      <Image src={`${process.env.NEXT_PUBLIC_API_URL}${img}`} width={170} height={170} alt={name} />
      <h3>{name}</h3>
      <p className={`${expanded ? "" : "line-clamp-3"} max-w-[65ch]`}> {content}</p>
      {content.length > characters && (
        <button onClick={() => setExpanded(!expanded)} className="text-pink-500 hover:underline">
          {expanded ? "Read less" : "Read more"}
        </button>
      )}
      <div className="flex gap-4 mt-2">
        <Link className="text-white border border-white p-3" href={facebookLink}>
          <FaFacebookF />
        </Link>
        <Link className="text-white border border-white p-3" href={twitterLink}>
          <FaTwitter />
        </Link>
        <Link className="text-white border border-white p-3" href="https://www.snapchat.com/">
          <FaSnapchatGhost />
        </Link>
      </div>
    </section>
  );
};

export default TestimonialsCard;

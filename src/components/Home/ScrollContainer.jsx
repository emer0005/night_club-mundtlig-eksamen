"use client";
import ScrollCard from "./ScrollCard";
import Carrousel from "../GlobalComponents/Carrousel";

const comingSoonTracks = [
  { image: "/assets/content-img/track4.jpg", comingSoon: true, title: "Lorem Ipsum" },
  { image: "/assets/content-img/track5.jpg", comingSoon: true, title: "Lorem Ipsum" },
];

const ScrollContainer = ({ media, currentMedia, selectedMedia }) => {
  const allTracks = [...media, ...comingSoonTracks];
  return (
    <div className="mx-auto px-4 md:px-6 lg:px-8">
      <Carrousel slidesToShow={5} variant="scrollContainer" autoSize>
        {allTracks.map((img, index) => (
          <ScrollCard img={img} key={index} title={img.title} isActive={index === currentMedia} isComingSoon={img.comingSoon} onClick={() => selectedMedia(index)} />
        ))}
      </Carrousel>
    </div>
  );
};

export default ScrollContainer;

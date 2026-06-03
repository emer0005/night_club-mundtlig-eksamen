"use client";
import PlayingCard from "./PlayingCard";
import { useState } from "react";
import ScrollContainer from "./ScrollContainer";

const media = [
  { id: 1, image: "/assets/content-img/track_thumb.jpg", track: "/assets/media/black-box-funky.mp3", title: "Black box funky" },
  { id: 2, image: "/assets/content-img/track1.jpg", track: "/assets/media/euphoria.mp3", title: "Euphoria" },
  { id: 3, image: "/assets/content-img/track2.jpg", track: "/assets/media/fashion-red-tape.mp3", title: "Fashion red tape" },
];

const TrackContainer = () => {
  const [currentMedia, setCurrentMedia] = useState(0);
  const titles = media.map((item) => item.title);

  const handleNext = () => {
    setCurrentMedia((prev) => (prev + 1 < media.length ? prev + 1 : 0));
  };

  const handlePrev = () => {
    setCurrentMedia((prev) => (prev - 1 >= 0 ? prev - 1 : media.length - 1));
  };

  const selectedMedia = (mediaIndex) => {
    setCurrentMedia(mediaIndex);
  };

  return (
    <section className="max-w-[80rem] mx-auto p-10 ">
      <h2 className="text-center mb-[var(--space-s)]">Night club track</h2>
      <div className="gradient_line h-[5px] w-[200px] mx-auto mb-[var(--space-xl)]"></div>
      <PlayingCard item={media[currentMedia]} handleNext={handleNext} handlePrev={handlePrev} />
      <ScrollContainer media={media} currentMedia={currentMedia} selectedMedia={selectedMedia} titles={titles} />
    </section>
  );
};

export default TrackContainer;

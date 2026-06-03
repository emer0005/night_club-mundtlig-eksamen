"use client";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "@/app/css/audio-player.css";
import Image from "next/image";

const PlayingCard = ({ item, handleNext, handlePrev }) => {
  return (
    <>
      <div className="md:grid md:grid-cols-4 md:items-center px-4 max-w-[71rem] mx-auto">
        <div className="hidden md:block md:col-span-1">
          <Image src={item.image} width={233} height={217} alt="track thumbnail" className="w-auto h-60" />
        </div>

        <div className="md:col-span-3">
          <h5 className="mb-[var(--space-s)] text-center md:text-left">{item.title}</h5>
          <AudioPlayer className="bg-red-200" showJumpControls={false} onClickNext={handleNext} onClickPrevious={handlePrev} showSkipControls src={item.track} />
        </div>
      </div>
    </>
  );
};

export default PlayingCard;

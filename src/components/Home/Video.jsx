"use client";
import Carousel from "../GlobalComponents/Carrousel";

const Videos = ["/assets/media/video-crowd.mp4", "/assets/media/video-dj-crowd-2.mp4", "/assets/media/video-dj-crowd1.mp4"];

const Video = () => {
  return (
    <Carousel slidesToShow={1}>
      {Videos.map((video, i) => (
        <div key={i} className="relative w-full overflow-hidden">
          <video className="w-full h-full object-cover scale-[1.2]" autoPlay muted loop poster="/assets/media/video-placeholder.jpg">
            <source src={video} type="video/mp4" />
          </video>

          <div className="absolute inset-0">
            <div className="corner-triangle-left" />
            <div className="corner-triangle-right" />
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Video;

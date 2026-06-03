"use client";
import Video from "./Video";

const VideoContainer = () => {
  return (
    <section className="max-w-[80rem] mx-auto p-10">
      <h2 className="text-center mb-[var(--space-s)]">Latest video</h2>
      <div className="gradient_line h-[5px] w-[200px] mx-auto mb-[var(--space-xl)]"></div>
      <div className="">
        <Video />
      </div>
    </section>
  );
};

export default VideoContainer;

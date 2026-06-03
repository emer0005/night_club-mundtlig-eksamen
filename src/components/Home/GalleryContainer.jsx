import Image from "next/image";
import { Suspense } from "react";
import GalleryPopover from "./GalleryPopover";


const GalleryContainer = () => {
  return (
    <section className=" max-w-[100rem] mx-auto">
      <h2 className="text-center mb-[var(--space-s)]">Night club Gallery</h2>
      <div className="gradient_line h-[5px] w-[200px] mx-auto mb-[var(--space-xl)]"></div>
      <Suspense
        fallback={
          <div className="flex flex-col items-center py-10">
            <Image src="/assets/loader/madbars.gif" alt="Loading..." width={60} height={60} priority />
            <p className="mt-2 text-sm text-gray-500">Loading gallery...</p>
          </div>
        }
      >
        <FetchGallery />
      </Suspense>
    </section>
  );
};

const FetchGallery = async () => {
  "use server"; 

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/gallery`);
  const GalleryImages = await response.json();
  const firstSeven = GalleryImages.slice(0, 7);

  return (
    <div className="flex flex-wrap ">
      {firstSeven.map((img) => (
        <GalleryPopover key={img.id} img={img} images={firstSeven} />
      ))}
    </div>
  );
};
export default GalleryContainer;

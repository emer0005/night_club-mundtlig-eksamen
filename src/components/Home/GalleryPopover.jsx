"use client";
import Gallery from "./Gallery";
import Carrousel from "../GlobalComponents/Carrousel";
import Image from "next/image";
import PrimaryBtn from "../GlobalComponents/PrimaryBtn";
import Link from "next/link";

export default function GalleryPopover({ img, images }) {
  return (
    <>
      <Gallery img={img.asset.url} imgalt={img.asset.alt} width={img.asset.width} height={img.asset.height} onClick={() => document.getElementById(`popover-${img.id}`)?.showPopover()} />

      <div id={`popover-${img.id}`} popover="auto" className="galleryPopover">
        <button onClick={() => document.getElementById(`popover-${img.id}`)?.hidePopover()}></button>

        <Carrousel slidesToShow={1} variant="scrollContainer">
          {images.map((slide) => (
            <div key={slide.id} className="slideWrapper">
              <div className="relative">
                <Image src={`${process.env.NEXT_PUBLIC_API_URL}${slide.asset.url}`} alt={slide.asset.alt} width={slide.asset.width} height={slide.asset.height} className="slideImage" />
                <div className="absolute inset-0">
                  <div className="corner-triangle-right" />
                </div>
              </div>

              <h2 className="slideTitle">Lorem ipsum</h2>
              <p className="slideDescription">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>

              <Link className="w-full flex justify-end" href="/Events">
                <PrimaryBtn text="Read more" />
              </Link>
            </div>
          ))}
        </Carrousel>
      </div>
    </>
  );
}

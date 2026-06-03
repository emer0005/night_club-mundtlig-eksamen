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
              <p className="slideDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit…</p>

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

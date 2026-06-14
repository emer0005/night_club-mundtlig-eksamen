"use client";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function Carousel({ children, slidesToShow = 1, variant = "default", autoSize }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
  const scrollTo = (i) => emblaApi?.scrollTo(i);

  const initialNumberOfSlides = () => {
    if (typeof window === "undefined") return 1;
    if (window.innerWidth < 900) return 1;
    if (window.innerWidth < 1024) return 2;
    return 2;
  };

  const [numberOfslides, setNumberOfSlides] = useState(initialNumberOfSlides);

  useEffect(() => {
  if (!autoSize) return;

  const windowSize = () => {
    if (variant === "scrollContainer") {
      if (window.innerWidth < 900) setNumberOfSlides(1);
      else setNumberOfSlides(slidesToShow); // desktop = 5
      return;
    }

    if (window.innerWidth < 900) setNumberOfSlides(1);
    else setNumberOfSlides(2);
  };

  windowSize();
  window.addEventListener("resize", windowSize);
  return () => window.removeEventListener("resize", windowSize);
}, [autoSize, slidesToShow, variant]);

  const slideWidth = `${100 / (autoSize ? numberOfslides : slidesToShow)}%`;

  const btnClass = "h-10 w-10 flex items-center justify-center border border-white text-white bg-black/40";

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());

    emblaApi.on("select", onSelect);
    emblaApi.on("reinit", () => setScrollSnaps(emblaApi.scrollSnapList()));

    onSelect();
  }, [emblaApi]);

  const Viewport = (
    <div className="embla__viewport overflow-hidden" ref={emblaRef}>
      <div className="embla__container flex gap-4">
        {children.map((child, i) => (
          <div key={i} style={{ minWidth: slideWidth }}   className={variant === "scrollContainer" ? "flex justify-center md:justify-start" : ""}>
            {child}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="embla relative min-h-[200px]">
      {variant === "scrollContainer" && (
        <div className="flex items-center gap-4">
          <button onClick={scrollPrev} className={btnClass}>
            ◀
          </button>
          <div className="flex-1">{Viewport}</div>
          <button onClick={scrollNext} className={btnClass}>
            ▶
          </button>
        </div>
      )}

      {variant === "default" && (
        <>
          {Viewport}

          <div className="flex justify-center items-center gap-4 mt-4">
            <button onClick={scrollPrev} className={btnClass}>
              ◀
            </button>
            <button onClick={scrollNext} className={btnClass}>
              ▶
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {scrollSnaps.map((_, i) => (
              <button key={i} onClick={() => scrollTo(i)} className={`h-3 w-3 bg-gray-300 ${i === selectedIndex ? "bg-pink-500" : ""}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

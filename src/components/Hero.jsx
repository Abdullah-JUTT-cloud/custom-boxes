import { useEffect, useState } from "react";
import QuoteForm from "./QuoteForm";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import examIcon from "../assets/exam.png";

const slides = [img1, img2, img3, img4];

export default function Hero() {
  const [active, setActive] = useState(0);

  // auto-advance every 5s; clicking a thumbnail restarts the timer
  useEffect(() => {
    const id = setTimeout(() => setActive((i) => (i + 1) % slides.length), 5000);
    return () => clearTimeout(id);
  }, [active]);

  // the 3 images that aren't showing, in "up next" order
  const upNext = [1, 2, 3].map((n) => (active + n) % slides.length);

  return (
    <section className="px-4 pb-14 pt-[42px]">
      <h1 className="mx-auto max-w-[1033px] text-center text-[28px] font-medium leading-[1.25] text-black md:text-[40px] md:leading-[50px]">
        Top Quality, Wholesale Custom Boxes Manufactured Around Your Brand
      </h1>
      <p className="mx-auto mt-4 max-w-[943px] text-center text-base capitalize leading-[22px] text-[#111]">
        Order custom boxes wholesale in flexible sizing at Print247. We handle
        large volume runs and offer quick turnarounds. Get free 3D mockups and
        fast shipping across the USA.
      </p>

      <div
        className="mx-auto mt-[30px] flex max-w-[1560px] flex-col overflow-hidden rounded-[20px] bg-white lg:flex-row"
      >
        {/* left: form panel */}
        <div className="px-5 pb-[39px] pt-[42px] lg:w-[674px] lg:shrink-0 lg:pl-[42px] lg:pr-[97px]">
          <div className="mb-[10px] flex items-start gap-3 lg:-ml-2">
            <div className="flex h-[45.5px] w-[45.5px] shrink-0 items-center justify-center rounded-[10px] border border-[#d9d9d9] bg-white">
              <img src={examIcon} alt="" className="h-[22px] w-[22px]" />
            </div>
            <div className="max-w-[485px]">
              <h2 className="text-lg font-medium leading-[23px] text-black">
                Get Your Free Custom Box Quote Now
              </h2>
              <p className="mt-px text-sm leading-[18px] text-[#0c0a09]">
                Feel free to request a custom quote by sharing your packaging
                box needs in the form below.
              </p>
            </div>
          </div>

          <QuoteForm />
        </div>

        {/* right: image slider */}
        <div className="relative min-h-[320px] flex-1">
          {slides.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Custom box showcase ${i + 1}`}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                i === active ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          {/* progress bar */}
          <div className="absolute bottom-[28px] left-6 h-[4.6px] w-[131px] overflow-hidden rounded-full bg-white">
            <div
              className="h-full rounded-full bg-[#00aeef] transition-[width] duration-500"
              style={{ width: `${((active + 1) / slides.length) * 100}%` }}
            />
          </div>

          {/* thumbnails */}
          <div className="absolute bottom-[23px] right-[15px] flex gap-[6.85px] rounded-[10px] bg-[rgba(217,217,217,0.2)] p-[10.2px]">
            {upNext.map((i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1}`}
                className="h-[66px] w-[66px] overflow-hidden rounded-[10px]"
              >
                <img src={slides[i]} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
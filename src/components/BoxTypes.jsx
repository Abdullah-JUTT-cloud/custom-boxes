import img21 from "../assets/21.webp";
import img22 from "../assets/22.webp";
import img23 from "../assets/23.webp";
import img24 from "../assets/24.webp";
import img25 from "../assets/25.webp";
import img26 from "../assets/26.webp";
import img27 from "../assets/27.webp";
import img28 from "../assets/28.webp";
import img21Small from "../assets/21-320.webp";
import img22Small from "../assets/22-320.webp";
import img23Small from "../assets/23-320.webp";
import img24Small from "../assets/24-320.webp";
import img25Small from "../assets/25-320.webp";
import img26Small from "../assets/26-320.webp";
import img27Small from "../assets/27-320.webp";
import img28Small from "../assets/28-320.webp";

const boxTypes = [
  { title: "Custom Product Boxes", img: img21, small: img21Small },
  { title: "Custom Gift Boxes", img: img22, small: img22Small },
  { title: "Custom Mailer Boxes", img: img23, small: img23Small },
  { title: "Custom Kraft Boxes", img: img24, small: img24Small },
  { title: "Custom Display Boxes", img: img25, small: img25Small },
  { title: "Custom Square Boxes", img: img26, small: img26Small },
  { title: "Custom Cosmetic Boxes", img: img27, small: img27Small },
  { title: "Custom Apparel Boxes", img: img28, small: img28Small },
];

function ArrowRight() {
  return (
    <svg width="8" height="7" viewBox="0 0 8 7" fill="none">
      <path
        d="M0.5 3.5h7M4.5 0.5l3 3-3 3"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function BoxTypes() {
  return (
    <section className="px-4 pb-[78px]">
      <div className="mx-auto max-w-[1560px]">
        {/* header row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h2 className="max-w-[785px] text-[28px] font-medium leading-[1.25] text-black md:text-[40px] md:leading-[50px]">
              Find The Perfect-Fit Custom Box Type For Your Brand
            </h2>
            <p className="mt-4 max-w-[742px] text-base capitalize leading-[22px] text-[#111]">
              Print247 provides a broad range of product box types where you can
              easily find the perfect match for your product. They match your
              brand identity as well.
            </p>
          </div>

          <button
            type="button"
            className="flex h-10 w-[177px] shrink-0 items-center justify-center rounded-full bg-black text-sm font-medium text-white lg:mb-2 lg:mr-[10px]"
          >
            Live Chat
          </button>
        </div>

        {/* 4 x 2 grid */}
        <div className="mt-7 grid grid-cols-1 gap-[10px] sm:grid-cols-2 lg:grid-cols-4">
          {boxTypes.map(({ title, img, small }) => (
            <a
              key={title}
              href="#quote"
              className="relative block aspect-square overflow-hidden rounded-[10px]"
            >
              <img
                src={img}
                srcSet={`${small} 320w, ${img} 382w`}
                sizes="(min-width: 1024px) 23.5vw, (min-width: 640px) 47vw, calc(100vw - 32px)"
                alt={title}
                width="382"
                height="382"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-[13px] left-2 min-w-[191px] rounded-[10px] bg-black/70 px-[10px] py-[9px]">
                <p className="whitespace-nowrap text-base font-medium leading-5 text-white">
                  {title}
                </p>
                <span className="mt-[5px] flex items-center gap-2 text-sm leading-[18px] text-white">
                  Get Quote
                  <ArrowRight />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

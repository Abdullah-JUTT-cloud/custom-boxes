import binoid from "../assets/Group 3860.png";
import halfBakd from "../assets/Group 3859.png";
import faded from "../assets/Group 3858.png";
import notYaSonsWeed from "../assets/Group 3857.png";
import ignite from "../assets/Group 3856.png";
import modusSmall from "../assets/Group 5304.png";
import stoned from "../assets/Group 3854.png";
import nativeExtracts from "../assets/Group 3853.png";
import modus from "../assets/Group 3852.png";

// w / h are the sizes from the Figma design, in px
const logos = [
  { src: binoid, alt: "Binoid", w: 81.8, h: 23.9 },
  { src: halfBakd, alt: "Half Bak'd", w: 56.8, h: 53.3 },
  { src: faded, alt: "Faded", w: 103, h: 39 },
  { src: notYaSonsWeed, alt: "Not Ya Son's Weed", w: 59.8, h: 37.7 },
  { src: ignite, alt: "Ignite", w: 44.7, h: 47.9 },
  { src: modusSmall, alt: "Modus", w: 41.9, h: 36.8 },
  { src: stoned, alt: "Stoned", w: 95.9, h: 31.2 },
  { src: nativeExtracts, alt: "Native Extracts", w: 64.5, h: 25.7 },
  { src: modus, alt: "Modus", w: 64.3, h: 56.5 },
];

export default function LogoStrip() {
  return (
    <section className="px-4 pb-20">
      <div className="relative mx-auto flex max-w-[1463px] flex-wrap items-center justify-center gap-x-10 gap-y-6 py-8 min-[1400px]:h-[120.5px] min-[1400px]:flex-nowrap min-[1400px]:gap-x-[83px] min-[1400px]:py-0">
        {/* top and bottom lines that fade out at both ends */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(to_right,transparent,#000,transparent)]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[linear-gradient(to_right,transparent,#6b6b6b,transparent)]"
        />

        {logos.map(({ src, alt, w, h }, i) => (
          <img
            key={i}
            src={src}
            alt={alt}
            width={w}
            height={h}
            style={{ width: w, height: h }}
            loading="lazy"
            decoding="async"
            className="shrink-0"
          />
        ))}
      </div>
    </section>
  );
}

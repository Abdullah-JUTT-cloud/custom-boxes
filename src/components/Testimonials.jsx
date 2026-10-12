const testimonials = [
  {
    name: "Jason R.",
    rating: 4.5,
    text: "We switched to Print247 after our old supplier missed two ship dates in a row. We now receive our mailer boxes on time and the print quality is noticeably better than before.",
  },
  {
    name: "Priya S.",
    rating: 4.5,
    text: "Their design team caught a die line error before print that would've ruined our first run of 5000 units. It saved us thousands of dollars and avoided an awkward phone call with our buyer.",
  },
  {
    name: "Daniel R.",
    rating: 4.5,
    text: "Communication was a big win for us. We received quick responses, clear updates, and boxes that arrived ready for our fulfillment team to use without extra sorting.",
  },
  {
    name: "Amanda K.",
    rating: 4.5,
    text: "We ship weather sensitive products so material strength matters. Print247 recommended a thicker corrugated stock and we haven't had a single damaged shipment since we made the switch.",
  },
];

const STAR_PATH =
  "M12 1.75 14.84 8.3l7.21.65-5.4 4.65 1.51 7.13L12 17.07l-6.16 3.66 1.51-7.13-5.4-4.65 7.21-.65z";

function StarSvg({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
      shapeRendering="geometricPrecision"
      className={className}
    >
      <path d={STAR_PATH} />
    </svg>
  );
}

function Star({ fill }) {
  return (
    <span className="relative inline-block h-[14px] w-[15px]">
      <StarSvg className="absolute inset-0 h-full w-full text-[#c7c7c7]" />
      <span
        className="absolute inset-y-0 left-0 overflow-hidden"
        style={{ width: `${fill * 100}%` }}
      >
        <StarSvg className="h-[14px] w-[15px] text-[#ff9900]" />
      </span>
    </span>
  );
}

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-[2px]">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} fill={Math.max(0, Math.min(1, rating - i))} />
      ))}
    </div>
  );
}

function VerifiedIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6.1" stroke="#a2d98d" strokeWidth="1.5" />
      <path
        d="M4.6 7.1l1.7 1.7 3.1-3.4"
        stroke="#a2d98d"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="px-4 pb-20 pt-[52px]">
      <div className="mx-auto w-full max-w-[1650px] sm:w-[88%]">
        {/* header */}
        <h2 className="text-center text-[30px] font-normal leading-[1.25] text-black md:text-[40px] md:leading-[50px]">
          What Our Clients Say About Our Work
        </h2>
        <p className="mx-auto mt-4 max-w-[760px] text-center text-[16px] leading-6 text-black">
          Read feedback from laboratories, clinics, and businesses that trust
          Print247 for their custom packaging labels.
        </p>

        {/* rating row */}
        <div className="mt-10 flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-14">
          <div className="flex items-center gap-3">
            <span className="text-[44px] font-normal leading-none text-black md:text-[48px]">
              4.8
            </span>
            <div>
              <Stars rating={4.5} />
              <p className="mt-1 text-[11px] leading-none text-[#526176]">
                5000+ Satisfied Customers
              </p>
            </div>
          </div>

          <div className="flex h-12 w-[297px] max-w-full items-center justify-center gap-6 rounded-full border border-[#87909e] px-7">
            <span className="flex items-center gap-1.5 text-sm font-semibold text-[#159b59]">
              <StarSvg className="h-[15px] w-4 text-[#00b67a]" />
              Trustpilot
            </span>
            <span className="h-7 w-px bg-[#c8cbd0]" />
            <span className="text-sm font-semibold text-black">
              Google Rating
            </span>
          </div>
        </div>

        {/* testimonial cards */}
        <div className="mt-14 grid gap-3 text-left md:grid-cols-2">
          {testimonials.map(({ name, rating, text }) => (
            <figure
              key={name}
              className="min-h-[205px] rounded-[9px] border border-[#b0b0b0] px-6 pb-5 pt-6"
            >
              <figcaption className="text-base font-semibold leading-5 text-black">
                {name}
              </figcaption>
              <div className="mt-2">
                <Stars rating={rating} />
              </div>
              <blockquote className="mt-4 text-[14px] leading-7 text-[#526176]">
                {text}
              </blockquote>
              <p className="mt-5 flex items-center gap-1.5 text-[13px] leading-4 text-[#526176]">
                <VerifiedIcon />
                Verified Buyer
              </p>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

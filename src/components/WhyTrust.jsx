import mainImg from "../assets/main.png";

const features = [
  {
    n: "01",
    title: "Free Design Support",
    text: "Our expert design team fixes your artwork files for free ahead of print runs.",
    pos: "lg:col-start-1 lg:row-start-1",
  },
  {
    n: "02",
    title: "Fast Turnaround Time",
    text: "We deliver bulk custom boxes in just 12 to 15 days to keep your inventory fresh.",
    pos: "lg:col-start-1 lg:row-start-2",
  },
  {
    n: "03",
    title: "Live Support",
    text: "Get straight answers and timely feedback from our team whenever you need them.",
    pos: "lg:col-start-3 lg:row-start-1",
  },
  {
    n: "04",
    title: "Local US Manufacturing",
    text: "Skip frustrating freight delays easily with Print247’s local US production facility.",
    pos: "lg:col-start-3 lg:row-start-2",
  },
];

export default function WhyTrust() {
  return (
    <section className="px-4 pb-[71px]">
      <div className="mx-auto max-w-[1560px] rounded-[10px] bg-white px-4 pb-[51px] pt-[31.7px] lg:px-[47.3px]">
        {/* header row */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:pl-[9.5px] lg:pr-[6px]">
          <div>
            <h2 className="max-w-[1100px] text-[28px] font-medium leading-[1.25] text-black md:text-[40px] md:leading-[50px]">
              Why Established Brands Trust Print247 For Custom Boxes
            </h2>
            <p className="mt-6 max-w-[956px] text-base leading-5 text-black lg:min-h-[60px]">
              Brands leave their packaging needs to us because we give them more
              than just custom boxes. We deliver the right packaging right to
              your doorstep, eliminating the hassle of dealing with traditional
              vendors. Consult our team now.
            </p>
          </div>

          <a
            href="#quote"
            className="flex h-10 w-[177px] shrink-0 items-center justify-center rounded-full bg-black text-sm font-medium text-white lg:mb-[5px]"
          >
            Get Custom Quote
          </a>
        </div>

        {/* 3-column grid: features | image | features */}
        <div className="mt-[30.6px] grid gap-[10px] lg:grid-cols-[414.5fr_616.4fr_414.5fr] lg:grid-rows-2">
          <div className="relative min-h-[320px] overflow-hidden rounded-[10px] lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <img
              src={mainImg}
              alt="Custom printed box held in two hands"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          {features.map(({ n, title, text, pos }) => (
            <div
              key={n}
              className={`flex flex-col rounded-[10px] border border-black/[0.08] px-[22px] pb-[44px] pt-[39px] lg:h-[246.28px] ${pos}`}
            >
              <div className="flex h-[53px] w-[53px] items-center justify-center rounded-full bg-[#f6f2ef] text-[22px] font-medium uppercase leading-[1.1] text-black">
                {n}
              </div>

              <div className="pl-[3px]">
                <h3 className="mt-[22.5px] font-manrope text-lg font-semibold capitalize leading-[1.4] text-black">
                  {title}
                </h3>
                <p className="mt-[18px] font-manrope text-base capitalize text-[#111]">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
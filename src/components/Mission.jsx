export default function Mission() {
  return (
    <section className="px-4 pb-[69px]">
      <div className="mx-auto flex max-w-[1560px] flex-col gap-8 lg:flex-row lg:justify-between">
        <h2 className="text-[28px] font-medium leading-[1.25] text-black md:text-[40px] md:leading-[50px] lg:w-[750px] lg:shrink-0">
          Print247 is on a mission to provide leading brands with highly
          reliable customized packaging solutions at an affordable price.
        </h2>

        <div className="lg:mr-[33px] lg:mt-[13px] lg:w-[651px]">
          <p className="text-base capitalize leading-5 text-[#111]">
            Print247 runs a highly efficient production facility in the USA
            where we build custom boxes around your real packaging needs. Our
            solutions help your brand achieve cleaner presentation without
            compromising quality.
          </p>
          <a
            href="#quote"
            className="mt-12 inline-block text-base capitalize leading-5 text-[#111] underline"
          >
            Get Custom Quote
          </a>
        </div>
      </div>
    </section>
  );
}
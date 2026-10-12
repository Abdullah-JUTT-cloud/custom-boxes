import QuoteForm from "./QuoteForm";

export default function QuoteSection() {
  return (
    <section id="quote" className="px-4 pb-8">
      <div className="mx-auto max-w-[1560px] rounded-[10px] bg-white px-6 py-7 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,555px)] lg:gap-x-16 lg:px-9 lg:py-8">
        <div className="lg:pt-9">
          <h2 className="max-w-[450px] text-[28px] font-medium leading-[1.3] text-black md:text-[32px] md:leading-[41px]">
            Submit Your Wholesale Custom Box Order Now
          </h2>
          <p className="mt-6 max-w-[460px] text-sm capitalize leading-[1.45] text-[#111]">
            Contact our live support team today to secure your amazing bulk
            pricing and get started immediately. No hidden fees.
          </p>

          <div className="mt-12 flex flex-wrap gap-[5px] lg:mt-[190px]">
            <a
              href="tel:+18328073429"
              className="flex h-10 w-[190px] items-center justify-center rounded-full border border-black text-sm font-medium text-black"
            >
              +1 (832) 807-3429
            </a>
            <button
              type="button"
              className="flex h-10 w-[190px] items-center justify-center rounded-full bg-black text-sm font-medium text-white"
            >
              Live Chat
            </button>
          </div>
        </div>

        <QuoteForm className="mt-10 lg:mt-0" />
      </div>
    </section>
  );
}

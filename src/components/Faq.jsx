import { useState } from "react";

const faqs = [
  {
    q: "What is your minimum order quantity for customized packaging boxes?",
    a: "We require a minimum order quantity of 1000 customized box units. This order quantity helps us offer businesses the best wholesale pricing and maintain the highest quality standards.",
  },
  {
    q: "Do you offer digital proofs prior to final printing?",
    a: "Yes. We share a free digital proof of your artwork before anything goes to press. Nothing moves into production until you review the proof and give us the final approval.",
  },
  {
    q: "How long does custom box production take?",
    a: "Most custom box orders are produced and delivered within 12 to 15 days of artwork approval. If you are working with a tighter deadline, consult our team and we will confirm the fastest possible turnaround.",
  },
  {
    q: "Which material should I select for my item's packaging?",
    a: "It depends on your product's weight, shipping route, and budget. Kraft paperboard suits eco-friendly retail packaging, corrugated cardboard protects heavy or fragile items, SBS is ideal for cosmetic and food-grade boxes, and rigid chipboard works best for premium gift boxes. Our experts help you pick the right one.",
  },
  {
    q: "Do you provide sustainable packaging solutions that don’t harm the environment?",
    a: "Yes. We offer recyclable kraft paperboard and corrugated options paired with eco-friendly inks, so your packaging stays sustainable without compromising print quality or box strength.",
  },
  {
    q: "How does flat shipping benefit my wholesale packaging order?",
    a: "Flat shipping keeps your freight cost predictable with one fixed rate no matter the order size. Boxes ship flat, which cuts shipping costs and makes handling, storage, and assembly easier for your team.",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: {
      "@type": "Answer",
      text: a,
    },
  })),
};

function PlusIcon({ open }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 17 17"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 transition-transform duration-200 ${
        open ? "rotate-45" : ""
      }`}
    >
      <path
        d="M8.5 1.5v14M1.5 8.5h14"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="px-4 pb-24 pt-[10px] md:px-[29px]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div className="mx-auto max-w-[1600px]">
        <h2 className="text-[28px] font-normal leading-[1.25] text-black md:text-[40px] md:leading-[50px]">
          Frequently Asked Questions
        </h2>

        <div className="mt-[25px] grid items-start gap-5 md:grid-cols-2">
          {faqs.map(({ q, a }, i) => {
            const open = openIndex === i;
            return (
              <div
                key={q}
                className="rounded-[8px] border border-[#d1d1d1] px-3"
              >
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-4 text-left"
                >
                  <span className="text-[18px] font-normal leading-6 text-black">{q}</span>
                  <PlusIcon open={open} />
                </button>
                {open && (
                  <p className="pb-4 text-[16px] leading-[26px] text-black">{a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

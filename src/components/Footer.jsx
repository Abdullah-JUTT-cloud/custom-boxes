import logoWhite from "../assets/Print247 Original White logo.png";
import facebookIcon from "../assets/Facebook.png";
import instagramIcon from "../assets/Instaram.png";
import linkedinIcon from "../assets/LinkedIn.png";
import pinterestIcon from "../assets/Pinterest.png";
import mbeSeal from "../assets/mbe-seal.png";
import fpaBadge from "../assets/Asset 1.png";
import piaBadge from "../assets/Rectangle 30628.png";
import cfbBadge from "../assets/central-fort-bend-chamber.png";
import sfaBadge from "../assets/Design-Homepage.png";
import ncaBadge from "../assets/nca-logo-vector-onlynca.png";
import paymentIcons from "../assets/payment 1.png";

const socials = [
  { label: "Facebook", icon: facebookIcon },
  { label: "Instagram", icon: instagramIcon },
  { label: "Pinterest", icon: pinterestIcon },
  { label: "LinkedIn", icon: linkedinIcon },
];

const badges = [
  { name: "Minority Business Enterprise", src: mbeSeal, cls: "h-[30px] w-[30px] md:h-[42px] md:w-[42px]" },
  { name: "Flexible Packaging Association", src: fpaBadge, cls: "h-[23px] md:h-[32px]" },
  { name: "PIA, Services for Graphic Solutions", src: piaBadge, cls: "h-[18px] md:h-[24px]" },
  { name: "Central Fort Bend Chamber of Commerce", src: cfbBadge, cls: "h-[22px] w-[48px] md:h-[29px] md:w-[60px]" },
  { name: "Specialty Food Association", src: sfaBadge, cls: "col-start-2 h-[28px] w-[28px] md:h-[43px] md:w-[43px]" },
  { name: "National Candle Association", src: ncaBadge, cls: "col-start-3 h-[26px] md:h-[16px]" },
];

const contacts = [
  {
    label: "Phone",
    content: (
      <a href="tel:+18328073429" className="mt-[4px] block text-xs leading-[13px] text-white">
        +1 (832) 807-3429
      </a>
    ),
  },
  {
    label: "Email",
    content: (
      <a href="mailto:support@print247.us" className="mt-[4px] block text-xs leading-[13px] text-white">
        support@print247.us
      </a>
    ),
  },
  {
    label: "Address",
    content: (
      <p className="mt-[4px] text-xs leading-[13px] text-white">
        1631 Cottonwood School Rd,
        <br />
        Rosenberg, TX 77471, USA
      </p>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#000000]">
      <div className="px-[10px] pb-7 pt-[30px] md:px-6 md:pb-6 md:pt-[70px]">
        <a href="/" aria-label="Print247 home" className="flex justify-center">
          <img
            src={logoWhite}
            alt="Print247"
            loading="lazy"
            decoding="async"
            className="h-[30px] w-auto object-contain md:h-[40px]"
          />
        </a>

        {/* contact bar */}
        <div className="mx-auto mt-4 grid max-w-[998px] items-center rounded-[12px] border border-dashed border-white/45 md:mt-[46px] md:grid-cols-[180fr_250fr_246fr] md:rounded-[10px] md:border-white/100 md:py-[8px]">
          {contacts.map(({ label, content }, i) => (
            <div
              key={label}
              className={`px-6 py-[10.5px] text-center md:py-2 ${
                i < contacts.length - 1 ? "border-b border-white/30 md:border-b-0" : ""
              } ${
                i > 0 ? "md:border-l md:border-white/100" : ""
              }`}
            >
              <h3 className="text-[10px] font-medium uppercase leading-3 tracking-[0.08em] text-white/100 md:leading-normal">
                {label}
              </h3>
              {content}
            </div>
          ))}
        </div>

        {/* social icons */}
        <div className="mt-5 flex justify-center gap-[9px] md:mt-[45px] md:gap-[8px]">
          {socials.map(({ label, icon }) => (
            <a
              key={label}
              href="#"
              aria-label={label}
              className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-white/60 md:h-[32px] md:w-[32px]"
            >
              <img
                src={icon}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-[12px] w-[12px] md:h-[13px] md:w-[13px]"
              />
            </a>
          ))}
        </div>

        {/* certification badges */}
        <p className="mt-6 text-center text-[8px] font-medium uppercase tracking-[0.12em] text-white/60 md:mt-[40px]">
          <span className="md:hidden">Associated With</span>
          <span className="hidden md:inline">Certified By</span>
        </p>
        <div className="mt-4 grid grid-cols-4 items-center justify-items-center gap-x-2 gap-y-[10px] md:mt-5 md:flex md:flex-wrap md:justify-center md:gap-x-[36px] md:gap-y-4">
          {badges.map(({ name, src, cls }) => (
            <img
              key={name}
              src={src}
              alt={name}
              loading="lazy"
              decoding="async"
              className={`${cls} w-auto object-contain`}
            />
          ))}
        </div>

        {/* bottom bar */}
        <div className="mt-[64px] flex flex-col items-center gap-1 pl-4 pr-4 md:flex-row md:justify-between md:gap-4 md:pl-[56px] md:pr-[34px]">
          <p className="text-[11px] text-white/90">
            Print247.us © 2026, All Rights Reserved.
          </p>
          <div className="flex flex-col items-center gap-[3px] md:flex-row md:gap-[21px]">
            <p className="text-[11px] text-white/90">
              <span className="md:hidden">Payment Methods Accepted</span>
              <span className="hidden md:inline">
                We accept all major credit cards
              </span>
            </p>
            <img
              src={paymentIcons}
              alt="Wire Transfer, Zelle, Discover, Visa, PayPal, Mastercard and American Express"
              loading="lazy"
              decoding="async"
              className="h-[13px] w-[137px] object-contain md:w-[92px]"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

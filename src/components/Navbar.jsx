import logo from "../assets/logoB.png";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-[1560px] items-center justify-between px-4 pt-[31px]">
        <a href="/" aria-label="Print247 home">
          <img
            src={logo}
            alt="Print247"
            className="h-[35px] w-[143px] object-contain"
          />
        </a>

        <div className="flex items-center gap-1">
          <a
            href="tel:+18328073429"
            className="hidden h-10 w-[177px] items-center justify-center rounded-full border-[0.5px] border-[#b5a7a7] text-sm font-medium text-black sm:flex"
          >
            +1 (832) 807-3429
          </a>
          <a
            href="#quote"
            className="flex h-10 w-[177px] items-center justify-center rounded-full bg-black text-sm font-medium text-white"
          >
            Get Custom Quote
          </a>
        </div>
      </nav>
    </header>
  );
}
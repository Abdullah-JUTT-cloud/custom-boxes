const productTypes = [
  "Product Boxes",
  "Display Boxes",
  "Gift Boxes",
  "Square Boxes",
  "Mailer Boxes",
  "Cosmetic Boxes",
  "Kraft Boxes",
  "Apparel Boxes",
];
const units = ["Inch", "Cm", "Mm"];

const base =
  "w-full rounded-lg border border-[#c9c9c9] bg-white text-sm text-[#3e3b3b] outline-none placeholder:text-[#3e3b3b] focus:border-black";
const input = `${base} h-[44.5px]`;

function Chevron() {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      className="pointer-events-none absolute right-[15px] top-1/2 -translate-y-1/2"
    >
      <path
        d="M1 1l5 5 5-5"
        stroke="#3e3b3b"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Select({ className = "", children, ...props }) {
  return (
    <div className="relative">
      <select {...props} className={`${input} appearance-none pr-9 ${className}`}>
        {children}
      </select>
      <Chevron />
    </div>
  );
}

export default function QuoteForm({ className = "" }) {
  function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    console.log(data); // TODO: send to your backend
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col ${className}`}>
      <label
        htmlFor="productType"
        className="text-sm font-medium leading-[18px] text-black"
      >
        Product Type
      </label>

      <div className="mt-[10px] flex flex-col gap-[6px]">
        <Select
          id="productType"
          name="productType"
          required
          defaultValue=""
          className="pl-5"
        >
          <option value="" disabled>
            Select Your Product Type
          </option>
          {productTypes.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </Select>

        <div className="grid grid-cols-2 gap-[6px] sm:grid-cols-[1fr_1fr_1fr_96px]">
          {["Width", "Height", "Length"].map((label) => (
            <input
              key={label}
              name={label.toLowerCase()}
              inputMode="decimal"
              placeholder={label}
              aria-label={label}
              className={`${input} px-5`}
            />
          ))}
          <Select name="unit" defaultValue="Inch" aria-label="Unit" className="pl-[13.5px]">
            {units.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </Select>
        </div>

        <input
          name="quantity"
          inputMode="numeric"
          placeholder="Minimum Order Quantity 1000"
          aria-label="Quantity"
          className={`${input} px-[18px]`}
        />

        <textarea
          name="notes"
          placeholder="Share anything else our packaging team should know before preparing your quote."
          aria-label="Notes"
          className={`${base} h-[71.5px] resize-none px-[18px] pt-[13px]`}
        />
      </div>

      <p className="mt-[10px] text-sm font-medium leading-[18px] text-black">
        Personal Information
      </p>

      <div className="mt-[10px] flex flex-col gap-[6px]">
        <div className="grid gap-[6px] sm:grid-cols-2">
          <input
            name="name"
            required
            placeholder="e.g John Smith"
            aria-label="Full name"
            className={`${input} px-[18px]`}
          />
          <input
            name="phone"
            type="tel"
            placeholder="+1 xxx-xxx-xxxx"
            aria-label="Phone"
            className={`${input} px-3`}
          />
        </div>
        <input
          name="email"
          type="email"
          required
          placeholder="example@print247.us"
          aria-label="Email"
          className={`${input} px-[18px]`}
        />
      </div>

      <button
        type="submit"
        className="mt-[10px] flex h-[60px] w-full items-center justify-center gap-[11px] rounded-[15px] bg-black text-base font-medium text-white"
      >
        Get a Quote
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
          <path
            d="M1 5h10M7 1l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <p className="mt-5 text-sm font-medium leading-[18px] text-[#707070]">
        Once you submit your details, one of our expert team members will review
        them and contact you to discuss the project.
      </p>
    </form>
  );
}
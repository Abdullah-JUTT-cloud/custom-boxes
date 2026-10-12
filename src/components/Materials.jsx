const headers = ["Material", "Best for", "Typical thickness"];

const rows = [
  ["Kraft Paperboard", "Eco friendly retail packaging", "18pt – 24pt"],
  [
    "Corrugated Cardboard",
    "Shipping, heavy or fragile items",
    "3mm – 6mm (single/double wall)",
  ],
  ["SBS or Solid Bleached Sulfate", "Cosmetic and food-grade boxes", "12pt – 18pt"],
  ["Rigid Chipboard", "Premium gift and luxury boxes", "32pt – 80pt"],
];

export default function Materials() {
  return (
    <section className="px-[10px] pb-14 sm:px-4">
      <h2 className="mx-auto hidden max-w-[1070px] text-center text-[28px] font-medium leading-[1.25] text-black sm:block md:text-[40px] md:leading-[50px]">
        Pick the Most Suitable Packaging Material
      </h2>
      <p className="mx-auto mt-5 hidden max-w-[943px] text-center text-base capitalize leading-5 text-[#111] sm:block">
        We are currently offering various materials so you can choose one that
        fits your products, shipping needs, and budget. These materials offer an
        excellent printing surface and solid protection. Let our team help you
        pick the right one.
      </p>

      <div className="mx-auto mt-0 max-w-[1325px] rounded-[7px] border border-[#aaa] px-[14px] pb-[14px] pt-[13px] sm:hidden">
        <div role="table" aria-label="Packaging material comparison">
          <div
            role="row"
            className="grid grid-cols-[1.1fr_1fr] border-b border-[#c7c2bd] pb-[10px] text-[10px] leading-[14px] capitalize"
          >
            {headers.slice(0, 2).map((header) => (
              <span key={header} role="columnheader" className="pl-[1px]">
                {header}
              </span>
            ))}
          </div>

          {rows.map(([material, bestFor, thickness]) => (
            <div
              key={material}
              role="row"
              className="border-b border-[#e3e0dd] py-[13px] last:border-b-0"
            >
              <div className="grid grid-cols-[1.1fr_1fr] text-[10px] leading-3 capitalize">
                <span className="pl-[1px]">{material}</span>
                <span>{bestFor}</span>
              </div>
              <p className="mt-[7px] text-[10px] leading-3">
                <span className="capitalize">Typical Thickness:</span> {thickness}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-[11px] leading-4 text-black">
          Material thickness can vary by material grade and custom box style.
          Our experts perform a deep quality check on the material before the
          production begins. Your product and shipping route can help us
          determine the appropriate material.
        </p>
      </div>

      <div className="mx-auto mt-[46px] hidden max-w-[1325px] overflow-x-auto rounded-[10px] border border-[#7c7b7b] sm:block">
        <div className="min-w-[760px] px-[46px] pb-[30px] pt-[19px]">
          <table className="w-full table-fixed border-collapse text-left capitalize text-black">
            <colgroup>
              <col className="w-[35.6%]" />
              <col className="w-[46.5%]" />
              <col />
            </colgroup>

            <thead>
              <tr className="h-[49.7px] border-b border-[#7c7b7b]">
                {headers.map((h) => (
                  <th
                    key={h}
                    scope="col"
                    className="whitespace-nowrap pl-[3px] text-lg font-medium"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {rows.map((cells) => (
                <tr key={cells[0]} className="h-[58.5px] border-b border-[#e3e0dd]">
                  {cells.map((cell) => (
                    <td key={cell} className="whitespace-nowrap pl-[3px] text-base">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mt-5 pl-[3px] text-base capitalize leading-5 text-black">
            Material thickness can vary by material grade and custom box style.
            Our experts perform a deep quality check on the material before the
            production begins. Your product and shipping route can help us
            determine the appropriate material.
          </p>
        </div>
      </div>
    </section>
  );
}

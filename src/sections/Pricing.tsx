import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Sub 10 MP",
    monthlyPrice: 12,
    buttonText: "Sună acum",
    popular: false,
    inverse: false,
    features: ["Preluare", "Spălare", "Uscare", "Livrare"],
  },
  {
    title: "De la 10MP",
    monthlyPrice: 10,
    buttonText: "Sună acum",
    popular: true,
    inverse: true,
    features: ["Preluare", "Spălare", "Uscare", "Livrare", "Transport gratis"],
  },
];

export const Pricing = () => {
  return (
    <section className="py-5 flex justify-center bg-white">
      <div className="container flex flex-col items-center justify-center">
        <h2 className="text-center h1-style">Prețuri</h2>
        <p className="text-center p-style">
          Începând cu 10 metrii pătrați de covoare, transportul de la preluare
          pâna la livrare este gratuit iar prețul scade.
        </p>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-cen">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                key={title}
                className={twMerge(
                  "card",
                  inverse === true && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between items-center">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                      <span className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] text-transparent bg-clip-text font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    {monthlyPrice} RON
                  </span>
                  <span
                    className={twMerge(
                      "tracking-tight font-bold text-black/50",
                      inverse === true && "text-white/50"
                    )}
                  >
                    /MP
                  </span>
                </div>
                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    inverse === true && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="text-sm flex items-center gap-4"
                    >
                      <CheckIcon className="h-6 w-6" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

import CheckIcon from "@assets/";

const pricingTiers = [
  {
    title: "Sub 10 MP",
    monthlyPrice: 15,
    buttonText: "Sună acum",
    popular: false,
    inverse: false,
    features: ["Preluare", "Spălare", "Uscare", "Livrare"],
  },
  {
    title: "De la 10MP",
    monthlyPrice: 10,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: ["Preluare", "Spălare", "Uscare", "Livrare", "Transport gratis"],
  },
];

export const Pricing = () => {
  return (
    <section className="py-5 flex justify-center">
      <div className="container flex flex-col items-center justify-center">
        <h2 className="text-center h1-style">Prețuri</h2>
        <p className="text-center p-style">
          Începând cu 10 metrii pătrați de covoare, transportul de la preluare
          pâna la livrare este gratuit iar prețul scade.
        </p>
        <div>
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div>
                <h3>{title}</h3>
                <div>
                  <span>${monthlyPrice}</span>
                  <span>/month</span>
                </div>
                <button>{buttonText}</button>
                <ul>
                  {features.map((feature) => (
                    <li>
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

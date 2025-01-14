import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Covoare normale sub 10m²",
    monthlyPrice: 15,
    buttonText: "Sună acum",
    popular: false,
    features: [
      {
        text: "Curățare profesională",
        icon: (
          <svg className="w-4 h-4 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ),
      },
      {
        text: "Eliminare pete și mirosuri",
        icon: (
          <svg className="w-4 h-4 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        ),
      },
      {
        text: "Tratament antimicrobian",
        icon: (
          <svg className="w-4 h-4 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
      },
      {
        text: "Preluare și livrare",
        icon: (
          <svg className="w-4 h-4 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>
        ),
      },
      {
        text: "Transport contra cost",
        icon: (
          <svg className="w-4 h-4 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Covoare peste 10m²",
    monthlyPrice: "15/20",
    buttonText: "Sună acum",
    popular: true,
    features: [
      {
        text: "Transport gratuit",
        icon: (
          <svg className="w-4 h-4 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
          </svg>
        ),
      },
      {
        text: "15 RON/m² covoare normale",
        icon: (
          <svg className="w-4 h-4 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        text: "20 RON/m² covoare speciale",
        icon: (
          <svg className="w-4 h-4 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
      {
        text: "Toate serviciile incluse",
        icon: (
          <svg className="w-4 h-4 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
        ),
      },
    ],
  },
  {
    title: "Covoare speciale sub 10m²",
    monthlyPrice: 20,
    buttonText: "Sună acum",
    popular: false,
    features: [
      {
        text: "Curățare specializată",
        icon: (
          <svg className="w-4 h-4 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        ),
      },
      {
        text: "Tratament pentru păr de animale",
        icon: (
          <svg className="w-4 h-4 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        ),
      },
      {
        text: "Îngrijire specială pentru lână",
        icon: (
          <svg className="w-4 h-4 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        ),
      },
      {
        text: "Preluare și livrare",
        icon: (
          <svg className="w-4 h-4 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />
          </svg>
        ),
      },
      {
        text: "Transport contra cost",
        icon: (
          <svg className="w-4 h-4 text-[#FF0000]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
      },
    ],
  },
];

export const Pricing = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-gradient-to-br from-white via-red-50 to-white min-h-screen flex items-center py-16 sm:py-20 lg:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        {/* Large circle */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-gradient-to-br from-red-100/50 to-red-50 rounded-full translate-x-1/3 -translate-y-1/2"></div>
        
        {/* Small decorative circles */}
        <div className="absolute top-20 right-40 w-6 h-6 bg-red-100 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-4 h-4 bg-red-200 rounded-full"></div>
        <div className="absolute top-1/3 left-1/3 w-3 h-3 bg-red-100 rounded-full"></div>
        
        {/* Pattern dots */}
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 opacity-10">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-[1800px]">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="inline-block px-4 py-2 bg-red-50 text-[#FF0000] rounded-lg font-medium text-sm mb-4">
            Servicii și Prețuri
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
            Prețuri <span className="text-[#FF0000]">transparente</span> și competitive
          </h2>
          <p className="text-lg text-gray-600">
            Oferim servicii complete de curățare pentru toate tipurile de covoare. 
            Serviciul include atât ridicare cât și livrare la domiciliu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {pricingTiers.map(({
            title,
            monthlyPrice,
            buttonText,
            popular,
            features,
          }) => (
            <div
              key={title}
              className={twMerge(
                "relative bg-white rounded-2xl p-8 shadow-lg transition-transform duration-300 hover:scale-105",
                popular && "border-2 border-[#FF0000]"
              )}
            >
              {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF0000] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Cel mai solicitat
                </div>
              )}
              
              <div className="flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {title}
                </h3>
                
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-5xl font-bold text-[#FF0000]">
                    {monthlyPrice}
                  </span>
                  <span className="text-xl font-medium text-gray-600">
                    RON/m²
                  </span>
                </div>

                <ul className="flex-grow space-y-4 mb-8">
                  {features.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-center gap-3 text-gray-600"
                    >
                      <div className="w-5 h-5 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                        {feature.icon}
                      </div>
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="tel:0725629585"
                  className={twMerge(
                    "w-full py-4 rounded-xl text-center font-medium transition-all duration-300",
                    popular
                      ? "bg-[#FF0000] text-white hover:bg-[#E60000]"
                      : "bg-red-50 text-[#FF0000] hover:bg-red-100"
                  )}
                >
                  {buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

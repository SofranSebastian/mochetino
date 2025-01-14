import { twMerge } from "tailwind-merge";

const pricingTiers = [
  {
    title: "Covoare normale sub 10m²",
    monthlyPrice: "15",
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
    monthlyPrice: "20",
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
            popular,
            features,
          }) => (
            <div
              key={title}
              className={twMerge(
                "relative bg-white rounded-2xl p-6 shadow-lg transition-transform duration-300 hover:scale-105",
                popular && "border-2 border-[#FF0000]"
              )}
            >
              {popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF0000] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Cel mai solicitat
                </div>
              )}
              
              <div className="flex flex-col h-full">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {title}
                </h3>
                
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-[#FF0000]">
                    {monthlyPrice}
                  </span>
                  <span className="text-lg font-medium text-gray-600">
                    RON/m²
                  </span>
                </div>

                <ul className="flex-grow space-y-3 mb-6">
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
              </div>
            </div>
          ))}
        </div>

        {/* Contact buttons */}
        <div className="mt-16 text-center">
          <p className="text-lg text-gray-600 mb-8">
            Contactează-ne acum pentru o programare sau pentru mai multe detalii
          </p>
          <div className="flex items-center justify-center gap-8">
            <a
              href="tel:0725629585"
              className="w-16 h-16 bg-[#FF0000] hover:bg-[#E60000] text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
            <a
              href="https://wa.me/40725629585"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-[#25D366] hover:bg-[#20BD5C] text-white rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

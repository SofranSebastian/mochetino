const testimonials = [
  {
    text: "Felicitări! Albul din covoare se vede ca atunci când le-am cumpărat. Am dus covoarele și la alte spălătorii, dar niciunde nu au fost spălate atât de bine! Parfumate și livrate rapid. Recomand cu toată încrederea!",
    name: "Client Mulțumit",
  },
  {
    text: "Foarte multumita! Toate covoarele au venit foarte curate, pufoase si parfumate in 24 h 😊! Client multumit! Succes!",
    name: "Client Mulțumit",
  },
  {
    text: "Apreciez promptitudinea si profesionalismul echipei!",
    name: "Client Mulțumit",
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="min-h-screen flex items-center justify-center bg-gradient-to-r from-white to-red-50">
      <div className="container max-w-[1800px] px-0 sm:px-2 lg:px-4 py-24">
        <div className="flex flex-col items-center">
          <div className="inline-block px-4 py-2 bg-red-50 text-[#FF0000] rounded-lg font-medium text-sm mb-6">
            Păreri
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6 text-center">
            Ce spun <span className="text-[#FF0000]">clienții</span> noștri
          </h2>
          <p className="text-gray-600 text-lg mb-16 max-w-3xl text-center px-4">
            O mică afacere de familie care se ocupă cu spălarea covoarelor și reușește să redea strălucirea acestora în casele oamenilor. 
            Prin servicii personalizate, îndepărtăm murdăria și alergenii, revitalizând covoarele și îmbunătățind estetică locuințelor.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-8 lg:gap-12 w-full max-w-[1800px] px-6 sm:px-8 lg:px-12">
            {testimonials.map(({ text, name }) => (
              <div key={text} className="relative bg-white p-8 sm:p-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col min-h-[300px]">
                <div className="absolute -top-4 left-8 bg-[#FF0000] text-white p-2 rounded-lg shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <div className="flex-grow">
                  <div className="text-gray-700 text-lg leading-relaxed mt-4">
                    {text}
                  </div>
                </div>
                
                <div className="mt-auto pt-8">
                  <div className="w-16 h-0.5 bg-red-100 mb-4"></div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[#FF0000]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                      </svg>
                    </div>
                    <div className="flex flex-col">
                      <div className="font-semibold text-gray-800">{name}</div>
                      <div className="text-sm text-gray-500">Client verificat</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-12 italic flex flex-col sm:flex-row items-center justify-center gap-2 px-4">
            <span>* Toate recenziile sunt reale și pot fi verificate pe</span>
            <a 
              href="https://www.facebook.com/profile.php?id=61569051051211" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#FF0000] hover:text-[#E60000] font-medium inline-flex items-center gap-1 transition-colors whitespace-nowrap"
            >
              pagina noastră de Facebook
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

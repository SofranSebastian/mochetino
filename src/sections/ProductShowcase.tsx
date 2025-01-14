import Image from "next/image";
import productDescription from "@/assets/productDescription.png";

export const ProductShowcase = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-gradient-to-br from-white via-red-50 to-white min-h-screen flex items-center py-16 sm:py-20 lg:py-24">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        {/* Large circle */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-red-100/50 to-red-50 rounded-full -translate-x-1/3 translate-y-1/4"></div>
        
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
        <div className="grid max-[1300px]:grid-cols-1 min-[1300px]:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left side - Image */}
          <div className="relative max-[1300px]:order-2 w-full max-[1300px]:max-w-[650px] mx-auto">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={productDescription}
                alt="Product description"
                className="w-full h-auto"
              />
            </div>
            {/* Orange experience badge */}
            <div className="absolute -left-4 bottom-4 bg-[#FF4D00] text-white px-6 py-4 rounded-lg shadow-lg">
              <div className="text-3xl font-bold">24-48h</div>
              <div className="text-sm">Livrare</div>
            </div>
            {/* Pink shadow under image */}
            <div className="absolute -z-10 -bottom-8 -right-8 w-full h-full rounded-2xl bg-[#FF0000]/10"></div>
          </div>

          {/* Right side - Content */}
          <div className="max-w-2xl mx-auto min-[1300px]:mx-0 space-y-6 w-full max-[1300px]:max-w-[650px]">
            <div className="inline-block px-4 py-2 bg-red-50 text-[#FF0000] rounded-lg font-medium text-sm">
              Despre Noi
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
              Servicii <span className="text-[#FF0000]">profesionale</span> de curățare covoare
            </h2>
            
            <p className="text-gray-600 text-lg">
              Noua spălătorie de covoare MOCHETINO vă oferă servicii profesionale și convenabile! 
              Beneficiați de preluare și livrare GRATUITĂ la comenzi ce depășesc 10 mp de covoare.
              Program de luni până sâmbătă, 08:00 - 17:00.
            </p>
            <p className="text-gray-600 text-lg">
              Covoare impecabile, fără efort din partea dumneavoastră.
              Curățenia începe cu un simplu apel! Contactați-ne astăzi și lăsați-ne să ne ocupăm de tot.
            </p>

            <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
              {/* Separators for desktop */}
              <div className="hidden sm:block absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-24 bg-gray-200"></div>
              <div className="hidden sm:block absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-24 bg-gray-200"></div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#FF0000] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Calitate garantată</h3>
                <p className="text-gray-600">
                  Folosim tehnologii avansate și detergenți profesioniști pentru rezultate perfecte.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#FF0000] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Comunicare rapidă</h3>
                <p className="text-gray-600">
                  Răspundem prompt la solicitări și oferim servicii în timp util.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#FF0000] rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Transport gratuit</h3>
                <p className="text-gray-600">
                  Beneficiați de preluare și livrare gratuită la comenzi peste 10 mp.
                </p>
              </div>
            </div>

            <button className="mt-8 bg-[#FF0000] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#E60000] transition-all duration-300 inline-flex items-center gap-2">
              Citește Mai Mult
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

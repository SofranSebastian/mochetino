import LogoTag from "@/assets/MOCHETINO TAG.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center flex flex-col justify-center items-center">
      <div className="container flex flex-col justify-center">
        <LogoTag height={40} />
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a href="#home">Acasă</a>
          <a href="#about">Despre noi</a>
          <a href="#services">Tarife</a>
          <a href="#testimonials">Păreri</a>
          <a 
            href="tel:0725629585" 
            className="text-[#FF0000] hover:text-white hover:underline transition-colors"
          >
            Sună acum
          </a>
        </nav>
        <div className="flex flex-col justify-center gap-6 mt-6">
          <div className="flex justify-center gap-6">
            <a 
              href="https://www.facebook.com/profile.php?id=61569051051211"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BCBCBC] hover:text-[#FF0000] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
              </svg>
            </a>
            <a 
              href="https://wa.me/40725629585"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BCBCBC] hover:text-[#FF0000] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
            <a 
              href="https://www.tiktok.com/@mochetino"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#BCBCBC] hover:text-[#FF0000] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} MOCHETINO - Spalatorie covoare Timisoara. Toate drepturile sunt rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

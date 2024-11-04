import ArrowRight from "@/assets/ArrowRight.svg";
import Logo from "@/assets/MOCHETINO.svg";
import MenuIcon from "@/assets/MenuIcon.svg";

export const Header = () => {
  return (
    <header className="sticky top-0">
      <div className="flex justify-center items-center py-3 !bg-black !text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Îngrijire profesională pentru covoarele tale
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Curățare rapidă și eficientă – Începe acum!</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="py-4 px-4 bg-red">
        <div className="w-full">
          <div className="flex items-center justify-between">
            <Logo className="w-40" />
            <MenuIcon className="h-6 w-6 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight: -">
                Obține pe gratis!
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

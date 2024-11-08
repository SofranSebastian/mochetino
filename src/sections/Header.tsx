import ArrowRight from "@/assets/ArrowRight.svg";
import Logo from "@/assets/MOCHETINO.svg";
import MenuIcon from "@/assets/MenuIcon.svg";

export const Header = () => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      <div className="flex justify-center items-center py-3 !bg-black !text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Îngrijire profesională pentru covoarele tale
        </p>
        <div className="inline-flex gap-1 items-center">
          <p>Curățare rapidă și eficientă – Începe acum!</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>
      <div className="flex-1 py-4 px-4">
        <div className="flex items-center justify-between">
          <Logo className="object-contain w-[200px]" />
          <MenuIcon className="h-10 w-10 md:hidden" />
          <nav className="hidden md:flex mx-5 gap-6 text-black/60 items-center text-lg">
            <a href="#">About</a>
            <a href="#">Features</a>
            <a href="#">Customers</a>
            <a href="#">Updates</a>
            <a href="#">Help</a>
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight">
              Obține pe gratis!
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

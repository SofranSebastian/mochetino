import LogoTag from "@/assets/MOCHETINO TAG.svg";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center flex flex-col justify-center items-center">
      <div className="container flex flex-col justify-center">
        <LogoTag height={40} />
        <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className="flex flex-col justify-center gap-6 mt-6">
          <div className="flex justify-center gap-6">
            <SocialX />
            <SocialInsta />
            <SocialLinkedIn />
            <SocialPin />
            <SocialYoutube />
          </div>
          <p>&copy; 2024 MOCHETINO, SRL. Toate drepturile sunt rezervate.</p>
        </div>
      </div>
    </footer>
  );
};

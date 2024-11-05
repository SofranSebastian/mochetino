import ArrowRight from "@/assets/ArrowRight.svg";
import Image from "next/image";
import cogImage from "@/assets/pngegg.png";

export const Hero = () => {
  return (
    <section className="text-black pt-4 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_66%)]">
      <div className="py-4 px-4 md:flex flex-row">
        <div className=" md:py-3 md:px-3 md:flex md:items-start md:flex-col md:justify-center">
          <div className="tag">SOLUȚIA PENTRU COVOARELE MURDARE ESTE AICI</div>
          <h1 className="h1-style">
            Calea către relaxare în casa dumneavoastră.
          </h1>
          <p className="p-style">
            Dă-i viață covorului tău! Fiecare pas pe covorul tău aduce amintiri,
            dar și murdărie. Oferă-i ocazia de a străluci din nou! Spălarea
            covorului nu este doar o chestiune estetică, ci și o alegere
            sănătoasă. Elimină praful și alergenii pentru a te bucura de un aer
            mai curat în casă. Nu amâna! Transformă-ți spațiul și bucură-te de
            confortul unui covor curat!
          </p>
          <div className="flex gap-1 items-center mt-[30px]">
            <button className="btn btn-primary">Obține pe gratis</button>
            <button className="btn btn-text gap-1">
              <span>Află mai multe</span>
              <ArrowRight className="fill-black" />
            </button>
          </div>
        </div>
        <div className="md:flex">
          <Image
            src={cogImage}
            alt="Cog Image"
            className="mt-10 md:mt-0 md:relative md:items-center md:justify-center md:object-scale-down"
          />
        </div>
      </div>
    </section>
  );
};

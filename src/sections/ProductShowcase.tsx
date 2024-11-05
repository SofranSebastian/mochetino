import Image from "next/image";
import productDescription from "@/assets/productDescription.png";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-5 flex justify-center">
      <div className="container flex flex-col items-center justify-center">
        <div className="flex justify-center">
          <div className="tag">REZOLVĂ PROBLEMA DISCOMFORTULUI</div>
        </div>
        <h1 className="text-center h1-style">
          O nouă soluție pentru curățarea murdăriei de pe covoare.
        </h1>
        <p className="text-center p-style">
          Fără niciun efort din partea dumneavoastră, ne vom ocupa de preluarea
          covoarelor. Acestea vor fi curățate, iar apoi vi le vom returna în
          stare excelentă, astfel încât să vă bucurați din nou de ele fără
          griji. Echipa noastră se va ocupa de tot, asigurându-se că covoarele
          revin la dumneavoastră impecabile.
        </p>
        <Image
          src={productDescription}
          alt="Product description"
          className="mt-10"
        />
      </div>
    </section>
  );
};

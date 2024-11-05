import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const testimonials = [
  {
    text: "Serviciul a fost excelent! Covorul meu arată ca nou. Recomand cu căldură!",
    imageSrc: avatar1.src,
    name: "Maria D.",
    username: "@mariad",
  },
  {
    text: "Rapid și eficient! Foarte mulțumit de rezultate. Profesionalism la superlativ!",
    imageSrc: avatar2.src,
    name: "Andrei P.",
    username: "@andreip",
  },
  {
    text: "O experiență plăcută! Echipa a fost amabilă și covorul a fost curățat perfect.",
    imageSrc: avatar3.src,
    name: "Ioana L.",
    username: "@ioanal",
  },
  {
    text: "Sunt impresionat de atenția la detalii. Aroma proaspătă a covorului m-a surprins plăcut!",
    imageSrc: avatar4.src,
    name: "Cristian T.",
    username: "@cristiant",
  },
  {
    text: "Foarte mulțumită de servicii! Prețuri accesibile și rezultate vizibile.",
    imageSrc: avatar5.src,
    name: "Elena M.",
    username: "@elenam",
  },
  {
    text: "Am apelat la ei de mai multe ori. Nu m-au dezamăgit niciodată. Foarte calitativi!",
    imageSrc: avatar6.src,
    name: "Vlad S.",
    username: "@vlads",
  },
  {
    text: "Un serviciu de încredere! Covorul meu de lână s-a curățat perfect, fără a-i afecta textura.",
    imageSrc: avatar7.src,
    name: "Anca R.",
    username: "@ancar",
  },
  {
    text: "Promptitudine și profesionalism! Recomand cu siguranță tuturor celor care au nevoie de curățenie.",
    imageSrc: avatar8.src,
    name: "Ion C.",
    username: "@ionc",
  },
  {
    text: "Cea mai bună firmă de curățat covoare! Încredere și calitate garantată!",
    imageSrc: avatar9.src,
    name: "Roxana B.",
    username: "@roxanab",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
}) => (
  <div
    className={twMerge(
      "flex flex-col gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]",
      props.className
    )}
  >
    {props.testimonials.map(({ text, imageSrc, name, username }) => (
      <div key={text} className="card">
        <div>{text}</div>
        <div className="flex items-center gap-2 mt-5">
          <Image
            src={imageSrc}
            alt="name"
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <div className="flex flex-col">
            <div className="font-medium tracking-tight leading-5">{name}</div>
            <div className="leading-5 tracking-tight">{username}</div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const Testimonials = () => {
  return (
    <section className="py-5 flex justify-center bg-white">
      <div className="container flex flex-col items-center justify-center">
        <div className="tag">Păreri</div>
        <h2 className="text-center h1-style">Ce spun clienții noștrii</h2>
        <p className="text-center p-style">
          O mică afacere de familie care se ocupă cu spălarea covoarelor aduce
          prospețime și confort în casele oamenilor. Prin servicii
          personalizate, aceștia îndepărtează murdăria și alergenii,
          revitalizând covoarele și îmbunătățind estetică locuințelor.
        </p>
        <div className="flex justify-center gap-6">
          <TestimonialsColumn testimonials={firstColumn} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden sm:flex"
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden md:flex"
          />
        </div>
      </div>
    </section>
  );
};

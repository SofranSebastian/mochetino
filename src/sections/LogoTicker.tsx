"use client";
import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

const logos = [
  { src: acmeLogo, alt: "acme logo" },
  { src: quantumLogo, alt: "quantum logo" },
  { src: echoLogo, alt: "echo logo" },
  { src: celestialLogo, alt: "celestial logo" },
  { src: pulseLogo, alt: "pulse logo" },
  { src: apexLogo, alt: "apex logo" },
];

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white flex items-center justify-center">
      <div className="container flex flex-col justify-center items-center">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          {/* Motion Div for Ticker */}
          <motion.div
            className="flex gap-14 flex-nowrap"
            animate={{
              x: ["0%", "-100%"], // Animate completely to left
            }}
            transition={{
              duration: 15, // Set the duration as needed
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {/* Original logos */}
            {logos.map((logo, index) => (
              <Image
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="logo-ticker-image"
              />
            ))}
            {/* Duplicate the logos for a seamless flow */}
            {logos.map((logo, index) => (
              <Image
                key={index + logos.length}
                src={logo.src}
                alt={logo.alt}
                className="logo-ticker-image"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

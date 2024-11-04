import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",           // For files in pages
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",      // For general components
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",             // For files in app
    "./src/app/sections/**/*.{js,ts,jsx,tsx,mdx}",    // For files in sections inside app
    "./src/**/*.{js,ts,jsx,tsx,mdx}"                  // Catch-all for any additional files
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
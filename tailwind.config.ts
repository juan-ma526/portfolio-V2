import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        principal: "#FEE9CE",
        "flush-orange": {
          "50": "#fff9ed",
          "100": "#fff1d4",
          "200": "#ffdfa8",
          "300": "#ffc770",
          "400": "#ffa337",
          "500": "#ff8408",
          "600": "#f06c06",
          "700": "#c75107",
          "800": "#9e3f0e",
          "900": "#7f360f",
          "950": "#451905",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

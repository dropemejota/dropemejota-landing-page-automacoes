// tailwind.config.js
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#223B91",   // Azul principal
          pink: "#E72E6C",   // Rosa destaque
          gray: "#F6F6F6",   // Fundo claro
          dark: "#222222",   // Preto suave
          white: "#FFFFFF",  // Branco
        },
      },
    },
  },
  plugins: [],
};


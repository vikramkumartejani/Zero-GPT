import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "main-clr": "#1B243C",
        "white-blur-54": "#FFFFFF0F",
        "light-gray": "#D9D9D9"
      },
      colors:{
        "primary": "#151515",
        "secondary": "#020203",
        "dark-blue": "#1F3753",
      },
      fontFamily: {
        'helvetica': ['Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

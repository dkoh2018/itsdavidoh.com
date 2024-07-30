import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        darkSlate: "#1A202C",
        darkText: "#9CA3AF",
        "miami-blue": "#005DAB",
      },
    },
  },
  plugins: [],
};

export default config;

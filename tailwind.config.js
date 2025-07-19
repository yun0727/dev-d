/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        float: "float 3s ease-in-out infinite",
        zigzag: "zigzag 4s ease-in-out infinite",
        slide: "slide 8s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        // zigzag: {
        //   "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
        //   "25%": { transform: "translateY(-8px) translateX(5px)" },
        //   "50%": { transform: "translateY(-15px) translateX(0px)" },
        //   "75%": { transform: "translateY(-8px) translateX(-5px)" },
        // },
        // slide: {
        //   "0%": { transform: "translateX(0px)" },
        //   "50%": { transform: "translateX(-200px)" },
        //   "100%": { transform: "translateX(0px)" },
        // },
      },
    },
  },
  plugins: [],
};

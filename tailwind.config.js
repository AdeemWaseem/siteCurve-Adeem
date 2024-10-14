/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "hsla(243, 89%, 61%, 1)",
          link: "hsla(243, 67%, 61%, 1)",
          dark: "hsla(240, 47%, 24%, 1)",
        },
        dark: {
          DEFAULT: "hsla(220, 12%, 24%, 1)",
        },
        gray: {
          DEFAULT: "hsla(224, 10%, 42%, 1)",
          dark: "hsla(230, 15%, 23%, 1)",
        },
        indigo: {
          DEFAULT: "hsla(245, 100%, 10%, 1)",
          muted: "hsla(245, 36%, 72%, 1)",
          secondary: "hsla(246, 23%, 66%, 1)",
        },
        neutral: {
          DEFAULT: "hsla(245, 26%, 28%, 1)",
        },
        success: {
          DEFAULT: "hsla(137, 68%, 47%, 1)",
        },
        destructive: {
          DEFAULT: "hsla(4, 100%, 70%, 1)",
        },
      },
    },
  },
  plugins: [],
};

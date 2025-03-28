import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': {'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px'},
      'mb': {'max': '767px'},
      'gttb': {'min': '768px'},
      'tb': {'min': '768px', 'max': '1023px'},
      'pc': {'min': '1024px'},
    },
    extend: {
      keyframes: {
        shiftLeft: {
          '0%': { transform: 'translateX(0);' },
          '25%': { transform: 'translateX(0.75rem);' },
          '50%': { transform: 'translateX(1.25rem);' },
          '75%': { transform: 'translateX(0.75rem);' },
          '100%': { transform: 'translateX(0);' }
        },
        shiftRight: {
          '0%': { transform: 'translateX(0);' },
          '25%': { transform: 'translateX(-0.75rem);' },
          '50%': { transform: 'translateX(-1.25rem);' },
          '75%': { transform: 'translateX(-0.75rem);' },
          '100%': { transform: 'translateX(0);' }
        },
        zoom: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)" },
        },
        shake: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(2deg)" },
          "20%": { transform: "rotate(0deg)" },
          "30%": { transform: "rotate(-2deg)" },
          "40%": { transform: "rotate(0eg)" },
          "50%": { transform: "rotate(2eg)" },
          "60%": { transform: "rotate(0eg)" },
          "70%": { transform: "rotate(-2eg)" },
          "80%": { transform: "rotate(0eg)" },
          "90%": { transform: "rotate(2eg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        bounce: {
          "0%, 100%": {
            transform: "translateY(-7%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)"
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)"
          }
        },
        swing: {
          "0%": {
            transform: "skewX(0deg)",
            transformOrigin: "top",
          },
          "25%": {
            transform: "skewX(5deg)",
            transformOrigin: "top",
          },
          "75%": {
            transform: "skewX(-5deg)",
            transformOrigin: "top",
          },
          "100%": {
            transform: "skewX(0deg)",
            transformOrigin: "top"
          },
        },
        shockwaveJump: {
          "0%": { transform: "scale(1)" },
          "40%": { transform: "scale(1.24)" },
          "50%": { transform: "scale(0.92)" },
          "55%": { transform: "scale(1.08)" },
          "60%": { transform: "scale(0.92)" },
          "100%": { transform: "scale(1)" }
        },
        rounded: {
          "8.3%": { transform: "translate(39%, -39%)"},
          "16.6%": { transform: "translate(78%, -79%)"},
          "25%": { transform: "translate(117%, -120%)"},
          "33.3%": { transform: "translate(156%, -79%)"},
          "41.6%": { transform: "translate(196%, -39%)"},
          "50%": { transform: "translate(236%, 0%)"},
          "58.3%": { transform: "translate(196%, 39%)"},
          "66.6%": { transform: "translate(156%, 79%)"},
          "75%": { transform: "translate(117%, 120%)"},
          "83.3%": { transform: "translate(78%, 79%)"},
          "91.6%": { transform: "translate(39%, 39%)"},
          "100%": { transform: "translate(0%, 0%)"},
        }
      },
      animation: {
        'shift-left': 'shiftLeft 2.5s linear infinite',
        'shift-right': 'shiftRight 2.5s linear infinite',
        "zoom": "zoom 1.5s linear infinite",
        "shake": "shake 1s linear",
        "bounce": "bounce 1s infinite",
        "swing": "swing 5s ease-in-out infinite",
        "shockwaveJump": "shockwaveJump 1s ease-out infinite",
        "rounded": "rounded 1s cubic-bezier(0.42, 0, 0.58, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

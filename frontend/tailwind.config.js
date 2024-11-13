// Importing required plugins
import plugin from 'tailwindcss/plugin';
import iOSHeight from '@rvxlab/tailwind-plugin-ios-full-height';
import tailwindScrollbar from 'tailwind-scrollbar';
import headlessui from '@headlessui/tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: ["class", '[data-theme="dark"]'], // Supports dark mode based on CSS class or data attribute
  theme: {
    extend: {
      colors: {
        primary: {
          1: '#0c018c',
          2: '#331bcd',
          3: '#735ffa',
          4: '#be87ff',
          5: '#dabaff',
          6: '#e3cbff',
          7: '#ebdbff',
        },
        // Adding the neutral colors from the previous config
        n: {
          1: "#FCFDFE",
          2: "#F1F5F9",
          3: "#E3E9EE",
          4: "#7C878E",
          5: "#393E44",
          6: "#292D32",
          7: "#181B1F",
        },
        color: {
          1: "#FF66C2",
          2: "#066FF4",
          3: "#4BAB71",
          4: "#FFC224",
          5: "#FF6C3E",
        },
      },
      screens: {
        "max-h-950": { raw: "(max-height: 950px)" },
        "max-h-850": { raw: "(max-height: 850px)" },
        "4xl": { max: "1719px" },
        "2xl": { max: "1419px" },
        xl: { max: "1179px" },
        lg: { max: "1023px" },
        md: { max: "767px" },
        sm: { max: "480px" },
      },
      spacing: {
        0.25: "0.0625rem",
        0.75: "0.1875rem",
        4.5: "1.125rem",
        5.5: "1.375rem",
        6.5: "1.75rem",
        7.5: "1.875rem",
        8.5: "2.125rem",
        9.5: "2.375rem",
        13: "3.25rem",
        15: "3.75rem",
        17: "4.25rem",
        18: "4.5rem",
        19: "4.75rem",
        21: "5.25rem",
        22: "5.5rem",
        26: "6.5rem",
        30: "7.5rem",
        34: "8.5rem",
        38: "9.5rem",
        42: "10.5rem",
        54: "13.5rem",
        58: "14.5rem",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      borderRadius: {
        1: "0.0625rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        1: "0 1.5rem 2rem -1rem rgba(0, 0, 0, 0.1)",
        2: "0 1rem 1rem -0.25rem rgba(0, 0, 0, 0.1)",
        modal: "0 0.125rem 0.5rem rgba(0, 0, 0, 0.05), 0 2.75rem 3rem -0.75rem rgba(0, 0, 0, 0.15), 0 0 1.5rem 0.25rem rgba(0, 0, 0, 0.05)",
      },
      opacity: {
        15: ".15",
        25: ".25",
        85: ".85",
        95: ".95",
      },
    },
  },
  plugins: [
    headlessui({ prefix: 'ui' }),
    tailwindScrollbar,
    iOSHeight,
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({
        html: {
          '@apply text-[1rem]': {},
        },
      });
      addComponents({
        ".btn": {
          "@apply inline-flex items-center justify-center h-12 px-5.5 border-2 border-transparent rounded-3xl text-base-2 font-semibold transition-colors disabled:opacity-20 disabled:pointer-events-none":
              {},
        },
        ".btn-blue-dark": {
          "@apply btn bg-primary-2 border-primary-2 text-n-1 fill-n-1 hover:bg-primary-2/90 hover:border-transparent":
              {},
        },
        ".btn-purple": {
          "@apply btn bg-primary-3 border-primary-3 text-n-1 fill-n-1 hover:bg-primary-3/95 hover:border-transparent":
              {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
}

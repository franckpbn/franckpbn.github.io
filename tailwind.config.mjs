/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      color: {},
      fontFamily: {
        bebas: ["Bebas Neue", "sans-serif"],
        source : ["Source Sans 3", "serif"],
        embed : ["DynaPuff", "system-ui"]
      },
    },
  },
  plugins: [],
};

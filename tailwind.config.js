// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Update based on your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        greatVibes: ['"Great Vibes"', "cursive"],
        yatraOne: ['"Yatra One"', "sans-serif"],
      },
    },
  },
  plugins: [],
};



/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ], 

  theme: {
    extend: {},
    screens: {
      'pxs': {'max': '330px'},
      // => @media (max-width: 1535px) { ... }

      'ps': {'max': '390px'},
      // => @media (max-width: 1279px) { ... }

      'pm': {'max': '450px'},
      // => @media (max-width: 1023px) { ... }

      'sd': {'max': '800px'},
      // => @media (max-width: 767px) { ... }

      'lx': {'max': '1050px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}
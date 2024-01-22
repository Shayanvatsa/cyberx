/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx, js}"],
  theme: {
    screens: {
      "mini": {'max':"600px"},
      "md":'1200px'
    },
  },
  plugins: [],
}


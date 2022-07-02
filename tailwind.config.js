module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {



          "primary": "#F46B5B",

          "secondary": "#f43f5e",

          "accent": "#A7A7A7",

          "neutral": "#383838",

          "base-100": "#FFFFFF",

          "info": "#3ABFF8",

          "success": "#36D399",

          "warning": "#FBBD23",

          "error": "#e11d48",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    daisyui: {
      themes: [
        {
          mytheme: {
            primary: "#00cec9",
            secondary: "#00b894",
            accent: "#37cdbe",
            neutral: "#3d4451",
            "base-100": "#ffffff",
          },
        },
        "dracula",
        "cupcake",
      ],
    },
  },
  plugins: [require("daisyui")],
}

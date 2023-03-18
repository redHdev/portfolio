module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    boxShadow : {
      "tech_icon" : "5px 4px 3px rgba(89, 4, 168, 0.137)",
      "project_view" : "0 4px 3px rgba(119, 53, 136, 0.459)",
      "project_view_hover" : "0 4px 4px rgba(129, 72, 144, 0.561)",
    },
    extend: {
      zIndex : {
        '-1' : '-1'
      },
      colors : {
        "white" : "#000",
        "Main_color" : "#cd5ff8",
        "block_footer" : "#a588c0",
        "strive" : "rgb(155 126 172)",
        "border_color" : "rgba(200, 137, 230, 0.637)",
        "border_hover" : "rgba(197, 115, 230, 0.883)",
        "nav_color" : "#1b1a2ea9",
        "footer_color" : "rgb(10, 4, 22)"
      },
      backgroundImage: {
        'Main_bg': "linear-gradient(to bottom left, rgba(17, 16, 16, 0.678),rgba(12, 8, 24, 0.863)), url(./Assets/home-bg.jpg)",
        "section_background_color" : "linear-gradient(to bottom left, rgba(17, 16, 16, 0.678),rgba(12, 8, 24, 0.863))"
      }
    },
  },
  plugins: [],
}

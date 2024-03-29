module.exports = {
  content: [
    "./src/**/*.{html,js,css,jsx,ts,tsx}",
    "./public/index.html",
    "./src/screens",
  ],
  theme: {
    screens: {
      sm: "480px",
      xs: "320px",
      md: "567px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1200px",
      "4xl": "1440px",
    },
    extend: {
      // backgroundImage: {
      //   AuthBackground: 'url("@assets/images/background.png")',
      //   BgOverlay: 'url("@assets/images/overlay.png")',
      // },
      colors: {
        color172: "rgb(172,172,172)",
        color175: "rgb(175,175,175)",
        color236: "rgb(236,236,236)",
        color239: "rgb(239,239,239)",
        color203: "rgb(203,203,203)",
        color206: "rgb(206,206,206)",
        color207: "rgb(207,207,207)",
        color225: "rgb(225 225 225)",
        color235: "rgb(235,235,235)",
        color232: "rgb(232,232,232)",
        color249: "rgb(249,249,249)",
        color229: "rgb(229,229,229)",
        color102: "rgb(102,102,102)",
        color112: "rgb(112 112 112)",
        color12: "rgb(124 125 126)",
        color139: "rgb(139,139,139)",
        color155: "rgb(155 155 155)",
        color165: "rgb(165,165,165)",
        color233: "rgb(233, 236, 239)",
        color215: "rgb(2,121,255)",
        button: "rgb(251,251,251)",
        b2bButton: "rgb(211,206,210)",
        borderColor: "rgb(172,172,172)",
        asideBarBgColor: "rgb(251,251,253)",
        color64: "rgb(64,64,64)",
        color51: "rgb(51,51,51)",
        color74: "rgb(74,74,74)",
        color456: "rgb(46,56,66)",
        color889: "rgb(80,87,94)",
        headerBack: "rgb(46,56,66)",
        footerText: "rgb(48,47,47)",
        borderLine: "rgb(0,0,0, 0.24)",
        blue: "rgb(0,93,255)",
        maplsite: "rgb(155,4,191)",
        logoColor: "rgb(239 39 44)",
        linkColor: "rgb(8, 82, 178)",
        green: "rgb(0,197,105)",
        transparentBg: "rgba(0,0,0,0.5)",
        searchBg: "rgb(4,4,4, 0.5)",
        yellowGreen: "rgb(199, 255, 79)",
        yellowDark: "rgb(255, 230, 3)",
        roundActive: "rgb(117,117,117)",
      },
      boxShadow: {
        "3xl": "0 2px 17px 0 rgba(14, 12, 29, 0.13)",
        headerShadow: "0 2px 6px 0 rgb(14 12 29 / 4%)",
        cartBtn: "0 3px 6px 0 rgb(0, 0, 0, 0.10)",
        cartShadow: "0px 2px 6px 0 rgba(0, 0, 0, 0.2)",
      },
      fontFamily: {
        sm: "Source Sans, sans-serif",
        openSans: "Open Sans, sans-serif",
        raleway: "Raleway, sans-serif",
        roboto: "Roboto, sans-serif",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};

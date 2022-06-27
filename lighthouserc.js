module.exports = {
  ci: {
    // assert: {
    //   preset: "lighthouse:recommended",
    // },
    collect: {
      staticDistDir: "./public",
      autodiscoverUrlBlocklist: [
        "offline-plugin-app-shell-fallback/index.html",
      ],
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
}

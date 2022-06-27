module.exports = {
  ci: {
    // TODO assertions add assertions
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

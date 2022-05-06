module.exports = {
  ci: {
    // TODO assertions add assertions
    // assert: {
    //   preset: "lighthouse:recommended",
    // },
    collect: {
      staticDistDir: "./public",
    },
    upload: {
      target: "temporary-public-storage",
    },
  },
}

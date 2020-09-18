module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        corejs: { version: 3, proposals: true }
      }
    ]
  ]
}

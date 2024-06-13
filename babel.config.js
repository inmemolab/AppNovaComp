/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  presets: ["module:@react-native/babel-preset", "@babel/preset-env", "@babel/preset-react", "@babel/preset-typescript"],
  plugins: [
    "react-native-reanimated/plugin",
    "@babel/plugin-transform-flow-strip-types",
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          "@src": "./src",
          "@assets": "./src/assets",
          "@fonts": "./src/assets/fonts",
          "@svg": "./src/assets/svg",
          "@clients": "./src/clients",
          "@components": "./src/components",
          "@navigation": "./src/navigation",
          "@screens": "./src/screens",
          "@store": "./src/store",
          "@theme": "./src/theme",
          "@utils": "./src/utils",
        }
      }
    ],
    ["@babel/plugin-transform-runtime", { "regenerator": true }]
    ["@babel/plugin-transform-class-properties", {loose: true}],
    ["@babel/plugin-transform-private-methods", {loose: true}]
  ]
};

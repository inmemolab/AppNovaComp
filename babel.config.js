/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  presets: ["module:@react-native/babel-preset"],
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
          "@animation": "./src/assets/animation",
          "@fonts": "./src/assets/fonts",
          "@icons": "./src/assets/icons",
          "@images": "./src/assets/images",
          "@svg": "./src/assets/svg",
          "@clients": "./src/clients",
          "@components": "./src/components",
          "@config": "./src/config",
          "@constants": "./src/constants",
          "@context": "./src/context",
          "@debug": "./src/debug",
          "@helpers": "./src/helpers",
          "@hooks": "./src/hooks",
          "@locales": "./src/locales",
          "@mocks": "./src/mocks",
          "@models": "./src/models",
          "@navigation": "./src/navigation",
          "@pipes": "./src/pipes",
          "@schemas": "./src/schemas",
          "@screens": "./src/screens",
          "@services": "./src/services",
          "@store": "./src/store",
          "@theme": "./src/theme",
          "@utils": "./src/utils"
        }
      }
    ],
    ["@babel/plugin-transform-class-properties", {loose: true}],
    ["@babel/plugin-transform-private-methods", {loose: true}]
  ]
};

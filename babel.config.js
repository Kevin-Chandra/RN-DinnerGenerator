module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [
            ".ios.js",
            ".android.js",
            ".js",
            ".ts",
            ".tsx",
            ".json",
            ".d.ts",
          ],
          alias: [
            { "@app": "./src/app/" },
            { "@core": "./src/core/" },
            { "@resources": "./src/resources/" },
            { "@ui": "./src/ui/" },
            { "@utils": "./src/utils/" },
          ],
        },
      ],
    ],
  };
};

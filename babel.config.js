// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Ensure 'react-native-reanimated/plugin' is last
      "react-native-reanimated/plugin",
    ],
  };
};

const withTM = require("next-transpile-modules")(["@designcode/react-ui"]);

module.exports = withTM({
  reactStrictMode: true,
});

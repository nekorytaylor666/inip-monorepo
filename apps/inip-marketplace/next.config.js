const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([], {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
});

const withSass = require("@zeit/next-sass");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer(
    withSass({
        /* config options here */
        /* webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(png|svg|jpg|gif)$/,
            use: ["file-loader"]
        });

        return config;
    } */
    })
);

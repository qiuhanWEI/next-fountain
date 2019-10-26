const withSass = require('@zeit/next-sass');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
});
const withCss = require('@zeit/next-css');
const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');

module.exports = withPlugins([withSass, withCss, withTM, withBundleAnalyzer], {
    transpileModules: ['antd'],
    webpack: (config, {webpack, isServer}) => {
        config.module.rules.push({
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        });

        config.plugins.push(new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/))
        if (!isServer) {
            config.optimization.splitChunks.cacheGroups.commons.minChunks = 2;
          }
        return config;
    }
});
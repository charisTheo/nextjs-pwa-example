
// ? https://github.com/goldhand/sw-precache-webpack-plugin
// const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

// ? https://www.npmjs.com/package/next-workbox-webpack-plugin
// const nextWorkboxWebpackPlugin = require('next-workbox-webpack-plugin');

// const CopyWebpackPlugin = require('copy-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  webpack: config => {
    config.plugins.push(
      new InjectManifest({
        swSrc: 'service-worker.js',
        exclude: [
          'react-loadable-manifest.json', 
          'build-manifest.json'
        ]
      }),
      // new SWPrecacheWebpackPlugin({
      //   verbose: true,
      //   staticFileGlobsIgnorePatterns: [/\.next\//],
      //   runtimeCaching: [
      //     {
      //       handler: 'networkFirst',
      //       urlPattern: /^https?.*/,
      //     },
      //   ],
      // })
    )

    return config
  },
}

const withSass = require('@zeit/next-sass')
const webpack = require('webpack')

module.exports = withSass({
  webpack: (config, { dev }) => {
    // Add polyfill for IE 10 & 11
    const originalEntry = config.entry
    config.entry = async () => {
      const entries = await originalEntry()

      if (entries['main.js'] && !entries['main.js'].includes('./client/polyfills.js')) {
        entries['main.js'].unshift('./client/polyfills.js')
      }

      return entries
    }

    // Add eslint on compilation
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      exclude: /node_modules/,
      loader: 'eslint-loader',
      options: {
        emitWarning: dev
      }
    })
    config.plugins.push(new webpack.EnvironmentPlugin(process.env))

    return config
  }
})

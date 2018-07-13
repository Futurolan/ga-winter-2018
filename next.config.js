require('dotenv').config()
const withSass = require('@zeit/next-sass')
const webpack = require('webpack')

module.exports = withSass({

  webpack: (config, { dev }) => {
    config.module.rules.push(
      {
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: dev
        }
      }

    )
    config.plugins.push(
      new webpack.EnvironmentPlugin(process.env)
    )

    return config
  }

})

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const base = require('./webpack.base.config')
module.exports = merge(base, {
  name: 'client',
  target: 'web',
  watch: true,
  devServer: {
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      __isClient__: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
})

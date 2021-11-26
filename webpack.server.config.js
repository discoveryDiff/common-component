const merge = require('webpack-merge')
const base = require('./webpack.base.config')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-plugin')
module.exports = merge(base, {
  name: 'server',
  target: 'node',
  watch: false,
  devServer: {
    writeToDisk: true
  },
  output: {
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new MiniCssExtractPlugin({ // 分离
      filename: 'dist/[name].[hash].css'
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: {
        map: {
          inline: false, // 不生成内联映射
          annotation: true // css source-map 路径注释
        }
      }
    }) // 压缩
  ],
  module: {
    rules: [{
      test: /\.(scss|less)$/,
      include: ['src'],
      use: [MiniCssExtractPlugin.loader, 'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            config: {
              path: ''
            }
          }
        },
        'less-loader']
    }]
  }
})

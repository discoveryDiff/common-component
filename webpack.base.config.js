const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
  entry: 'index.ts',
  devtool: 'eval-cheap-module-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][hash].js'
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|js)$/,
        use: [{
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: [
              [
                '@babel/env',
                {
                  targets: '> 0.25%, not dead',
                  modules: false,
                  useBuiltIns: false
                }
              ], [
                '@babel/preset-typescript'
              ], [
                '@babel/preset-react',
                {
                  development: true
                }
              ]
            ],
            plugins: []
          }
        }]
      },
      {
        test: /\.(png|jpeg|svg)$/,
        loader: 'url-loader'
      },
      {
        test: /\.(scss|less)$/,
        include: [path.resolve('./src')],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          {
            loader: 'less-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.tsx'],
    modules: [path.resolve('./src'), 'node_modules']
  },
  optimization: {
    minimize: true
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}

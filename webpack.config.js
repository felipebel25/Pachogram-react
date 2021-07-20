/* eslint-disable prefer-regex-literals */
// webpack.config.js
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
// const WorkboxWebpackPlugin = require('workbox-webpack-plugin')

const path = require('path')
module.exports = {
  mode: 'development',
  output: {
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  devServer: {

    historyApiFallback: true,
    liveReload: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new WebpackPwaManifestPlugin({
      name: 'Pachogram - App de fotos ',
      shortname: 'pachito',
      description: 'Pachogram galeria de fotos domesticos guaus y miaus',
      background_color: '#fff',
      theme_color: '#b1a',
      display: 'standalone',
      scope: '/',
      start_url: '/',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'any maskable' // <-- Añade esta línea
        }
      ]
    })
    // new WorkboxWebpackPlugin.GenerateSW({
    //   runtimeCaching: [
    //     {
    //       urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
    //       handler: 'CacheFirst',
    //       options: {
    //         cacheName: 'images'
    //       }
    //     },
    //     {
    //       urlPattern: new RegExp('https://miaugrams-8tsja3evs-felipebel25.vercel.app/'),
    //       handler: 'NetworkFirst',
    //       options: {
    //         cacheName: 'api'
    //       }
    //     }
    //   ]
    // })
  ],

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {

            plugins: ['@babel/plugin-syntax-dynamic-import'],
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  }
}

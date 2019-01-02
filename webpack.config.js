const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const defaultWebpackConfig = require('terra-toolkit/config/webpack/webpack.config');
const merge = require('webpack-merge');

// Create the app-level configuration
const appWebpackConfig = () => ({
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8080
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: ['@babel/react', '@babel/preset-env']
            }
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './src/index.html'
      })
   ]
});

// combine the configurations using webpack-merge
const mergedConfig = (env, argv) => (
  merge(defaultWebpackConfig(env, argv), appWebpackConfig(env, argv))
);

module.exports = mergedConfig;
const { resolve } = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    options: './src/options.tsx',
    background: './src/background.ts',
    contentScript: './src/contentScript.tsx',
    injectionScript: './src/injectionScript.ts',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack', 'url-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        type: 'asset/resource',
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '~components': resolve(__dirname, 'src/components'),
      '~constants': resolve(__dirname, 'src/constants'),
      '~domains': resolve(__dirname, 'src/domains'),
      '~hooks': resolve(__dirname, 'src/hooks'),
      '~images': resolve(__dirname, 'src/images'),
      '~types': resolve(__dirname, 'src/types'),
      '~utils': resolve(__dirname, 'src/utils'),
      '~styles': resolve(__dirname, 'src/styles'),
    },
  },
  output: {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/options.html',
      filename: 'options.html',
      chunks: ['options'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public' },
        { from: './src/styles/*.css', to: '[name][ext]' },
      ],
    }),
    new EslintWebpackPlugin({
      extensions: ['tsx', 'ts', 'js'],
      exclude: ['/node_modules/'],
    }),
    new webpack.DefinePlugin({
      'process.env.BUILD_DATE': JSON.stringify(
        new Date().toLocaleDateString('ko-KR'),
      ),
    }),
  ],
};

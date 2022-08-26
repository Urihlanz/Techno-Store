const MiniCSSExtactPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const stylesLoader = (isSass) => {
  const loader = {
    use: [
      MiniCSSExtactPlugin.loader,
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              [
                'autoprefixer',
              ],
            ],
          },
        },
      },
    ],
    sideEffects: true,
  };

  return isSass ? { ...loader, use: [...loader.use, 'sass-loader'] } : loader;
};

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    bundle: './index.tsx',
  },
  output: {
    filename: '[name].[contenthash:8].js',
    path: path.resolve(__dirname, './dist'),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new CleanWebpackPlugin(),
    new MiniCSSExtactPlugin({
      filename: '[name].[contenthash:8].css',
    }),
  ],
  performance: {
    hints: false
  },
  devServer: {
    contentBase: path.join(__dirname, './dist'),
    compress: true,
    port: 7000,
    watchContentBase: true,
    progress: true,
    historyApiFallback: true,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts)$/,
        exclude: /node_modules/,
        use: ['ts-loader'],
      },
      {
        test: /\.s[ac]ss$/i,
        ...stylesLoader(true),
      },
      {
        test: /\.css$/i,
        ...stylesLoader(false),
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        include: [path.join(__dirname, '../src/fonts')]
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

    ],
  },
  devtool: 'source-map',
};

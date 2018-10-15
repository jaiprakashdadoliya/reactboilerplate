const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html"
});


const miniCssPlugin = new MiniCssExtractPlugin({
    filename: "styles/[name].css"
  })

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
      test: /\.css/,
      use: [
        'css-hot-loader',
        MiniCssExtractPlugin.loader,
        'css-loader'
      ]
    },
      { 
        test: /\.(png|jpeg|jpg|woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader?limit=100000' 
      }
    ]
  },
  plugins: [htmlPlugin, miniCssPlugin]
};
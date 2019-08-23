var path = require("path");
var HtmlwebpackPlugins = require("html-webpack-plugin");
//把css从js里独立出来
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSCSS = new ExtractTextPlugin("stylesheets/[name]-one.css");

//定义一些文件夹的路径
var ROOt_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOt_PATH, "app");
var BUILD__PATH = path.resolve(ROOt_PATH, "build");

module.exports = {
  entry: APP_PATH,
  //输出的文件名
  output: {
    path: BUILD__PATH,
    filename: "bundle.js"
  },
  module: {
    rules: [
      //   {
      //     test: /\.css$/,
      //     use: ["style-loader", "css-loader"]
      //   },
      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: "css-loader"
            },
            {
              loader: "sass-loader"
            }
          ],
          fallback: "style-loader"
        })
      }
      //   {
      //     test: /\.scss$/,
      //     use: ExtractTextPlugin.extract({
      //       fallback: 'style-loader',
      //       use: ['css-loader', 'sass-loader']
      //     })
      //   }
    ]
  },
  //添加我们的插件会自动生成一个html文件
  plugins: [
    new HtmlwebpackPlugins({
      title: "hello world app"
    }),
    new ExtractTextPlugin("style.css")
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true
  }
};

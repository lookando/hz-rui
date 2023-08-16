const path = require('path');
const webpack = require('webpack');
const webpackConfigBase = require('./webpack.base.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);
function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}

const webpackConfigDev = {
  mode: 'development',
  context: path.resolve('./src'),
  entry: {
    app: [resolve('../src/index.js')],
  },

  output: {
    path: resolve('../lib'),
    filename: 'hz-react-component.js',
  },

  devtool: 'cheap-module-eval-source-map',

  resolve: {
    // 设置别名
    alias: {
      // __dirname  可以获取被执行 js 文件的绝对路径
      //'@': resolve(__dirname,'src')// 这样引入的写法引入const {resolve } = require('path') 
      '@': resolveApp('src')// 这样配置后 @ 可以指向 src 目录
      //当然，别名写更深层也可以   前提是你得有这个目录啊！！
    }
  },

  devServer: {
    contentBase: resolve('../lib'),
    hot: true,
    open: true,
    host: 'localhost',
    port: 8080,
  },

  plugins: [
    new HtmlWebpackPlugin({ template: '../public/index.html', }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}

module.exports = merge(webpackConfigBase, webpackConfigDev)

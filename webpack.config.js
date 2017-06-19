var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/app.js',
    output: {
        path: __dirname + "/dist",
        filename: './app.bundle.js'
    },
    plugins: [new HtmlWebpackPlugin({
    title: 'Project',
    minify: {
        collapseWhitespace: false
    },
    hash: true,
    template: './src/js/index.html', // Load a custom template (ejs by default see the FAQ for details)
  })]
}
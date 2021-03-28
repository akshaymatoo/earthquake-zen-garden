// module bundler . Inteligently bundles all the files that we can access in index.js

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './app/index.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: 'main.js',
		publicPath: '/',
	},
	devServer: {
      historyApiFallback: true
  },
	module: {
		rules: [
			{ test: /\.(js)$/, exclude: /node_modules/,use: 'babel-loader'},
			{ test: /\.css$/, use: ['style-loader', 'css-loader']},
			{
            test: /\.(png|j?g|svg|gif)?$/,
            use: 'file-loader'
      },
      {
        test: /\.json5$/i,
        loader: 'json5-loader',
        options: {
          esModule: true,
        },
        type: 'javascript/auto',
      },
		]
	},
	mode: 'development',
	plugins : [
		new HtmlWebpackPlugin({
			template: path.resolve( __dirname, 'public/index.html' ),
      filename: 'index.html'
		})
	]
};
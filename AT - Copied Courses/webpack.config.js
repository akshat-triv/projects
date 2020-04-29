const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry : ['babel-polyfill','./js/scripts original.js'],
	output : {
		path: path.resolve(__dirname,'./'),
		filename : 'js/scripts.js'
	},
	devServer : {
		contentBase : './'
	},
	plugins : [
		new HtmlWebpackPlugin({
			filename : 'index.html',
			template : './index.html'
		})
	],
	module : {
		rules : [
			{
				test : /\.js$/,
				exclude : /node_modules/,
				use : {
					loader : 'babel-loader'
				}
			}
		]
	}
};
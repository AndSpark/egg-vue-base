const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

// 提取CSS文件
// const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
	mode: 'development',
	resolve: {
		extensions: ['.js', '.vue'],
		alias: {
			app: path.resolve(__dirname, '../../../app'),
		},
	},

	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		filename: '[name].bundle.js',
	},

	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.pug$/,
				loader: 'pug-plain-loader',
			},
			{
				test: /\.js$/,
				use: 'babel-loader',
			},
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					// MiniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
				],
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					// MiniCssExtractPlugin.loader,
					'css-loader',
					'sass-loader',
					{
						loader: 'sass-resources-loader',
						options: {
							resources: [
								path.resolve(__dirname, '../src/asset/style/mixin.scss'),
							],
						},
					},
					'postcss-loader',
				],
			},
			{
				test: /\.(jpg|jpeg|png|gif|svg)$/,
				use: {
					loader: 'url-loader',
					options: {
						limit: 10000, // 10Kb
					},
				},
			},
		],
	},

	plugins: [
		new VueLoaderPlugin(),
		// new MiniCssExtractPlugin({ filename: 'common.css' }),
	],
}

'use strict'
const webpack = require('webpack')
const ClientConfig = require('./web/config/webpack.client.config')
const ServerConfig = require('./web/config/webpack.server.config')
const complier = webpack([ClientConfig, ServerConfig])

const watching = complier.watch(
	{
		aggregateTimeout: 300,
		ignored: /node_modules/,
		poll: 1000,
	},
	(err, stats) => {
		console.log('watching change')
	}
)
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app
	router.get('*', controller.home.index)
}

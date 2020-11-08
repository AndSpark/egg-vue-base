'use strict'
const webpack = require('webpack')
const ClientConfig = require('./web/config/webpack.client.config')
const ServerConfig = require('./web/config/webpack.server.config')
const complier = webpack([ClientConfig, ServerConfig])

const ws = require('nodejs-websocket')

const server = ws
	.createServer(connection => {
		connection.on('text', function(str) {
			console.log(str)
		})
		connection.on('connect', function(code) {
			console.log('开启连接', code)
		})
		connection.on('close', function() {
			console.log('watching change')
		})
		connection.on('error', function() {
			console.log('watching change')
		})
	})
	.listen(3333)

const watching = complier.watch(
	{
		aggregateTimeout: 300,
		ignored: /node_modules/,
		poll: 1000,
	},
	(err, stats) => {
		console.log('watching')
		server.connections.forEach(function(conn) {
			console.log('refresh')
			conn.sendText('refresh')
		})
		if (err) {
			console.log(err)
		}
	}
)
/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
	const { router, controller } = app
	router.get(/(\.js|\.css|\.png|\.jpg)$/, controller.static.index)
	router.get('*', controller.home.index)
}

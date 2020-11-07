'use strict'

const Controller = require('egg').Controller
const { createBundleRenderer } = require('vue-server-renderer')
const path = require('path')
const fs = require('fs')
const cheerio = require('cheerio')

class HomeController extends Controller {
	async index() {
		const { ctx } = this
		if (ctx.url.includes('.js')) {
			let file = fs.readFileSync(
				path.join(__dirname, '../web/dist', ctx.url),
				'utf-8'
			)
			ctx.set('Content-Type', 'application/javascript')
			return (ctx.body = file)
		}

		let serverBundle = require(path.resolve(
			__dirname,
			'../web/dist/vue-ssr-server-bundle.json'
		))
		let clientManifest = require(path.resolve(
			__dirname,
			'../web/dist/vue-ssr-client-manifest.json'
		))
		let template = fs.readFileSync(
			path.resolve(__dirname, '../web/dist/index.ssr.html'),
			'utf-8'
		)
		let renderer = createBundleRenderer(serverBundle, {
			runInNewContext: false,
			template,
			clientManifest,
		})
		const wsScript = `
		<script>
		console.log('WebSocket')
		const ws = new WebSocket('ws://localhost:3333/')
		ws.onmessage = function(){
			console.log('refresh')
			window.location.reload()
		}
		</script>
		`

		try {
			let html = await renderer.renderToString(ctx)
			let $ = cheerio.load(html)
			$('body').append(wsScript)
			html = $.html()
			// fs.writeFileSync(path.join(__dirname, '../static', 'index.html'), html)
			ctx.status = 200
			ctx.type = 'html'
			ctx.body = html
		} catch (error) {
			console.log(error)
		}
	}
}

module.exports = HomeController

const Service = require('egg').Service
const { createBundleRenderer } = require('vue-server-renderer')
const path = require('path')
const fs = require('fs')
const cheerio = require('cheerio')

class ViewService extends Service {
	async render() {
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
			let html = await renderer.renderToString(this.ctx)
			let $ = cheerio.load(html)
			$('body').append(wsScript)
			return $.html()
			// fs.writeFileSync(path.join(__dirname, '../static', 'index.html'), html)
		} catch (error) {
			console.log(error)
			return error
		}
	}
}

module.exports = ViewService

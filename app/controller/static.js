const Controller = require('egg').Controller
const fs = require('fs')
const path = require('path')

class StaticController extends Controller {
	async index() {
		const { ctx } = this
		let file = fs.readFileSync(
			path.join(__dirname, '../web/dist', ctx.url),
			'utf-8'
		)
		if (ctx.url.match(/\.js$/)) {
			ctx.set('Content-Type', 'application/javascript')
		} else if (ctx.url.match(/\.css$/)) {
			ctx.set('Content-Type', 'text/css')
		} else if (ctx.url.match(/\.(jpg|jpeg)$/)) {
			ctx.set('Content-Type', 'image/jpg')
		} else if (ctx.url.match(/\.png)$/)) {
			ctx.set('Content-Type', 'image/png')
		}
		ctx.body = file
	}
}

module.exports = StaticController

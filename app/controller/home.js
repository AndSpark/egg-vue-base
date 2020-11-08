'use strict'

const Controller = require('egg').Controller
class HomeController extends Controller {
	async index() {
		const { ctx } = this
		const html = await ctx.service.view.render()
		ctx.body = html
	}
}

module.exports = HomeController

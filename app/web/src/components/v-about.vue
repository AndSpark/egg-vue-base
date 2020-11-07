<template lang="pug">
#v-about
  .about-title
    span 关于我们
  .about-txt
    p
      span 久合-国内专业 
      span 钕铁硼磁钢 
      span 供应商
  .about-num(class="container")
    .row
      .num-item(class='col-md-4')
        .item-l
          img(:src="icon1")
        .item-r
          h3 管理认证体系
          p 公司已通过质量管理体系认证、环境管理体系认证、职业健康安全管理体系认证等认证。
      .num-item(class='col-md-4')
        .item-l
          img(:src="icon2")
        .item-r
          h3 现代化高科技设备50余台
          p 专业研发生产制造钕铁硼磁钢产品
      .num-item(class='col-md-4')
        .item-l
          img(:src="icon3")
        .item-r
          h3 年产钕铁硼磁钢1800余吨
          p 在国内各大中城市建立了销售网点，产品并远销欧美、日本、东南亚等多个国家和地区
  .about-content
    .content-img
    .content-txt
      .container
        h3 宁波久合磁材有限公司
        p 钕铁硼磁钢行业中的一颗璀璨明珠——宁波久合磁材有限公司，它坐落在世界瞩目的“中国长三角经济圈中最具发展潜力的前沿战略要地”杭州湾跨海大桥南岸杭州湾新区东出口2公里处，距宁波港、宁波栎社机场60公里，到杭州萧山国际机场、上海浦东国际机场约1小时车程。公司自03年成立以来（原慈溪市豪英车业有限公司），本着“以技术求发展，以品质求生存，以客户为第一”的宗旨，凭藉“顶尖团队精细管理，技术创新模式保障；高端客户战略联盟，打造行业领先品牌”的经营战略...
        .content-btn
          a(href="#") 查看 更多 | >
</template>

<script>
import icon1 from 'app/web/src/asset/img/icon1'
import icon2 from 'app/web/src/asset/img/icon2'
import icon3 from 'app/web/src/asset/img/icon3'
export default {
	name: 'v-about',
	components: {},
	props: {},
	data() {
		return {
			icon1,
			icon2,
			icon3,
		}
	},
	computed: {},
	methods: {},
}
</script>

<style lang="scss">
#v-about {
	.about-title {
		text-align: center;
		margin-top: 4rem;
		margin-bottom: 2rem;
		span {
			padding: 0.5rem 2rem;
			border-radius: 0.5rem;
			background-color: $green;
			color: #fff;
			font-size: 1.3rem;
		}
	}
	.about-txt {
		padding-bottom: 2rem;
		text-align: center;
		p {
			font-size: 1.3rem;
			span:nth-of-type(2) {
				color: $green;
			}
		}
		@include border-b($gray);
	}
	.about-num {
		.num-item {
			display: flex;
			padding: 3rem 0.5rem;

			.item-l {
				border-radius: 50%;
				background: #23ba85;
				width: 126px;
				height: 126px;
				text-align: center;
				margin: 0 30px 0 0;
				position: relative;
				transition: all 0.3s ease 0s;
			}
			.item-r {
				padding-top: 2rem;
				padding-right: 1rem;
				h3 {
					color: $green;
					font-size: 1.2rem;
					font-weight: 700;
					padding-bottom: 1rem;
				}
				p {
					color: #777;
				}
			}
		}
	}
	.about-content {
		position: relative;
		height: 600px;
		.content-img {
			height: 600px;
			width: 100%;
			z-index: -1;
			position: absolute;
			background-size: cover;
		}
		.content-txt {
			z-index: 10;
			width: 100%;
			height: 600px;
			background-color: rgba(0, 0, 0, 0.6);

			.container {
				height: 100%;
			}
			h3 {
				color: #fff;
				font-size: 2rem;
				font-weight: 700;
				padding-top: 12rem;
			}
			p {
				color: #fff;
				font-size: 1rem;
				text-indent: 3rem;
				line-height: 2.2rem;
				margin: 3rem 0;
			}
			.content-btn {
				margin: 0 auto;
				width: 9rem;
				border: 1px solid #fff;
				padding: 0.5rem 0rem;
				@include btn-anim($green);
				a {
					color: #fff;
					font-size: 1rem;
					padding: 0.5rem 1rem;
					z-index: 9;
					position: relative;
				}
			}
		}
	}
}
</style>

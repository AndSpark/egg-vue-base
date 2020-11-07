<template lang="pug">
#v-header
  .container
    .header-l
      h2
        a(href="#") {{name}}
    .header-r
      ul#nav
        li(v-for="item in nav")
          a(href='#') {{item}}
        li
          a(href="#") EN
</template>
<script>
export default {
	name: 'v-header',
	components: {},
	props: {},
	data() {
		return {
			name: '企业名称',
			nav: ['首页', '公司简介', '产品展示', '新闻资讯', '企业文化', '联系我们'],
		}
	},
	computed: {},
	methods: {},
}
</script>
<style lang="scss">
#v-header {
	position: fixed;
	top: 0;
	background-color: #fff;
	z-index: 99;
	width: 100%;
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 6rem;
		border-bottom: 1px solid $gray;
		.header-l {
			flex: 1;
			h2 {
				a {
					font-size: 3rem;
					color: $green;
					@include anim-b-b($green);
				}
			}
		}
		.header-r {
			flex: 2;
			line-height: 6rem;
			ul {
				display: flex;
				li {
					a {
						padding: 0 1rem;

						width: 100%;
						display: block;
						font-size: 1.2rem;
						font-weight: 100;
						color: #333;
						@include anim-b-b($green);

						&:hover {
							color: $green;
						}
						span {
							padding-left: 0.5rem;
						}
					}
				}
			}
		}
	}
}
@media screen and (max-width: 768px) {
	#v-header {
		.container {
			height: 4rem;
			.header-l h2 {
				a {
					font-size: 2rem;
				}
			}
			.header-r {
				display: none;
			}
		}
	}
}
</style>

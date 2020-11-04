<template>
	<div>
		<h2>ABOUT</h2>
		<router-link to="/">
			<button>go home</button>
		</router-link>
		<h1>{{ bar }}</h1>
	</div>
</template>

<script>
export default {
	asyncData({ route, store }) {
		return store.dispatch('fetchBar')
	},
	name: 'About',
	components: {},
	props: {},
	data() {
		return {}
	},
	computed: {
		bar() {
			return this.$store.state.bar
		},
	},
	mounted() {
		this.$store.dispatch('fetchBar')
	},
	methods: {},
}
</script>

<style lang="scss" scoped></style>

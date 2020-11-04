<template>
	<div id="home">
		<h2>Home Page</h2>
		<router-link to="/about">
			<button>去about</button>
		</router-link>
		<button @click="onHandleClick">aaaaa</button>
	</div>
</template>

<script>
export default {
	name: 'Home',
	components: {},
	props: {},
	data() {
		return {}
	},
	computed: {},
	methods: {
		onHandleClick() {
			alert(1111111)
		},
	},
}
</script>

<style lang="scss" scoped>
h2 {
	color: red;
}
</style>

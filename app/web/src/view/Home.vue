<template lang="pug">
	#home
		h2 Home Page
		button(@click="onHandleClick") 按钮
		router-link(to="/about") go about 
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

<style lang="scss">
h2 {
	color: $green;
}
</style>

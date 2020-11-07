<template lang="pug">
	#app
		h2 APP PAGE
		router-view 
		button(@click="show") show
</template>

<script>
export default {
	name: 'App',
	components: {},
	props: {},
	data() {
		return {}
	},
	computed: {},
	methods: {
		show() {
			alert('show')
		},
	},
}
</script>

<style lang="scss"></style>

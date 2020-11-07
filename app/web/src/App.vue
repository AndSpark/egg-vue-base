<template lang="pug">
	#app
		vHeader
		vAbout
</template>

<script>
import vHeader from 'app/web/src/components/v-header'
import vAbout from 'app/web/src/components/v-about'
export default {
	name: 'App',
	components: {
		vHeader,
		vAbout,
	},
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

<style lang="scss">
#app {
	padding-top: 6rem;
}
</style>

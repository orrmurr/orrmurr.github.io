<template lang="pug">
.manager(:style="{ width: defaultDesktopWindowOptions.width + 'px', height: defaultDesktopWindowOptions.height + 'px' }").bg-grey-5
	span projects
</template>

<script>
export default {
	data() {
		return {
			defaultDesktopWindowOptions: {
				width: 0,
				height: 0,
				top: 0,
				left: 0,
			},
		}
	},
	props: {
		desktopWindowOptions: {
			type: Object,
			required: false,
		},
	},
	beforeMount() {
		// console.log(this.desktopWindows.length)
		// console.log(this.desktopWindowOptions)
		if (this.desktopWindowOptions)
			this.defaultDesktopWindowOptions = this.desktopWindowOptions
		else {
			this.defaultDesktopWindowOptions.width = window.innerWidth / 2
			this.defaultDesktopWindowOptions.height = window.innerHeight / 2
		}
	},
}
</script>

<style lang="sass" scoped>
.manager
	position: absolute
</style>

<template lang="pug">
//- .window(:style="{ width: desktopWindowOptions.width + 'px' }").bg-grey-5
//- 	span projects
.window.bg-grey-5
	span projects
</template>

<script>
export default {
	data() {
		return {
			desktopWindowOptions: {
				width: 100,
				height: 100,
				top: 100,
				left: 100,
			},
		}
	},
	// props: {
	// 	desktopWindowOptions: {
	// 		type: Object,
	// 		required: true,
	// 	},
	// },
}
</script>

<style lang="sass" scoped></style>

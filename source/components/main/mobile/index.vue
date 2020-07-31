<template lang="pug">
.desktop.col-12.row.justify-center.content-center
	button(v-for="(desktopProgram, desktopProgramKey) in mainProgramList", :key="desktopProgramKey").row.justify-center.desktopProgram
		q-img(:src="desktopProgram.icon").col-12.desktopProgramIcon
		span.col-12.q-pt-xs.text-capitalize.non-selectable.desktopProgramText {{ desktopProgram.name }}
</template>

<script>
export default {
	props: {
		mainProgramList: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="sass" scoped>
$menuBarHeight: 32px
$desktopHeight: calc(100% - #{$menuBarHeight})

.desktop
	width: inherit
	height: $desktopHeight

.desktopProgram
	width: 10rem
	height: 10rem
	border: unset

.desktopProgramIcon
	width: 8rem
	font-size: 5rem

.desktopProgramText
	font-size: 1.4rem
</style>

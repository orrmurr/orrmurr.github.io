<template lang="pug">
	.dock
		button(v-for="(dockProgram, dockProgramKey) in dockProgramList", :key="dockProgramKey").dockProgram
			q-img(:src="dockProgram.icon").dockIcon
</template>

<script>
export default {
	props: {
		dockProgramList: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="sass" scoped>
.dock
	position: absolute
	bottom: 0
	border: 1px solid rgba(0,0,0,0.1)
	border-radius: 1rem 1rem 0 0
	background-color: rgba(235,235,235,0.7)
	box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.25)
	// grid-gap: 1rem
	padding: 1.6rem

.dockProgram
	border: unset
	padding: 0 0.5rem
	-webkit-box-reflect: below 4px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(0.7, transparent) , to(rgba(255, 255, 255, 0.1)))
	transition: all 0.3s
	transform-origin: center 140%

	&:hover
		transform: scale(2)
		margin: 0 2rem

	&:hover + .dockProgram
		transform: scale(1.5)
		margin: 0 2rem

.dockIcon
	width: 6rem
	font-size: 5rem
</style>

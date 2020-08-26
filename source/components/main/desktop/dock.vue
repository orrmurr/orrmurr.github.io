<template lang="pug">
.dock.self-center
	button(v-if="dockProgram.show.dock" v-for="(dockProgram, dockProgramKey) in $store.state.sessionStorage.programList" :key="dockProgramKey").dockProgram
		q-img(:src="dockProgram.icon").dockIcon
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.dock
	height: 94px
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
	transform-origin: center 110%

	&:hover
		transform: scale(2)
		margin: 0 4rem
		padding-bottom: 2rem

	&:hover
		+ .dockProgram
			transform: scale(1.5)
			margin: 0 2rem
			padding-bottom: 1rem

.dockIcon
	width: 6rem
</style>

<template lang="pug">
.dock.row
	button(v-if="dockProgram.show.mobile.dock" v-for="(dockProgram, dockProgramKey) in $store.state.programList" :key="dockProgramKey").dockProgram.col
		q-img(:src="dockProgram.icon").dockIcon
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.dock
	padding: 1.6rem
	background-color: rgba(235,235,235,0.7)
	box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.25)
	backdrop-filter: blur(2px)

.dockProgram
	border: unset

.dockIcon
	width: 6rem
</style>

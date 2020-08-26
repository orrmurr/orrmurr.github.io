<template lang="pug">
.dock.row
	button(v-if="dockProgram.show.dock" v-for="(dockProgram, dockProgramKey) in $store.state.sessionStorage.programList" :key="dockProgramKey").dockProgram.col
		q-img(:src="dockProgram.icon").dockIcon
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.dock
	padding: 1.6rem

.dockProgram
	border: unset

.dockIcon
	width: 6rem
</style>

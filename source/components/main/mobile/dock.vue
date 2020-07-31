<template lang="pug">
.dock.col-12.row
	button(v-for="(dockProgram, dockProgramKey) in dockProgramList", :key="dockProgramKey").dockProgram.col
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
	padding: 1.6rem

.dockProgram
	border: unset

.dockIcon
	width: 6rem
</style>

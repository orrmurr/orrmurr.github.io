<template lang="pug">
.desktop.row.justify-center.items-center
	button(v-for="(desktopProgram, desktopProgramKey) in $store.state.sessionStorage.programList.main", :key="desktopProgramKey", @click="desktopProgramClick").row.justify-center.desktopProgram
		q-img(:src="desktopProgram.icon").col-12.desktopProgramIcon
		span.col-12.q-pt-xs.text-capitalize.non-selectable.desktopProgramText {{ $t(desktopProgram.name) }}
</template>

<script>
export default {
	methods: {
		desktopProgramClick(event) {
			console.log(event.target)
			this.$store.state.sessionStorage.programList.main.pop()
		},
	},
}
</script>

<style lang="sass" scoped>
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

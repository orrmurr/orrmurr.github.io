<template lang="pug">
.desktop(@drag="desktopDrag" @dragend="desktopDragEnd").row.justify-center.items-center
	button(v-if="desktopProgram.show.main" v-for="(desktopProgram, desktopProgramKey) in $store.state.sessionStorage.programList" :key="desktopProgramKey" draggable @dragstart="desktopProgramDragStart" @click="desktopProgramClick").row.justify-center.desktopProgram
		q-img(:src="desktopProgram.icon").col-12.desktopProgramIcon
		span.col-12.q-pt-xs.text-capitalize.non-selectable.desktopProgramText {{ $t(desktopProgram.name) }}
</template>

<script>
export default {
	data() {
		return {
			mousePositionForSelectedProgram: { x: 0, y: 0 },
		}
	},
	methods: {
		desktopProgramDragStart(event) {
			this.mousePositionForSelectedProgram.x = event.offsetX
			this.mousePositionForSelectedProgram.y = event.offsetY
		},
		desktopDrag(event) {
			event.target.style.zIndex = 1
			this.setProgramPosition()
		},
		desktopDragEnd(event) {
			event.target.style.zIndex = ""
			this.setProgramPosition()
		},
		setProgramPosition() {
			event.target.style.top =
				event.clientY - this.mousePositionForSelectedProgram.y + "px"
			event.target.style.left =
				event.clientX - this.mousePositionForSelectedProgram.x + "px"
		},
		desktopProgramClick(event) {
			// ;(async () => {
			// 	const sessionStorageGet = await this.$store.dispatch(
			// 		"sessionStorage/get",
			// 		"programList"
			// 	)
			// 	console.log(sessionStorageGet)
			// })()

			// this.$store.dispatch("sessionStorage/set", [
			// 	"programList",
			// 	[
			// 		{
			// 			icon: "https://image.flaticon.com/icons/svg/3231/3231661.svg",
			// 			name: "Profile",
			// 			show: {
			// 				main: true,
			// 				dock: true,
			// 				launchpad: true,
			// 			},
			// 		},
			// 	],
			// ])
			console.log(this.$store.state.sessionStorage.programList)
		},
	},
}
</script>

<style lang="sass" scoped>
.desktopProgram
	position: absolute
	width: 10rem
	height: 10rem
	border: unset

.desktopProgramIcon
	width: 8rem
	font-size: 5rem

.desktopProgramText
	font-size: 1.4rem
</style>

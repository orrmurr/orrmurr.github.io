<template lang="pug">
.desktop(@drag="desktopDrag" @dragend="desktopDragEnd").row.justify-center.items-center
	button(v-if="desktopProgram.show.main" v-for="(desktopProgram, desktopProgramKey) in $store.state.sessionStorage.programList" :key="desktopProgramKey" draggable @dragstart="desktopProgramDragStart" @click="desktopProgramClick").row.justify-center.desktopProgram
		q-img(:src="desktopProgram.icon").col-12.desktopProgramIcon
		span.col-12.q-pt-xs.text-capitalize.non-selectable.desktopProgramText {{ $t(desktopProgram.name) }}
</template>

<script>
import { dragStart, drag, dragEnd } from "@/assets/scripts/drag"

export default {
	methods: {
		desktopProgramDragStart() {
			dragStart()
		},
		desktopDrag() {
			drag()
		},
		desktopDragEnd() {
			dragEnd()
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
$desktopProgramSize: 10rem

.desktopProgram
	position: absolute
	width: $desktopProgramSize
	height: $desktopProgramSize
	border: unset

	&:nth-child(1)
		top: 6rem
		right: 3rem

	&:nth-child(2)
		top: $desktopProgramSize + 9rem
		right: 3rem

.desktopProgramIcon
	width: 8rem
	font-size: 5rem

.desktopProgramText
	font-size: 1.4rem
</style>

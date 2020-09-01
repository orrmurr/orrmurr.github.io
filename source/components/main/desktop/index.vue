<template lang="pug">
.desktop.row.justify-center.items-center
	button(v-if="desktopProgram.show.main" v-for="(desktopProgram, desktopProgramKey) in $store.state.sessionStorage.programList" :key="desktopProgramKey" @dblclick="desktopProgramDoubleClick(desktopProgram)").row.justify-center.desktopProgram
		q-img(:src="desktopProgram.icon").col-12.desktopProgramIcon
		span.col-12.q-pt-xs.text-capitalize.non-selectable.desktopProgramText {{ $t(desktopProgram.name) }}
		.desktopProgramClickArea.fit
	component(v-for="(desktopWindow, desktopWindowKey) in desktopWindows" :is="desktopWindow")
</template>

<script>
import { set as setDraggingAndTouching } from "@/assets/scripts/draggingAndTouching"
import managerWindow from "@/components/main/desktop/windows/manager"
// import projectsWindow from "@/components/main/desktop/windows/projects"

export default {
	data() {
		return {
			desktopWindows: [],
		}
	},
	methods: {
		desktopProgramDoubleClick(desktopProgram) {
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
			// console.log(this.$store.state.sessionStorage.programList)
			// if (desktopProgram.name === "Projects")
			this.desktopWindows.push(managerWindow)
		},
	},
	mounted() {
		setDraggingAndTouching(document.getElementsByClassName("desktopProgram"), {
			padding: { x: [0, 0], y: [50, 100] },
		})
	},
}
</script>

<style lang="sass" scoped>
$desktopProgramWidth: 10rem

.desktopProgram
	position: absolute
	width: $desktopProgramWidth
	border: unset

	&:nth-child(1)
		top: 6rem
		right: 3rem

	&:nth-child(2)
		top: $desktopProgramWidth + 9rem
		right: 3rem

.desktopProgramIcon
	width: 8rem
	font-size: 5rem

.desktopProgramText
	font-size: 1.4rem

.desktopProgramClickArea
	position: absolute
</style>

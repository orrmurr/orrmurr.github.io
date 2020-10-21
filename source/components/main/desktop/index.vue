<template lang="pug">
.desktop.row.justify-center.items-center
	button.desktopProgram.row.justify-center(
		v-if="desktopProgram.show.desktop.main",
		v-for="(desktopProgram, desktopProgramKey) in $store.state.programList",
		:key="desktopProgramKey",
		@dblclick="desktopProgramDoubleClick(desktopProgram)"
	)
		q-img.desktopProgramIcon.col-12(:src="desktopProgram.icon")
		span.desktopProgramText.col-12.q-pt-xs.text-capitalize.non-selectable {{ $t(desktopProgram.name) }}
		.desktopProgramClickArea.fit
	component(
		v-for="(desktopWindow, desktopWindowKey) in desktopWindows",
		:key="desktopWindowKey",
		:is="desktopWindow"
	)
</template>

<script>
import { set as setDraggingAndTouching } from "@/assets/scripts/draggingAndTouching"
import windowsManager from "@/components/main/desktop/windowsManager"

export default {
	data() {
		return {
			desktopWindows: [],
		}
	},
	methods: {
		desktopProgramDoubleClick(desktopProgram) {
			this.desktopWindows.push(windowsManager)
		},
	},
	mounted() {
		setDraggingAndTouching(
			"add",
			document.getElementsByClassName("desktopProgram"),
			{
				padding: { x: [0, 0], y: [50, 100] },
			}
		)
	},
	beforeDestroy() {
		setDraggingAndTouching(
			"remove",
			document.getElementsByClassName("desktopProgram")
		)
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
		top: calc(50% - 8rem)
		right: calc(50% + 1rem)

	&:nth-child(2)
		top: calc(50% - 8rem)
		right: calc(50% - #{$desktopProgramWidth} - 1rem)

.desktopProgramIcon
	width: 8rem
	font-size: 5rem

.desktopProgramText
	font-size: 1.4rem
	font-weight: bold
	color: white
	text-shadow: 0px 1px 6px #777

.desktopProgramClickArea
	position: absolute
</style>

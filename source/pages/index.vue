<template lang="pug">
#index.row.justify-center.content-center
	client-only
		.clientOnlyPlaceholder(slot="placeholder")
			span Loading...

		menuBar.col-12
		#desktop.col-12.row.justify-center.content-center
			button(v-for="(desktopProgram, desktopProgramKey) in desktopProgramList", :key="desktopProgramKey").row.justify-center.desktopProgram
				q-img(:src="desktopProgram.icon").col-12.desktopProgramIcon
				span.col-12.q-pt-xs.text-capitalize.non-selectable.desktopProgramText {{ desktopProgram.name }}
		dock(:dockProgramList="dockProgramList")
</template>

<script>
import { initialize as localeInitialize } from "@/assets/scripts/locale"
import programList, {
	set as programListSet,
} from "@/assets/scripts/programList"
import menuBar from "@/components/menuBar"
import dock from "@/components/dock"

export default {
	components: {
		menuBar,
		dock,
	},
	data() {
		return {
			desktopProgramList: undefined,
			dockProgramList: undefined,
			launchpadProgramList: undefined,
		}
	},
	beforeMount() {
		localeInitialize()
		programListSet()
		this.desktopProgramList = programList.desktop
		this.dockProgramList = programList.dock
		this.launchpadProgramList = programList.launchpad
	},
}
</script>

<style lang="sass" scoped>
#index
	width: inherit
	height: inherit
	// background: linear-gradient(0deg, #c2351e 0%, #64013b 50%, #1c0015 100%) //ubuntu

$menuBarHeight: 32px
$desktopHeight: calc(100% - #{$menuBarHeight})

#desktop
	width: inherit
	height: $desktopHeight

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

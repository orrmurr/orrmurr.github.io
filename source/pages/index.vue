<template lang="pug">
#index.row.justify-center.content-center
	client-only
		.clientOnlyPlaceholder(slot="placeholder")
			span Loading...

		menuBar
		#desktop
			button(@click="switchLocale") switch
			//- button(v-for="(desktopProgram, desktopProgramKey) in desktopProgramList", :key="desktopProgramKey").row.items-center.desktopProgram
				q-icon(:name="desktopProgram.icon").col-12.desktopProgramIcon
				span.col-12.q-pt-xs.text-capitalize.desktopProgramText {{ desktopProgram.name }}
		//- dock(:dockProgramList="dockProgramList")
</template>

<script>
import locale from "@/assets/scripts/locale"
import menuBar from "@/components/menuBar"
import dock from "@/components/dock"
import programList from "@/assets/scripts/programList"
import test from "@/assets/scripts/test"

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
	methods: {
		switchLocale() {
			locale.toggleEnKo()
			programList.setLang()
		},
	},
	beforeMount() {
		test()
		locale.set()
		programList.set()
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

$menuBarHeight: 30px
$desktopHeight: calc(100% - #{$menuBarHeight})

#desktop
	width: inherit
	height: $desktopHeight

.desktopProgram
	width: 10rem
	height: 10rem
	border: unset

.desktopProgramIcon
	font-size: 5rem

.desktopProgramText
	font-size: 1.4rem
</style>

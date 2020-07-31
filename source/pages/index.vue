<template lang="pug">
#index.fit.row.justify-center.content-center
	client-only
		.clientOnlyPlaceholder(slot="placeholder")
			span Loading...

		.gt-sm.fit.row.justify-center.content-center
			menuBar.col-12
			desktop(:mainProgramList="mainProgramList")
			dock(:dockProgramList="dockProgramList")
</template>

<script>
import { initialize as localeInitialize } from "@/assets/scripts/locale"
import programList, {
	set as programListSet,
} from "@/assets/scripts/programList"
import menuBar from "@/components/main/desktop/menuBar"
import desktop from "@/components/main/desktop"
import dock from "@/components/main/desktop/dock"

export default {
	components: {
		menuBar,
		desktop,
		dock,
	},
	data() {
		return {
			mainProgramList: undefined,
			dockProgramList: undefined,
			launchpadProgramList: undefined,
		}
	},
	beforeMount() {
		localeInitialize()
		programListSet()
		this.mainProgramList = programList.main
		this.dockProgramList = programList.dock
		this.launchpadProgramList = programList.launchpad
	},
}
</script>

<style lang="sass" scoped>
#index
	// background: linear-gradient(0deg, #c2351e 0%, #64013b 50%, #1c0015 100%) //ubuntu
</style>

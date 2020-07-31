<template lang="pug">
#index.fit.row.justify-center.content-center
	client-only
		.clientOnlyPlaceholder(slot="placeholder")
			span Loading...

		.lt-md.fit.row.justify-center.content-center
			mobileMenuBar.col-12
			mobile(:mainProgramList="mainProgramList")
			mobileDock(:dockProgramList="dockProgramList")
			
		.gt-sm.fit.row.justify-center.content-center
			desktopMenuBar.col-12
			desktop(:mainProgramList="mainProgramList")
			desktopDock(:dockProgramList="dockProgramList")
</template>

<script>
import { initialize as localeInitialize } from "@/assets/scripts/locale"
import programList, {
	set as programListSet,
} from "@/assets/scripts/programList"
import mobileMenuBar from "@/components/main/mobile/menuBar"
import mobile from "@/components/main/mobile"
import mobileDock from "@/components/main/mobile/dock"
import desktopMenuBar from "@/components/main/desktop/menuBar"
import desktop from "@/components/main/desktop"
import desktopDock from "@/components/main/desktop/dock"

export default {
	components: {
		mobileMenuBar,
		mobile,
		mobileDock,
		desktopMenuBar,
		desktop,
		desktopDock,
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

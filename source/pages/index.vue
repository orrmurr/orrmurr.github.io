<template lang="pug">
#index.fit.row.justify-center.content-center
	client-only
		.clientOnlyPlaceholder(slot="placeholder")
			span Loading...

		#mobileContainer.lt-md.fit.column
			mobileMenuBar.col-auto
			mobile.col
			mobileDock.col-auto

		#desktopContainer.gt-sm.fit.column
			desktopMenuBar.col-auto
			desktop.col
			desktopDock.col-auto
</template>

<script>
import { initialize as localeInitialize } from "@/assets/scripts/locale"
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
	beforeMount() {
		localeInitialize()
	},
}
</script>

<style lang="sass" scoped>
#index
	// background: linear-gradient(0deg, #c2351e 0%, #64013b 50%, #1c0015 100%) //ubuntu
</style>

<template lang="pug">
#index.fit.row.justify-center.content-center
	client-only
		.clientOnlyPlaceholder(slot="placeholder")
			//- span Loading...
			q-spinner-ios(color="primary", size="2em")

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
	// background-image: url("https://images.unsplash.com/photo-1496737018672-b1a6be2e949c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2592&q=60 2592w")
	background-image: url("../assets/images/background.jpg")
	background-repeat: no-repeat
	background-size: cover
	background-position: center
</style>

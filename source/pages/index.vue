<template lang="pug">
.row.justify-center.content-center#index
	client-only
		.clientOnlyPlaceholder(slot="placeholder")
			span Loading...

		leftSidebar
		q-btn(v-for="(desktopProgram, desktopProgramKey) in desktopProgramList", :key="desktopProgramKey", flat color="white", text-color='black').trash
			q-icon(:name="desktopProgram.icon").trashIcon
			q-separator.invisible
			span.trashText.q-pt-md.text-capitalize {{ desktopProgram.name }}
</template>

<script>
import setLocale from "@/assets/scripts/initialize/setLocale"
import leftSidebar from "@/components/leftSidebar"
import programList from "@/assets/scripts/programList"

export default {
	beforeMount() {
		setLocale()
		programList.set()
		this.desktopProgramList = programList.desktop
	},
	components: {
		leftSidebar,
	},
	data() {
		return {
			desktopProgramList: undefined,
			leftSidebarCompData: {},
		}
	},
}
</script>

<style lang="sass" scoped>
#index
	height: inherit
	// background: linear-gradient(0deg, #c2351e 0%, #64013b 50%, #1c0015 100%) //ubuntu

.trashIcon
	font-size: 5rem

.trashText
	font-size: 2rem
</style>

<template lang="pug">
.menuBar.shadow-6
	q-bar.col-12
		q-icon(name="fas fa-signal")
		div.text-weight-bolder.non-selectable ORRMURR
		q-icon(name="fas fa-wifi")
		q-space
		div.text-weight-bold.non-selectable 18:44
		q-space
		q-icon(name="near_me")
		div.non-selectable 100%
		q-icon(name="fas fa-battery-full")
</template>

<script>
import { toggleEnKo as localeToggleEnKo } from "@/assets/scripts/locale"
import { setLang } from "@/assets/scripts/programList"

export default {
	methods: {
		switchLocale() {
			localeToggleEnKo()
			setLang()
		},
	},
}
</script>

<style lang="sass" scoped></style>

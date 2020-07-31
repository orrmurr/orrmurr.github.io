<template lang="pug">
.menuBar.shadow-6
	q-bar.col-12
		q-btn(dense, flat)
			q-img(src="https://image.flaticon.com/icons/svg/502/502724.svg").orrmurrIcon
		div.text-weight-bolder.non-selectable ORRMURR
		q-space
		q-btn(dense, flat, icon="airplay")
		q-btn(dense, flat, icon="battery_charging_full")
		q-btn(dense, flat, icon="wifi")
		q-btn(dense, flat, @click="switchLocale")
			q-img(v-if="$i18n.locale === 'en'", src="https://image.flaticon.com/icons/svg/3013/3013911.svg").nationalFlag
			q-img(v-else, src="https://image.flaticon.com/icons/svg/3013/3013991.svg").nationalFlag
		div.text-weight-bold.non-selectable 18:44
		q-btn(dense, flat, icon="search")
		q-btn(dense, flat, icon="list")
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

<style lang="sass" scoped>
.orrmurrIcon
	width: 2rem

.nationalFlag
	width: 2.5rem
</style>

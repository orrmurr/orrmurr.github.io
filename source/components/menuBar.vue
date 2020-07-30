<template lang="pug">
	.menuBar.shadow-6
		q-bar.col-12
			span.text-weight-bolder ORRMURR
			q-space
			q-btn(dense, flat, icon="airplay")
			q-btn(dense, flat, icon="battery_charging_full")
			q-btn(dense, flat, icon="wifi")
			q-btn(dense, flat, @click="switchLocale")
				q-img(v-if="$i18n.locale === 'en'", src="https://image.flaticon.com/icons/svg/3013/3013911.svg").nationalFlag
				q-img(v-else, src="https://image.flaticon.com/icons/svg/3013/3013991.svg").nationalFlag
			span 9:41
			q-btn(dense, flat, icon="search")
			q-btn(dense, flat, icon="list")
</template>

<script>
import { toggleEnKo as localeToggleEnKo } from "@/assets/scripts/locale"
import { setLang } from "@/assets/scripts/programList"

export default {
	props: {
		// menuBarProgramList: {
		// 	type: Array,
		// 	required: true,
		// },
	},
	methods: {
		switchLocale() {
			localeToggleEnKo()
			setLang()
		},
	},
}
</script>

<style lang="sass" scoped>
.nationalFlag
	width: 25px
</style>

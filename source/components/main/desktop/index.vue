<template lang="pug">
.desktop.row.justify-center.items-center
	button(v-for="(desktopProgram, desktopProgramKey) in $store.state.sessionStorage.programList.main", :key="desktopProgramKey", @click="desktopProgramClick").row.justify-center.desktopProgram
		q-img(:src="desktopProgram.icon").col-12.desktopProgramIcon
		span.col-12.q-pt-xs.text-capitalize.non-selectable.desktopProgramText {{ $t(desktopProgram.name) }}
</template>

<script>
export default {
	methods: {
		desktopProgramClick(event) {
			// ;(async () => {
			// 	const sessionStorageGet = await this.$store.dispatch(
			// 		"sessionStorage/get",
			// 		"programList"
			// 	)
			// 	console.log(sessionStorageGet)
			// })()

			this.$store.dispatch("sessionStorage/set", [
				["programList", "main"],
				[
					{
						icon: "https://image.flaticon.com/icons/svg/3231/3231661.svg",
						name: "Profile",
					},
				],
			])
			console.log(this.$store.state.sessionStorage.programList.main)
		},
	},
}
</script>

<style lang="sass" scoped>
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

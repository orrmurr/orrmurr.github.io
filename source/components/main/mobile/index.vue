<template lang="pug">
.mobile.row.items-start
	.mobileAppContainer(v-if="mobileApp.show.main" v-for="(mobileApp, mobileAppKey) in $store.state.sessionStorage.programList" :key="mobileAppKey").col-3.row.justify-center.items-center
		button.row.justify-center.mobileApp
			q-img(:src="mobileApp.icon").col-12.mobileAppIcon
			span.col-12.q-pt-xs.text-capitalize.non-selectable.mobileAppText {{ $t(mobileApp.name) }}
			.mobileAppClickArea.fit
</template>

<script>
import { set as setDraggingAndTouching } from "@/assets/scripts/draggingAndTouching"

export default {
	mounted() {
		setDraggingAndTouching(document.getElementsByClassName("mobileApp"), {
			padding: { x: [0, 0], y: [50, 100] },
		})
	},
}
</script>

<style lang="sass" scoped>
.mobile
	width: inherit
	padding: 2rem

$mobileAppWidth: 6rem

.mobileApp
	// position: absolute
	width: $mobileAppWidth
	border: unset

	// &:nth-child(1)
	// 	top: 6rem
	// 	left: 3rem

	// &:nth-child(2)
	// 	top: 6rem
	// 	left: $mobileAppWidth+ 9rem

.mobileAppIcon
	width: 8rem
	font-size: 5rem

.mobileAppText
	font-size: 1.4rem

.mobileAppClickArea
	position: absolute
</style>

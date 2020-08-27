<template lang="pug">
.mobile(@drag="mobileDrag" @dragend="mobileDragEnd").row.justify-center.items-center
	button(v-if="mobileApp.show.main" v-for="(mobileApp, mobileAppKey) in $store.state.sessionStorage.programList" :key="mobileAppKey" draggable @dragstart="mobileAppDragStart").row.justify-center.mobileApp
		q-img(:src="mobileApp.icon").col-12.mobileAppIcon
		span.col-12.q-pt-xs.text-capitalize.non-selectable.mobileAppText {{ $t(mobileApp.name) }}
</template>

<script>
import { dragStart, drag, dragEnd } from "@/assets/scripts/drag"

export default {
	methods: {
		mobileAppDragStart() {
			dragStart()
		},
		mobileDrag() {
			drag()
		},
		mobileDragEnd() {
			dragEnd()
		},
	},
}
</script>

<style lang="sass" scoped>
.mobile
	width: inherit

$mobileAppSize: 10rem

.mobileApp
	position: absolute
	width: $mobileAppSize
	height: $mobileAppSize
	border: unset

	&:nth-child(1)
		top: 6rem
		right: 3rem

	&:nth-child(2)
		top: $mobileAppSize + 9rem
		right: 3rem

.mobileAppIcon
	width: 8rem
	font-size: 5rem

.mobileAppText
	font-size: 1.4rem
</style>

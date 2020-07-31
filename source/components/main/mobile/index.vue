<template lang="pug">
.mobile.col-12.row.justify-center.content-center
	button(v-for="(mobileApp, mobileAppKey) in mainProgramList", :key="mobileAppKey").row.justify-center.mobileApp
		q-img(:src="mobileApp.icon").col-12.mobileAppIcon
		span.col-12.q-pt-xs.text-capitalize.non-selectable.mobileAppText {{ mobileApp.name }}
</template>

<script>
export default {
	props: {
		mainProgramList: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="sass" scoped>
$menuBarHeight: 32px
$mobileHeight: calc(100% - #{$menuBarHeight})

.mobile
	width: inherit
	height: $mobileHeight

.mobileApp
	width: 10rem
	height: 10rem
	border: unset

.mobileAppIcon
	width: 8rem
	font-size: 5rem

.mobileAppText
	font-size: 1.4rem
</style>

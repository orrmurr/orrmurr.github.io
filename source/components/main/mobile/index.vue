<template lang="pug">
.mobile.items-center
	button(v-if="mobileApp.show.mobile.main" v-for="(mobileApp, mobileAppKey) in $store.state.programList" :key="mobileAppKey").mobileApp.col-auto.row.justify-center
		q-img(:src="mobileApp.icon").col-12.mobileAppIcon
		span.mobileAppText.col-12.q-pt-xs.text-capitalize.non-selectable {{ $t(mobileApp.name) }}
			.mobileAppClickArea.fit
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.mobile
	display: grid
	grid-template-rows: repeat(6, 1fr)
	grid-template-columns: repeat(4, 1fr)
	justify-items: center
	padding: 2rem

$mobileAppWidth: 6rem

.mobileApp
	width: $mobileAppWidth
	border: unset

.mobileAppIcon
	width: 8rem
	font-size: 5rem

.mobileAppText
	font-size: 1.4rem
	font-weight: bold
	color: white
	text-shadow: 0px 1px 6px #777

.mobileAppClickArea
	position: absolute
</style>

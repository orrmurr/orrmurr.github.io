<template lang="pug">
.mobile.row.justify-center.items-center
	button(v-if="mobileApp.show.main" v-for="(mobileApp, mobileAppKey) in $store.state.sessionStorage.programList" :key="mobileAppKey").row.justify-center.mobileApp
		q-img(:src="mobileApp.icon").col-12.mobileAppIcon
		span.col-12.q-pt-xs.text-capitalize.non-selectable.mobileAppText {{ $t(mobileApp.name) }}
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>

.mobile
	width: inherit

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

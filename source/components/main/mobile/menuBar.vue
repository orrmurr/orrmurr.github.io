<template lang="pug">
q-bar.menuBar
	q-icon.q-mr-sm(name="fas fa-signal")
	//- .text-weight-bolder.non-selectable ORRMURR
	q-icon(name="fas fa-wifi")
	q-space
	.text-weight-bold.non-selectable 18:44
	q-space
	q-icon.q-mr-sm(name="near_me")
	//- .non-selectable 100%
	q-icon(name="fas fa-battery-full")
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
.menuBar
	background-color: unset
</style>

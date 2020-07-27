<template lang="pug">
	.row.content-start.leftSidebar
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
$leftSidebarWidth: 8rem

.leftSidebar
	position: absolute
	left: 0
	width: $leftSidebarWidth
	height: inherit
	background-color: rgba(0, 0, 0, 0.5)
	z-index: 1
</style>

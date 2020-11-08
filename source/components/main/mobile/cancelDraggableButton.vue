<template lang="pug">
.cancelDraggableButton.full-width(v-if="!$store.state.mobile.disabled")
	button.full-width.text-bold(
		@click="cancelDraggableButtonClick",
		@touchend="cancelDraggableButtonClick"
	) Cancel
</template>

<script>
export default {
	methods: {
		cancelDraggableButtonClick() {
			this.$store.dispatch("set", [["mobile", "disabled"], true])
		},
	},
}
</script>

<style lang="sass" scoped>
.cancelDraggableButton
	position: absolute
	transform: translateY(-7rem)
	// transform: translateY(-11rem)
	padding: 0 1rem

	>button
		color: #fc5021
		background-color: white
		padding: 2rem 0
		border: unset
		border-radius: 3rem
		box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1)
		backdrop-filter: blur(2px)
</style>

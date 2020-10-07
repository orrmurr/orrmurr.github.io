<template lang="pug">
.dock
	cancelDraggableButton
	draggable.draggable(v-bind="dragOptions")
		transition-group.row(tag="div")
			button.dockProgram.col(
				v-if="dockProgram.show.mobile.dock",
				v-for="(dockProgram, dockProgramKey) in $store.state.programList",
				:key="dockProgram.name",
				@mousedown="mobileAppMouseDown",
				@mouseup="mobileAppMouseUp",
				@touchstart="mobileAppMouseDown",
				@touchend="mobileAppMouseUp"
			)
				q-img.dockIcon(
					:src="dockProgram.icon",
					:class="[!dragOptions.disabled ? 'jiggle' : undefined]"
				)
</template>

<script>
import draggable from "vuedraggable"
import pressedTimeCounting from "@/assets/scripts/pressedTimeCounting"
import { mapActions } from "vuex"
import cancelDraggableButton from "@/components/main/mobile/cancelDraggableButton"

export default {
	components: {
		draggable,
		cancelDraggableButton,
	},
	computed: {
		dragOptions() {
			return {
				animation: 200,
				group: "mobileApp",
				disabled: this.$store.state.mobile.disabled,
				ghostClass: "ghost",
				dragClass: "drag",
			}
		},
	},
	methods: {
		...mapActions({
			setStore: "set",
			getStore: "get",
		}),
		mobileAppMouseDown() {
			;(async () => {
				const response = await this.getStore(["mobile", "disabled"])
				if (response)
					pressedTimeCounting.start(200, pressedTime => {
						if (pressedTime >= 1000) {
							pressedTimeCounting.isMouseDown = false
							this.setStore([["mobile", "disabled"], false])
						}
					})
			})()
		},
		mobileAppMouseUp() {
			pressedTimeCounting.isMouseDown = false
		},
	},
}
</script>

<style lang="sass" scoped>
.draggable
	padding: 1.6rem
	background-color: rgba(235,235,235,0.7)
	box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.25)
	backdrop-filter: blur(2px)
	overflow: hidden

.dockProgram
	border: unset

.dockIcon
	width: 6rem

.drag
	visibility: hidden
</style>

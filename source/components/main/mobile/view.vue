<template lang="pug">
draggable.view.full-height(
	v-bind="dragOptions",
	@start="draggableStart",
	@end="draggableEnd"
)
	transition-group.transitionGroup.full-height(tag="div")
		button.mobileApp.col(
			v-if="mobileApp.show.mobile.main",
			v-for="(mobileApp, mobileAppKey) in programList",
			:key="mobileApp.name",
			@mousedown="mobileAppMouseDown",
			@mouseup="mobileAppMouseUp",
			@touchstart="mobileAppMouseDown",
			@touchend="mobileAppMouseUp"
		)
			q-img.mobileAppIcon(
				:src="mobileApp.icon",
				:class="[!dragOptions.disabled ? 'jiggle' : undefined]"
			)
			//- span.mobileAppText.col-12.q-pt-xs.text-capitalize.non-selectable {{ $t(mobileApp.name) }}
			//- .mobileAppClickArea.fit
</template>

<script>
import draggable from "vuedraggable"
import pressedTimeCounting from "@/assets/scripts/pressedTimeCounting"
import { mapActions } from "vuex"

export default {
	components: {
		draggable,
	},
	props: {
		programList: {
			type: Array,
			required: true,
		},
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
		draggableStart() {
			console.log("start")
			// console.log(event)
			this.setStore([["mobile", "swipe"], false])
		},
		draggableEnd() {
			console.log("end")
			// console.log(event)
			this.setStore([["mobile", "swipe"], true])
		},
	},
}
</script>

<style lang="sass" scoped>
.view
	outline: none

.transitionGroup
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
	width: 6rem
	font-size: 5rem

.mobileAppText
	font-size: 1.4rem
	font-weight: bold
	color: white
	text-shadow: 0px 1px 6px #777

// .mobileAppClickArea
// 	position: absolute

.drag
	visibility: hidden
</style>

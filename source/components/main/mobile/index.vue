<template lang="pug">
.mobile
	draggable.full-height(
		v-bind="dragOptions",
		:disabled="$store.state.mobile.disabled"
	)
		transition-group.transitionGroup.items-center.fit(tag="div")
			button.mobileApp.col-auto.row.justify-center(
				v-if="mobileApp.show.mobile.main",
				v-for="(mobileApp, mobileAppKey) in $store.state.programList",
				:key="mobileApp.name",
				:class="[!$store.state.mobile.disabled ? 'jiggle' : undefined]"
			)
				q-img.col-12.mobileAppIcon(:src="mobileApp.icon")
				span.mobileAppText.col-12.q-pt-xs.text-capitalize.non-selectable {{ $t(mobileApp.name) }}
				.mobileAppClickArea.fit(
					@mousedown="mobileAppMouseDown",
					@mouseup="mobileAppMouseUp",
					@touchstart="mobileAppMouseDown",
					@touchend="mobileAppMouseUp"
				)
	.cancelDraggableButtonContainer.full-width(
		v-if="!$store.state.mobile.disabled"
	)
		button.cancelDraggableButton.full-width.text-bold(
			@click="cancelDraggableButtonClick",
			@touchend="cancelDraggableButtonClick"
		) Cancel
</template>

<script>
import draggable from "vuedraggable"
import pressedTimeCounting from "@/assets/scripts/pressedTimeCounting"
import { mapActions } from "vuex"

export default {
	components: {
		draggable,
	},
	data() {
		return {
			dragOptions: {
				animation: 200,
				group: "mobileApp",
				ghostClass: "ghost",
			},
		}
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
		cancelDraggableButtonClick() {
			this.setStore([["mobile", "disabled"], true])
		},
	},
}
</script>

<style lang="sass" scoped>
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
	width: 8rem
	font-size: 5rem

.mobileAppText
	font-size: 1.4rem
	font-weight: bold
	color: white
	text-shadow: 0px 1px 6px #777

.mobileAppClickArea
	position: absolute

.cancelDraggableButtonContainer
	position: absolute
	bottom: 10rem
	// text-align: center
	padding: 0 1rem

.cancelDraggableButton
	color: #fc5021
	background-color: white
	padding: 2rem 0
	border: unset
	border-radius: 3rem
	box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1)
	backdrop-filter: blur(2px)

.ghost
	visibility: hidden
</style>

<template lang="pug">
.dock
	cancelDraggableButton
	draggable.draggable(
		v-bind="dragOptions",
		@start="draggableStart",
		@end="draggableEnd"
	)
		transition-group.row(tag="div")
			button.dockProgram.col(
				v-if="dockProgram.show.mobile.dock",
				v-for="(dockProgram, dockProgramKey) in $store.state.programList",
				:key="dockProgram.name + dockProgramKey",
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
import detectDeviceType from "@/assets/scripts/detectDeviceType"
import detectCursorOnBorder from "@/assets/scripts/detectCursorOnBorder"

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
				dragClass: detectDeviceType() === "mobile" ? "drag" : "",
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
			detectCursorOnBorder.add([30, 30], [0, 90])
		},
		draggableEnd() {
			detectCursorOnBorder.remove()
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
	visibility: hidden //드래그 패키지 오류로 인한 설정(드래그하는 모션 숨기기, 웹에서 드래그 시 정상 작동하지만 모바일에서 부자연스럽게 작동, 다른 아이템 영역 진입 시 드래그 하는 아이템이 초기 드래그 시작한 위치로 이동하려고 함)
</style>

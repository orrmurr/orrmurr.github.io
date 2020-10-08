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
			:key="mobileApp.name + mobileAppKey",
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
import getDeviceType from "@/assets/scripts/getDeviceType"

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
				dragClass: getDeviceType() === "mobile" ? "drag" : "",
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
		getCurrentMousePosition() {
			const offsetXArea = 30
			const getEventClientX = event.changedTouches
				? event.changedTouches[0].clientX
				: event.clientX
			if (
				getEventClientX < offsetXArea ||
				getEventClientX > window.innerWidth - offsetXArea
			)
				console.log(getEventClientX)
		},
		draggableStart() {
			this.setStore([["mobile", "swipe"], false])
			document.addEventListener("mousemove", this.getCurrentMousePosition)
			document.addEventListener("touchmove", this.getCurrentMousePosition)
			console.log(getDeviceType() === "mobile")
		},
		draggableEnd() {
			this.setStore([["mobile", "swipe"], true])
			document.removeEventListener("mousemove", this.getCurrentMousePosition)
			document.removeEventListener("touchmove", this.getCurrentMousePosition)
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
	visibility: hidden //드래그 패키지 오류로 인한 설정(드래그하는 모션 숨기기, 웹에서 드래그 시 정상 작동하지만 모바일에서 부자연스럽게 작동, 다른 아이템 영역 진입 시 드래그 하는 아이템이 초기 드래그 시작한 위치로 이동하려고 함)
</style>

<template lang="pug">
.manager.column.bg-grey-1.shadow-4(
	:style="{ width: options.width + 'px', height: options.height + 'px' }"
)
	q-bar.title.col-auto
		q-space
		q-btn(dense, flat, icon="minimize")
		q-btn(dense, flat, icon="crop_square")
		q-btn(@click="closeClick", dense, flat, icon="close")
	iframe.col.no-border(src="/todo")
</template>

<script>
import { set as setDraggingAndTouching } from "@/assets/scripts/draggingAndTouching"

export default {
	props: {
		options: {
			type: Object,
			require: false,
			default() {
				return {
					width: window.innerWidth / 2,
					height: window.innerHeight / 2,
					top: 0,
					left: 0,
				}
			},
		},
	},
	methods: {
		closeClick() {
			console.log("close")
		},
	},
	mounted() {
		setDraggingAndTouching("add", document.getElementsByClassName("title"), {
			padding: { x: [0, 0], y: [0, 0] },
		})
	},
	beforeDestroy() {
		setDraggingAndTouching("remove", document.getElementsByClassName("title"))
	},
}
</script>

<style lang="sass" scoped>
.manager
	position: absolute
	border-radius: 1rem
</style>

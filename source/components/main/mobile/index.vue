<template lang="pug">
.mobile.row
	VueSlickCarousel.col(
		v-if="components.length",
		v-bind="vueSlickCarouselSettings",
		@reInit="VueSlickCarouselReInit"
	)
		component.views(
			v-for="(component, componentKey) in components",
			:key="component.name + componentKey",
			:is="component.name",
			:programList="component.programList"
		)
		//- mobileView(:programList="$store.state.programList")
		//- mobileView(:programList="[]")
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel"
import "vue-slick-carousel/dist/vue-slick-carousel.css"
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css"
import mobileView from "@/components/main/mobile/view"
import chunkArray from "@/assets/scripts/chunkArray"

export default {
	components: {
		VueSlickCarousel,
		mobileView,
	},
	data() {
		return {
			vueSlickCarouselSettings: {
				arrows: false,
				dots: true,
				edgeFriction: 0.1,
				infinite: false,
				speed: 500,
				slidesToShow: 1,
				slidesToScroll: 1,
				// swipe: true, //모바일 앱 위치 수정 중 화면이동 막기위해 이 옵션 사용 시 페이지 다시 불러와서 수정 사항 미적용 됨, computed를 사용해서 swipe 설정하려해도 문제 발생 동일, 패키지 자체 문제인지 구조 문제인지 파악 필요
			},
			components: [],
		}
	},
	methods: {
		setComponent() {
			let getProgramList = this.$store.state.programList

			getProgramList = getProgramList.reduce((accumulator, currentValue) => {
				if (currentValue.show.mobile.main) accumulator.push(currentValue)
				return accumulator
			}, [])

			const chunkProgramList = chunkArray(
				getProgramList,
				this.$store.state.mobile.maxAppsCountOnView
			)

			for (let i = 0; i < chunkProgramList.length; i++) {
				const componentObj = { name: "mobileView", programList: [] }
				for (let j = 0; j < chunkProgramList[i].length; j++)
					componentObj.programList.push(chunkProgramList[i][j])

				this.components.push(componentObj)
			}
		},
		stopSwipe() {
			// 임시로 강제 스타일 적용으로 문제 해결
			if (!this.$store.state.mobile.swipe)
				document.getElementsByClassName("slick-track")[0].style.transform =
					"unset"
		},
		VueSlickCarouselReInit() {
			this.stopSwipe()
		},
	},
	created() {
		this.setComponent()
	},
}
</script>

<style lang="sass">
.slick-list,
.slick-track,
.slick-slide > div,
	height: 100%

.slick-slide > div,
	outline: none

.slick-dots
	>li.slick-active
		>button:before
			color: white
			opacity: 1

	>li
		>button
			&:before,
				color: white
				opacity: 0.5
</style>

<style lang="sass" scoped>
.mobile
	width: inherit
	padding-bottom: 4rem
</style>

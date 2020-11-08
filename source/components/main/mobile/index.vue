<template lang="pug">
.mobile.row
	VueSlickCarousel.col(
		v-if="mobileViews.length",
		v-bind="vueSlickCarouselSettings",
		@reInit="VueSlickCarouselReInit"
	)
		component.views(
			v-for="(mobileView, mobileViewKey) in mobileViews",
			:key="mobileView.name + mobileViewKey",
			:is="mobileView.name",
			:indexArr="mobileView.indexArr"
		)
		//- mobileView(:programList="$store.state.programList")
		//- mobileView(:programList="[]")
</template>

<script>
// VueSlickCarousel 문제(component에 추가해도 미업데이트 됨)로 새로운 뷰 생성 UX 개발 불가
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
			mobileViews: [],
		}
	},
	methods: {
		setMobileViews() {
			const getProgramList = this.$store.state.programList

			const maxAppsCountOnView = 24
			const indexArr = []
			for (let i = 0; i < getProgramList.length; i++)
				if (getProgramList[i].show.mobile.main) indexArr.push(i)

			const chunkIndexArr = chunkArray(indexArr, maxAppsCountOnView)

			for (let i = 0; i < chunkIndexArr.length; i++)
				this.mobileViews.push({
					name: "mobileView",
					indexArr: chunkIndexArr[i],
				})
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
		this.setMobileViews()
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

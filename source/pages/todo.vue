<template lang="pug">
#todo
	ul
		li 할 것
		ul
			li 데스크탑
			ol
				li 더블 클릭 시 윈도우 매니저 컴포넌트 programListJson의 isOpened 변경사항 감지(computed)하여 윈도우 창 생성
				li 윈도우 창 이동 이벤트
			li 모바일
			ol
				li 수정 모드에서 새로운 뷰 생성 오류 해결(패키지 레퍼런스에 나와있는 옵션을 변경해도 변경 사항 적용이 되지않는 패키지 구조 자체의 문제)
		li 오류
		ol
			li store.js 함수에서 actions으로 값을 바꾸면 외부에서 값 변경 막는 에러("Error: [vuex] do not mutate vuex store state outside mutation handlers.") 발생, 배열 push 시 발생
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
#todo
	>ul
		margin: unset
		padding: 4rem
</style>

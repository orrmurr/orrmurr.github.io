/*
1. setting
import cursor from "@/assets/scripts/cursor"

2. usage
cursor.clientX()
cursor.clientY()
cursor.offsetX()
cursor.offsetY()
cursor.pageX()
cursor.pageY()
cursor.screenX()
cursor.screenY()

3. reference
clientX, clientY(파이어폭스 = layerX, layerY) - 현재 보이는 브라우저 화면 기준, 스크롤 무시
offsetX, offsetY - 이벤트 대상 기준, 상대적 마우스 좌표
pageX, pageY - 전체 문서 기준, 스크롤 포함
screenX, screenY - 모니터 화면 기준

touches - 현재 스크린에 있는 모든 손가락(touchstart)
targetTouches - 현재 DOM 객체에 있는 손가락
changedTouches - 현재 이벤트를 포함하고 있는 손가락(touchend)
*/

export default {
	clientX() {
		return event.changedTouches
			? event.changedTouches[0].clientX
			: event.clientX
	},
	clientY() {
		return event.changedTouches
			? event.changedTouches[0].clientY
			: event.clientY
	},
	offsetX() {
		return event.changedTouches
			? event.changedTouches[0].offsetX
			: event.offsetX
	},
	offsetY() {
		return event.changedTouches
			? event.changedTouches[0].offsetY
			: event.offsetY
	},
	pageX() {
		return event.changedTouches ? event.changedTouches[0].pageX : event.pageX
	},
	pageY() {
		return event.changedTouches ? event.changedTouches[0].pageY : event.pageY
	},
	screenX() {
		return event.changedTouches
			? event.changedTouches[0].screenX
			: event.screenX
	},
	screenY() {
		return event.changedTouches
			? event.changedTouches[0].screenY
			: event.screenY
	},
}

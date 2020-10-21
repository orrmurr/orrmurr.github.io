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
		try {
			return event.changedTouches
				? event.changedTouches[0].clientX
				: event.clientX
		} catch (error) {
			console.error(error + "\n\t at cursor.js")
		}
	},
	clientY() {
		try {
			return event.changedTouches
				? event.changedTouches[0].clientY
				: event.clientY
		} catch (error) {
			console.error(error + "\n\t at cursor.js")
		}
	},
	offsetX() {
		try {
			return event.changedTouches
				? event.changedTouches[0].offsetX
				: event.offsetX
		} catch (error) {
			console.error(error + "\n\t at cursor.js")
		}
	},
	offsetY() {
		try {
			return event.changedTouches
				? event.changedTouches[0].offsetY
				: event.offsetY
		} catch (error) {
			console.error(error + "\n\t at cursor.js")
		}
	},
	pageX() {
		try {
			return event.changedTouches ? event.changedTouches[0].pageX : event.pageX
		} catch (error) {
			console.error(error + "\n\t at cursor.js")
		}
	},
	pageY() {
		try {
			return event.changedTouches ? event.changedTouches[0].pageY : event.pageY
		} catch (error) {
			console.error(error + "\n\t at cursor.js")
		}
	},
	screenX() {
		try {
			return event.changedTouches
				? event.changedTouches[0].screenX
				: event.screenX
		} catch (error) {
			console.error(error + "\n\t at cursor.js")
		}
	},
	screenY() {
		try {
			return event.changedTouches
				? event.changedTouches[0].screenY
				: event.screenY
		} catch (error) {
			console.error(error + "\n\t at cursor.js")
		}
	},
}

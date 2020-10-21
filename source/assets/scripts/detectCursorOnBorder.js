/*
1. setting
import detectCursorOnBorder from "@/assets/scripts/detectCursorOnBorder"

2. usage
detectCursorOnBorder.add([30, 30], [0, 90], () => {
	console.log("detectCursorOnBorder")
})
detectCursorOnBorder.remove()
*/

import cursor from "@/assets/scripts/cursor"

let offsetXRange = undefined
let offsetYRange = undefined
let callback = undefined

function listener() {
	const getClientX = cursor.clientX()
	const getClientY = cursor.clientY()
	if (
		getClientX < offsetXRange[0] ||
		getClientX > window.innerWidth - offsetXRange[1]
	)
		if (getClientY < window.innerHeight - offsetYRange[1]) callback()
}

export default {
	add(getOffsetXRange, getOffsetYRange, getCallback) {
		if (!getOffsetXRange) return console.error("getOffsetXRange is undefined")
		if (!getOffsetYRange) return console.error("getOffsetYRange is undefined")
		if (!getCallback) return console.error("getCallback is undefined")
		offsetXRange = getOffsetXRange
		offsetYRange = getOffsetYRange
		callback = getCallback
		document.addEventListener("mousemove", listener)
		document.addEventListener("touchmove", listener)
	},
	remove() {
		document.removeEventListener("mousemove", listener)
		document.removeEventListener("touchmove", listener)
	},
}

/*
1. setting
import detectCursorOnBorder from "@/assets/scripts/detectCursorOnBorder"

2. usage
detectCursorOnBorder.add([30, 30], [0, 90])
detectCursorOnBorder.remove()
*/

import cursor from "@/assets/scripts/cursor"

let offsetXRange = undefined
let offsetYRange = undefined

function callback() {
	const getClientX = cursor.clientX()
	const getClientY = cursor.clientY()
	if (
		getClientX < offsetXRange[0] ||
		getClientX > window.innerWidth - offsetXRange[1]
	)
		if (getClientY < window.innerHeight - offsetYRange[1])
			console.log(getClientX)
}

export default {
	add(getOffsetXRange, getOffsetYRange) {
		offsetXRange = getOffsetXRange
		offsetYRange = getOffsetYRange
		document.addEventListener("mousemove", callback)
		document.addEventListener("touchmove", callback)
	},
	remove() {
		document.removeEventListener("mousemove", callback)
		document.removeEventListener("touchmove", callback)
	},
}

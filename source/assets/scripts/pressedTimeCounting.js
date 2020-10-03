/*
1. setting
import pressedTimeCounting from "@/assets/scripts/pressedTimeCounting"

2. usage
mouseDown() {
	pressedTimeCounting.start(500, pressedTime => {
		console.log(pressedTime)
		if (pressedTime >= 1000) pressedTimeCounting.isMouseDown = false
	})
},
mouseUp() {
	pressedTimeCounting.isMouseDown = false
}
*/

export default {
	isMouseDown: false,
	start(delay, callback) {
		let pressedTime = 0

		if (!delay)
			return console.error(
				'"delay" is undefined \n\t at pressedTimeCounting.js'
			)

		if (callback && callback.constructor !== Function)
			return console.error(
				'"callback" is not function \n\t at pressedTimeCounting.js'
			)

		this.isMouseDown = true

		const self = this
		setTimeout(function recursionFunction() {
			pressedTime += delay
			callback(pressedTime)
			if (self.isMouseDown) setTimeout(recursionFunction, delay)
		}, delay)
	},
}

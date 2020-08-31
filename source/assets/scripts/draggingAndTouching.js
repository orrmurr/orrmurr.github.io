let defaultOptions = {
	// isMobile: false,
	grid: 0,
	padding: { x: [0, 0], y: [0, 0] },
}

let selectedElement = undefined
const cursor = { x: 0, y: 0 }
const limit = { x: [0, 0], y: [0, 0] }

// function setEventOffset() {
// 	return {
// 		x: event.changedTouches ? event.target.offsetX : event.offsetX,
// 		y: event.changedTouches ? event.target.offsetY : event.offsetY,
// 	}
// }

function getEventClient() {
	return {
		x: event.changedTouches ? event.changedTouches[0].clientX : event.clientX,
		y: event.changedTouches ? event.changedTouches[0].clientY : event.clientY,
	}
}

function setLimit() {
	limit.x[0] = cursor.x + defaultOptions.padding.x[0]

	limit.x[1] =
		window.innerWidth -
		selectedElement.offsetWidth +
		cursor.x -
		defaultOptions.padding.x[1]

	limit.y[0] = cursor.y + defaultOptions.padding.y[0]

	limit.y[1] =
		window.innerHeight -
		selectedElement.offsetHeight +
		cursor.y -
		defaultOptions.padding.y[1]
	console.log(limit.x[0], limit.x[1], limit.y[0], limit.y[1])
}

// function getEventClient() {
// 	return {
// 		x: event.changedTouches ? event.changedTouches[0].clientX : event.clientX,
// 		y: event.changedTouches ? event.changedTouches[0].clientY : event.clientY,
// 	}
// }

function isMoveable(getAxis) {
	switch (getAxis) {
		case "x":
			if (getEventClient().x > limit.x[0] && getEventClient().x < limit.x[1])
				return true
			else return false
		case "y":
			if (getEventClient().y > limit.y[0] && getEventClient().y < limit.y[1])
				return true
			else return false
		default:
			console.error("draggingAndTouching.js: getAxis is undefined")
	}
}

const events = {
	start() {
		// console.log(this.offsetLeft)
		// console.log(this.offsetWidth)
		selectedElement = this

		// cursor.x = event.offsetX
		// cursor.y = event.offsetY
		// cursor.x = setEventOffset().x
		// cursor.y = setEventOffset().y
		cursor.x = getEventClient().x - this.offsetLeft
		cursor.y = getEventClient().y - this.offsetTop

		setLimit()
		selectedElement.style.zIndex = 1
	},
	move() {
		if (selectedElement) {
			// if (isMoveable("x"))
			// 	selectedElement.style.left = getEventClient().x - cursor.x + "px"
			// if (isMoveable("y"))
			// 	selectedElement.style.top = getEventClient().y - cursor.y + "px"

			// if (isMoveable("x"))
			// 	selectedElement.style.left = getEventClient().x + "px"
			// if (isMoveable("y")) selectedElement.style.top = getEventClient().y + "px"

			if (isMoveable("x"))
				selectedElement.style.left = getEventClient().x - cursor.x + "px"
			if (isMoveable("y"))
				selectedElement.style.top = getEventClient().y - cursor.y + "px"
		}
	},
	end() {
		if (selectedElement) {
			selectedElement.style.zIndex = ""
			selectedElement = undefined
		}
	},
}

const eventHandlers = {
	start: {
		mousedown: events.start,
		touchstart: events.start,
	},
	move: {
		mousemove: events.move,
		touchmove: events.move,
	},
	end: {
		mouseup: events.end,
		touchend: events.end,
	},
}

function isElement(getElement) {
	return (
		getElement instanceof Element ||
		(typeof HTMLDocument !== "undefined" && getElement instanceof HTMLDocument)
	)
}

function addEventListener(element, type, listener) {
	for (let i = 0; i < type.length; i++)
		element.addEventListener(type[i], listener[i])
}

export function set(targetElements, getOptions) {
	if (!targetElements)
		return console.error("draggingAndTouching.js: targetElements is undefined")

	for (let i = 0; i < targetElements.length; i++) {
		if (!isElement(targetElements[i]))
			return console.error(
				"draggingAndTouching.js: targetElements is not element"
			)
	}

	if (getOptions) defaultOptions = Object.assign({}, defaultOptions, getOptions)

	addEventListener(
		document,
		Object.keys(eventHandlers.move),
		Object.values(eventHandlers.move)
	)

	addEventListener(
		document,
		Object.keys(eventHandlers.end),
		Object.values(eventHandlers.end)
	)

	for (let i = 0; i < targetElements.length; i++) {
		addEventListener(
			targetElements[i],
			Object.keys(eventHandlers.start),
			Object.values(eventHandlers.start)
		)
	}
}

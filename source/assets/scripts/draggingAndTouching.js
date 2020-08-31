let defaultOptions = {
	grid: 0,
	padding: { x: [0, 0], y: [0, 0] },
}

let selectedElement = undefined
const cursor = { x: 0, y: 0 }
const limit = { x: [0, 0], y: [0, 0] }

function isMoveable(getAxis) {
	switch (getAxis) {
		case "x":
			if (event.clientX > limit.x[0] && event.clientX < limit.x[1]) return true
			else return false
		case "y":
			if (event.clientY > limit.y[0] && event.clientY < limit.y[1]) return true
			else return false
		default:
			console.error("draggingAndTouching.js: getAxis is undefined")
	}
}

const events = {
	start() {
		console.log(1)
		selectedElement = this

		cursor.x = event.offsetX
		cursor.y = event.offsetY

		limit.x[0] = defaultOptions.padding.x[0]
			? defaultOptions.padding.x[0] + event.offsetX
			: event.offsetX

		limit.x[1] = defaultOptions.padding.x[1]
			? window.innerWidth -
			  this.offsetWidth +
			  event.offsetX -
			  defaultOptions.padding.x[1]
			: window.innerWidth - this.offsetWidth + event.offsetX

		limit.y[0] = defaultOptions.padding.y[0]
			? defaultOptions.padding.y[0] + event.offsetY
			: event.offsetY

		limit.y[1] = defaultOptions.padding.y[1]
			? window.innerHeight -
			  this.offsetHeight +
			  event.offsetY -
			  defaultOptions.padding.y[1]
			: window.innerHeight - this.offsetHeight + event.offsetY
		selectedElement.style.zIndex = 1
	},
	move() {
		if (selectedElement) {
			if (isMoveable("x"))
				selectedElement.style.left = event.clientX - cursor.x + "px"
			if (isMoveable("y"))
				selectedElement.style.top = event.clientY - cursor.y + "px"
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

/*
1. setting
import { set as setDraggingAndTouching } from "@/assets/scripts/draggingAndTouching"

2. usage
mounted() {
	setDraggingAndTouching(
		"add",
		document.getElementsByClassName("element"),
		{
			grid: { x: 0, y: 0 },
			padding: { x: [0, 0], y: [0, 0] },
		}
	)
},
beforeDestroy() {
	setDraggingAndTouching(
		"remove",
		document.getElementsByClassName("element")
	)
},
*/

let defaultOptions = {
	grid: { x: 0, y: 0 },
	padding: { x: [0, 0], y: [0, 0] },
}

let selectedElement = undefined
const cursor = { x: 0, y: 0 }
const limit = { x: [0, 0], y: [0, 0] }

function getEventClient(axis) {
	switch (axis) {
		case "x":
			return event.changedTouches
				? event.changedTouches[0].clientX
				: event.clientX
		case "y":
			return event.changedTouches
				? event.changedTouches[0].clientY
				: event.clientY
		default:
			console.error("axis is undefined\n\t at draggingAndTouching.js")
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
}

function isMoveable(axis) {
	switch (axis) {
		case "x":
			if (getEventClient("x") > limit.x[0] && getEventClient("x") < limit.x[1])
				return true
			else return false
		case "y":
			if (getEventClient("y") > limit.y[0] && getEventClient("y") < limit.y[1])
				return true
			else return false
		default:
			console.error("axis is undefined\n\t at draggingAndTouching.js")
	}
}

function setPosition(axis) {
	switch (axis) {
		case "x":
			selectedElement.style.left = getEventClient("x") - cursor.x + "px"
			break
		case "y":
			selectedElement.style.top = getEventClient("y") - cursor.y + "px"
			break
		default:
			console.error("axis is undefined\n\t at draggingAndTouching.js")
	}
}

function setPositionInGrid() {
	if (defaultOptions.grid.x) {
		const gridModularX = selectedElement.offsetLeft % defaultOptions.grid.x
		const halfGridXValue = defaultOptions.grid.x / 2
		const positionXInGrid = selectedElement.offsetLeft - gridModularX
		const nextPositionXInGrid = positionXInGrid + defaultOptions.grid.x
		const limitPositionXInGrid = nextPositionXInGrid + defaultOptions.grid.x

		if (
			(gridModularX < halfGridXValue && positionXInGrid > limit.x[0]) ||
			limitPositionXInGrid > limit.x[1]
		)
			selectedElement.style.left = positionXInGrid + "px"
		else selectedElement.style.left = nextPositionXInGrid + "px"
	}
	if (defaultOptions.grid.y) {
		const gridModularY = selectedElement.offsetTop % defaultOptions.grid.y
		const halfGridYValue = defaultOptions.grid.y / 2
		const positionYInGrid = selectedElement.offsetTop - gridModularY
		const nextPositionYInGrid = positionYInGrid + defaultOptions.grid.y
		const limitPositionYInGrid = nextPositionYInGrid + defaultOptions.grid.y

		if (
			(gridModularY < halfGridYValue && positionYInGrid > limit.y[0]) ||
			limitPositionYInGrid > limit.y[1]
		)
			selectedElement.style.top = positionYInGrid + "px"
		else selectedElement.style.top = nextPositionYInGrid + "px"
	}
}

const events = {
	start() {
		selectedElement = this

		cursor.x = getEventClient("x") - this.offsetLeft
		cursor.y = getEventClient("y") - this.offsetTop

		setLimit()
		selectedElement.style.zIndex = 1
	},
	move() {
		if (selectedElement) {
			if (isMoveable("x")) setPosition("x")
			if (isMoveable("y")) setPosition("y")
		}
	},
	end() {
		if (selectedElement) {
			selectedElement.style.zIndex = ""
			setPositionInGrid()
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

function isElement(element) {
	return (
		element instanceof Element ||
		(typeof HTMLDocument !== "undefined" && element instanceof HTMLDocument)
	)
}

function setEventListener(condition, element, type, listener) {
	for (let i = 0; i < type.length; i++)
		switch (condition) {
			case "add":
				element.addEventListener(type[i], listener[i])
				break
			case "remove":
				element.removeEventListener(type[i], listener[i])
				break
			default:
				console.error("type is undefined\n\t at draggingAndTouching.js")
		}
}

export function set(condition, targetElements, options) {
	if (!targetElements)
		return console.error(
			"targetElements is undefined\n\t at draggingAndTouching.js"
		)

	for (let i = 0; i < targetElements.length; i++) {
		if (!isElement(targetElements[i]))
			return console.error(
				"targetElements is not element\n\t at draggingAndTouching.js"
			)
	}

	if (options) defaultOptions = Object.assign({}, defaultOptions, options)

	setEventListener(
		condition,
		document,
		Object.keys(eventHandlers.move),
		Object.values(eventHandlers.move)
	)

	setEventListener(
		condition,
		document,
		Object.keys(eventHandlers.end),
		Object.values(eventHandlers.end)
	)

	for (let i = 0; i < targetElements.length; i++) {
		setEventListener(
			condition,
			targetElements[i],
			Object.keys(eventHandlers.start),
			Object.values(eventHandlers.start)
		)
	}
}

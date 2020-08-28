const position = {
	selected: {
		size: 100,
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
	},
	setSelected() {
		this.selected.top = event.offsetY
		this.selected.right = this.selected.size - event.offsetX
		this.selected.bottom = this.selected.size - event.offsetY
		this.selected.left = event.offsetX
	},
	boundary: {
		weight: {
			top: 40,
			right: 0,
			bottom: 100,
			left: 0,
		},
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
	},
	setBoundary() {
		this.boundary.top = this.selected.top + this.boundary.weight.top
		this.boundary.right =
			window.innerWidth - this.selected.right - this.boundary.weight.right
		this.boundary.bottom =
			window.innerHeight - this.selected.bottom - this.boundary.weight.bottom
		this.boundary.left = this.selected.left + this.boundary.weight.left
	},
	x: 0,
	y: 0,
	set() {
		if (
			event.clientX > this.boundary.left &&
			event.clientX < this.boundary.right
		)
			this.x = event.clientX - this.selected.left

		if (
			event.clientY > this.boundary.top &&
			event.clientY < this.boundary.bottom
		)
			this.y = event.clientY - this.selected.top

		event.target.style.left = this.x + "px"
		event.target.style.top = this.y + "px"
	},
}

function setDragImage() {
	const emptyDragImage = document.createElement("div")
	event.dataTransfer.setDragImage(emptyDragImage, 0, 0)
}

export function dragStart() {
	setDragImage()
	position.setSelected()
	position.setBoundary()
}

export function drag() {
	event.target.style.zIndex = 1
	position.set()
}

export function dragEnd() {
	event.target.style.zIndex = ""
	position.set()
}

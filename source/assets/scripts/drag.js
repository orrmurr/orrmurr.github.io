const mousePositionForSelected = {
	leftAxis: { x: 0, y: 0 },
	rightAxis: { x: 0, y: 0 },
	setLeftAxis() {
		this.leftAxis.x = event.offsetX
		this.leftAxis.y = event.offsetY
	},
	setRightAxis() {
		const selectedSize = 100
		this.rightAxis.x = selectedSize - event.offsetX
		this.rightAxis.y = selectedSize - event.offsetY
	},
}

const position = {
	x: 0,
	y: 0,
	getBoundary() {
		return {
			left: {
				x: event.clientX - mousePositionForSelected.leftAxis.x,
				y: event.clientY - mousePositionForSelected.leftAxis.y,
			},
			right: {
				x: event.clientX + mousePositionForSelected.rightAxis.x,
				y: event.clientY + mousePositionForSelected.rightAxis.y,
			},
		}
	},
	set() {
		const currentBoundary = this.getBoundary()

		if (
			currentBoundary.left.x >= 0 &&
			currentBoundary.right.x <= window.innerWidth
		)
			this.x = currentBoundary.left.x

		if (
			currentBoundary.left.y >= 0 &&
			currentBoundary.right.y <= window.innerHeight
		)
			this.y = currentBoundary.left.y

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
	mousePositionForSelected.setLeftAxis()
	mousePositionForSelected.setRightAxis()
}

export function drag() {
	event.target.style.zIndex = 1
	position.set()
}

export function dragEnd() {
	event.target.style.zIndex = ""
	position.set()
}

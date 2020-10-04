/*
1. setting
import dataFinder from "@/assets/scripts/dataFinder"

2. usage
let data = [
	{
		data1: [
			"data1",
			"data2",
			"data3",
		],
		data2: {
			data1: 1,
			data2: 2,
			data3: 3,
		},
	},
	"data2",
	"data3",
]

dataFinder.key(data, "key", [2])
dataFinder.value(data, "value", [2, 4])
*/

function isWithinDepthRange(currentPath) {
	if (currentPath && dataFinder.depthRange.length) {
		const currentPathLength = currentPath.split(".").length
		const minRange = dataFinder.depthRange[0] - 1
		const maxRange = dataFinder.depthRange[1]
		if (dataFinder.depthRange.length === 1 && minRange <= currentPathLength)
			return true
		if (minRange <= currentPathLength && maxRange > currentPathLength)
			return true
		else return false
	} else return true
}

function getObjOfKeysAndValuesArr(obj) {
	if (obj.constructor === Object)
		return {
			keys: Object.keys(obj),
			values: Object.values(obj),
		}
	else return console.error(obj + "is not object type")
}

function getKeys(data, currentPath, key) {
	if (!key) return console.error("key is undefined\n\t at dataFinder.js")

	switch (data.constructor) {
		case Object: {
			const currentData = getObjOfKeysAndValuesArr(data)
			for (let i = 0; i < currentData.keys.length; i++) {
				if (currentData.keys[i] === key && isWithinDepthRange(currentPath))
					dataFinder.result.push({
						path: (currentPath ? currentPath + "." : "") + currentData.keys[i],
						value: currentData.values[i],
					})
			}
			for (let i = 0; i < currentData.values.length; i++) {
				if (
					currentData.values[i].constructor === Object ||
					currentData.values[i].constructor === Array
				)
					getKeys(
						currentData.values[i],
						(currentPath ? currentPath + "." : "") + currentData.keys[i],
						key
					)
			}
			break
		}
		case Array:
			for (let i = 0; i < data.length; i++) {
				if (data[i].constructor === Object || data[i].constructor === Array)
					getKeys(data[i], (currentPath ? currentPath + "." : "") + i, key)
			}
			break
		default:
			console.error("data type error\n\t at dataFinder.js")
	}
}

function getValues(data, currentPath, key) {
	if (!key) return console.error("key is undefined\n\t at dataFinder.js")

	switch (data.constructor) {
		case Object: {
			const currentData = getObjOfKeysAndValuesArr(data)
			for (let i = 0; i < currentData.values.length; i++) {
				if (
					currentData.values[i].constructor === Object ||
					currentData.values[i].constructor === Array
				)
					getValues(
						currentData.values[i],
						(currentPath ? currentPath + "." : "") + currentData.keys[i],
						key
					)
				else if (
					currentData.values[i] === key &&
					isWithinDepthRange(currentPath)
				)
					dataFinder.result.push({
						path: (currentPath ? currentPath + "." : "") + currentData.keys[i],
						value: currentData.values[i],
					})
			}
			break
		}
		case Array:
			for (let i = 0; i < data.length; i++) {
				if (data[i].constructor === Object || data[i].constructor === Array)
					getValues(data[i], (currentPath ? currentPath + "." : "") + i, key)
				else if (data[i] === key && isWithinDepthRange(currentPath))
					dataFinder.result.push({
						path: (currentPath ? currentPath + "." : "") + i,
						value: data[i],
					})
			}
			break
		default:
			console.error("data type error\n\t at dataFinder.js")
	}
}

const dataFinder = {
	result: [],
	depthRange: [],
	setDepthRange(depthRange) {
		if (depthRange)
			if (depthRange.constructor === Array) this.depthRange = depthRange
			else return console.error("depthRange is not Array\n\t at dataFinder.js")
		else this.depthRange = []
	},
	key(data, key, depthRange) {
		this.result = []
		this.setDepthRange(depthRange)
		getKeys(data, undefined, key)
		console.log(this.result)
	},
	value(data, value, depthRange) {
		this.result = []
		this.setDepthRange(depthRange)
		getValues(data, undefined, value)
		console.log(this.result)
	},
}

export default dataFinder

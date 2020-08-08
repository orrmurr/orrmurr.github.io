import programListJson from "@/assets/jsons/locale/programList"

function setListFromIndex(getIndex) {
	const newList = []
	for (let i = 0; i < getIndex.length; i++)
		newList.push(programListJson[getIndex[i]])
	return newList
}

const programList = {
	main: setListFromIndex([1, 2]),
	dock: setListFromIndex([0, 3, 4, 5, 6]),
	launchpad: programListJson,
}

export default programList

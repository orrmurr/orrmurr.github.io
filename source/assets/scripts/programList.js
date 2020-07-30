import { setLang as localeSetLang } from "@/assets/scripts/locale"
import programListJson from "@/assets/jsons/locale/programList"

function setListFromIndex(getIndex) {
	const newList = []
	for (let i = 0; i < getIndex.length; i++)
		newList.push(programList.launchpad[getIndex[i]])
	return newList
}

export function setLang() {
	localeSetLang(programListJson, "nameKey", "name")
}

export function set() {
	setLang()
	programList.desktop = setListFromIndex([1, 2])
	programList.dock = setListFromIndex([0, 1, 2, 3, 4, 5, 6])
}

const programList = {
	desktop: undefined,
	dock: undefined,
	launchpad: programListJson,
}

export default programList

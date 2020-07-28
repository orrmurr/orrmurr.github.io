import locale from "@/assets/scripts/locale"
import programList from "@/assets/jsons/locale/programList"

export default {
	desktop: undefined,
	dock: undefined,
	launchpad: programList,
	pushPrograms(getIndex) {
		const setList = []
		for (let i = 0; i < getIndex.length; i++)
			setList.push(this.launchpad[getIndex[i]])
		return setList
	},
	setLang() {
		locale.setLang(programList, "nameKey", "name")
	},
	set() {
		this.setLang()
		this.desktop = this.pushPrograms([1, 2])
		this.dock = this.pushPrograms([0, 1, 2, 3, 4, 5])
	},
}

const programList = {
	left: [
		{
			icon: "fas fa-info-circle",
			nameKey: "Info",
			name: undefined,
		},
		{
			icon: "fas fa-trash-alt",
			nameKey: "Setting",
			name: undefined,
		},
		{
			icon: "fas fa-trash-alt",
			nameKey: "Menu",
			name: undefined,
		},
	],
	desktop: [
		{
			icon: "fas fa-user-tie",
			nameKey: "Introduce",
			name: undefined,
		},
		{
			icon: "fas fa-file-alt",
			nameKey: "Portfolio",
			name: undefined,
		},
	],
	all: undefined,
	set() {
		const self = window.$nuxt

		for (let i = 0; i < this.left.length; i++)
			this.left[i].name = self.$t(this.left[i].nameKey)

		for (let i = 0; i < this.desktop.length; i++)
			this.desktop[i].name = self.$t(this.desktop[i].nameKey)

		this.all = this.left.concat(this.desktop).sort((a, b) => {
			return a.name > b.name ? 1 : a.name < b.name ? -1 : 0
		})
	},
}

export default programList

// export default () => {
// 	const self = window.$nuxt
// 	const leftSidebarList = [
// 		{
// 			icon: "fas fa-trash-alt",
// 			name: self.$t("Trash"),
// 		},
// 		{
// 			icon: "fas fa-trash-alt",
// 			name: self.$t("Trash"),
// 		},
// 	]
// 	const DesktopList = [
// 		{
// 			icon: "fas fa-trash-alt",
// 			name: self.$t("Trash"),
// 		},
// 		{
// 			icon: "fas fa-trash-alt",
// 			name: self.$t("Trash"),
// 		},
// 	]
// 	const list = Array.from(new Set(leftSidebarList.concat(DesktopList)))

// 	return {
// 		leftSidebarList: leftSidebarList,
// 		DesktopList: DesktopList,
// 		list: list
// 	}
// }

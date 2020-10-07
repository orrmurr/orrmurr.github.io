// export const strict = false
import store from "@/assets/scripts/initialize/store"
import programListJson from "@/assets/jsons/programList"

export const state = () => ({
	programList: programListJson,
	mobile: {
		disabled: true,
		swipe: true,
	},
	desktop: {},
})

export const mutations = store.mutations
export const actions = store.actions

// export const strict = false
import programListJson from "@/assets/jsons/programList"

import store from "@/assets/scripts/initialize/store"

export const state = () => ({
	programList: programListJson,
})

export const mutations = store.mutations
export const actions = store.actions

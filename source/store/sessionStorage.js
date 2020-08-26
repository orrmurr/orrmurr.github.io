import store from "@/assets/scripts/initialize/store"
import programListJson from "@/assets/jsons/locale/programList"

export const state = () => ({
	programList: programListJson,
	sessionStorageValue: 0,
	sessionStorageValueExpire: {
		sessionStorageValueExpireValue: 0,
		expire: 1,
	},
})

export const mutations = store.mutations
export const actions = store.actions

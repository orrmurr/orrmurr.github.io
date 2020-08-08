import store from "@/assets/scripts/initialize/store"
import getProgramList from "@/assets/scripts/programList"

export const state = () => ({
	programList: getProgramList,
	sessionStorageValue: 0,
	sessionStorageValueExpire: {
		sessionStorageValueExpireValue: 0,
		expire: 1,
	},
})

export const mutations = store.mutations
export const actions = store.actions

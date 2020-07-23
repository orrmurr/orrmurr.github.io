import store from "@/assets/scripts/initialize/store"

export const state = () => ({
	localStorageValue: 0,
	localStorageValueExpire: {
		localStorageValueExpireValue: 0,
		expire: 1,
	},
})

export const mutations = store.mutations
export const actions = store.actions

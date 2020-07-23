import store from "@/assets/scripts/initialize/store"

export const state = () => ({
	sessionStorageValue: 0,
	sessionStorageValueExpire: {
		sessionStorageValueExpireValue: 0,
		expire: 1,
	},
})

export const mutations = store.mutations
export const actions = store.actions

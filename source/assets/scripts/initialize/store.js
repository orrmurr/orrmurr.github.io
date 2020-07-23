/*
1. setting
import { mapActions } from "vuex"

methods: {
...mapActions("path", {
	newSetKey: "set",
	newGetKey: "get",
	newSyncKey: "sync"
})
}

2. usage
2-1. use single depth key
this.newSetKey(["dataKey", { dataValue: 0 }])

this.newGetKey("dataKey").then(response => {
	console.log(response)
})

2-2. use multi depth key
this.newSetKey([["dataKey2", "dataKey3", "dataKey4", "dataKey5"], { dataValue: 0 }])

this.newGetKey([
	"dataKey2",
	"dataKey3",
	"dataKey4",
	"dataKey5"
]).then(response => {
	console.log(response)
})

2-3. use synchronization(this.syncObj.syncKey === this.$store.state.path.dataKey.syncKey)
data() { return { syncObj: { syncKey: 0 } } }
this.newSyncKey(["dataKey", this.syncObj, "syncKey"])

3. if add local scope function, add below code to file in @/store/
mutations.newMutation = function() { }
actions.newAction = function() { }

4. to use the data bindging function in webStorage, the key of the object to be bound must be declared in the @/store/webStorage.js file in advance.
export const state = () => ({
	dataKey: undefined
})
*/

const store = {
	mutations: {
		set(state, [setKey, setValue]) {
			// state[setKey] = setValue
			if (setKey.constructor === Array && setKey.length !== 1) {
				if (
					!Object.prototype.hasOwnProperty.call(state, setKey[0]) ||
					state[setKey[0]].constructor !== Object
				)
					state[setKey[0]] = {}
				let editSetKey = state[setKey[0]]

				for (let i = 1; i <= setKey.length - 2; i++) {
					if (
						!Object.prototype.hasOwnProperty.call(editSetKey, setKey[i]) ||
						editSetKey[setKey[i]].constructor !== Object
					)
						editSetKey[setKey[i]] = {}
					editSetKey = editSetKey[setKey[i]]
				}
				editSetKey[setKey[setKey.length - 1]] = setValue
			} else state[setKey] = setValue
		},
	},
	actions: {
		set(context, [setKey, setValue]) {
			// context.commit("set", [setKey, setValue])
			const getVaule = store.actions.get(context, setKey)
			if (getVaule && setValue.constructor === Object) {
				const copyGetVaule = JSON.parse(JSON.stringify(getVaule))
				const keys = Object.keys(setValue)
				const values = Object.values(setValue)
				for (let i = 0; i < keys.length; i++) {
					copyGetVaule[keys[i]] = values[i]
				}
				context.commit("set", [setKey, copyGetVaule])
			} else context.commit("set", [setKey, setValue])
		},
		get(context, getKey) {
			if (getKey.constructor === Array && getKey.length !== 1) {
				let editSetKey = context.state[getKey[0]]
				for (let i = 1; i <= getKey.length - 1; i++) {
					if (!Object.prototype.hasOwnProperty.call(editSetKey, getKey[i]))
						return console.error(
							"undefined " + getKey[i] + "\n in ",
							editSetKey
						)
					editSetKey = editSetKey[getKey[i]]
				}
				if (editSetKey || editSetKey === 0) return editSetKey
				else return false
			} else if (context.state[getKey]) return context.state[getKey]
			else return false
		},
		sync(context, [getKey, syncObj, syncKey]) {
			const getVaule = store.actions.get(context, getKey)
			if (getVaule[syncKey]) syncObj[syncKey] = getVaule[syncKey]
			else if (getVaule) {
				const copyGetVaule = JSON.parse(JSON.stringify(getVaule))
				copyGetVaule[syncKey] = syncObj[syncKey]
				store.actions.set(context, [getKey, copyGetVaule])
			} else {
				const setValue = {}
				setValue[syncKey] = syncObj[syncKey]
				store.actions.set(context, [getKey, setValue])
			}
		},
	},
}

export default store

/*
1. setting
import { mapActions } from "vuex"

methods: {
...mapActions("path", {
	setStore: "set",
	getStore: "get",
	syncStore: "sync"
})
}

2. usage
2-1. without mapActions
this.$store.dispatch("path/set", ["key", { value: 0 }])

;(async () => {
	const response = await this.$store.dispatch("path/get", "key")
	console.log(response)
})()

2-2. use single depth key
this.setStore(["key", { value: 0 }])

this.getStore("key").then(response => {
	console.log(response)
})

;(async () => {
	const response = await this.getStore("key")
	console.log(response)
})()

2-3. use multi depth key
this.setStore([["key2", "key3", "key4", "key5"], { value: 0 }])

this.getStore([
	"key2",
	"key3",
	"key4",
	"key5"
]).then(response => {
	console.log(response)
})

;(async () => {
	const response = await this.getStore(["key2", "key3", "key4", "key5"])
	console.log(response)
})()

2-4. use synchronization(this.syncStoreObj.key === this.$store.state.path.storeKey.key)
data() { return { syncStoreObj: { key: 0 } } }
this.syncStore([this.syncStoreObj, "key", "storeKey"])

3. if add local scope function, add below code to file in @/store/
mutations.newMutation = function() { }
actions.newAction = function() { }

4. to use the data bindging function in webStorage, the key of the object to be bound must be declared in the @/store/webStorage.js file in advance.
export const state = () => ({
	key: undefined
})
*/

const store = {
	mutations: {
		set(state, [key, value]) {
			// state[key] = value
			if (key.constructor === Array && key.length !== 1) {
				if (
					!Object.prototype.hasOwnProperty.call(state, key[0]) ||
					state[key[0]].constructor !== Object
				)
					state[key[0]] = {}
				let currentKey = state[key[0]]

				for (let i = 1; i <= key.length - 2; i++) {
					if (
						!Object.prototype.hasOwnProperty.call(currentKey, key[i]) ||
						currentKey[key[i]].constructor !== Object
					)
						currentKey[key[i]] = {}
					currentKey = currentKey[key[i]]
				}
				currentKey[key[key.length - 1]] = value
			} else state[key] = value
		},
	},
	actions: {
		set(context, [key, value]) {
			// context.commit("set", [key, value])
			const getVaule = store.actions.get(context, key)
			if (getVaule && value.constructor === Object) {
				const copyGetVaule = JSON.parse(JSON.stringify(getVaule))
				const keys = Object.keys(value)
				const values = Object.values(value)
				for (let i = 0; i < keys.length; i++) {
					copyGetVaule[keys[i]] = values[i]
				}
				context.commit("set", [key, copyGetVaule])
				console.log(
					`changed "${key.constructor === Array ? key.join(".") : key}"\n`,
					getVaule,
					"to",
					copyGetVaule
				)
			} else {
				context.commit("set", [key, value])
				console.log(
					`changed "${key.constructor === Array ? key.join(".") : key}"\n`,
					getVaule,
					"to",
					value
				)
			}
		},
		get(context, key) {
			if (key.constructor === Array && key.length > 1) {
				let currentKey = context.state[key[0]]
				if (!currentKey)
					return console.error(`"${key[0]}" is undefined\n\t at store.js`)

				for (let i = 1; i <= key.length - 1; i++) {
					if (!Object.prototype.hasOwnProperty.call(currentKey, key[i]))
						return console.error(
							key[i] + " is undefined in \n",
							currentKey,
							"\n\t at store.js"
						)
					currentKey = currentKey[key[i]]
				}
				return currentKey
			} else if (context.state[key] || context.state[key] === 0)
				return context.state[key]
			else return console.error(`"${key}" is undefined\n\t at store.js`)
		},
		sync(context, [obj, key, storeKey]) {
			const getVaule = store.actions.get(context, storeKey)
			if (!getVaule) return console.error("sync error\n\t at store.js")
			else if (getVaule[key]) obj[key] = getVaule[key]
			else if (getVaule) {
				const copyGetVaule = JSON.parse(JSON.stringify(getVaule))
				copyGetVaule[key] = obj[key]
				store.actions.set(context, [storeKey, copyGetVaule])
			} else {
				const setValue = {}
				setValue[key] = obj[key]
				store.actions.set(context, [storeKey, setValue])
			}
		},
	},
}

export default store

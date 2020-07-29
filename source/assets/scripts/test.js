import axios from "axios"

// axios({
// 	url: "https://raw.githubusercontent.com/orrmurr/orrmurr.github.io/master/source/assets/scripts/initialize/store.js",
// 	method: "get"
// })

export default async () => {
	try {
		const get = await axios({
			method: "get",
			url:
				"https://raw.githubusercontent.com/orrmurr/orrmurr.github.io/master/source/assets/scripts/test2.js",
		})
		console.log(get)
	} catch (error) {
		console.error(error)
	}
}

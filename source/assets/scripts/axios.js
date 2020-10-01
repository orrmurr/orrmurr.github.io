import axios from "axios"
/*
1. push file.js to gitgub
return {
	functionKey() {}
}

2. change to cdn path at https://raw.githack.com

2. usage
import axios from "@/assets/scripts/axios"

const setJsFromUrl = async () => {
	const response = await axios.setJsFromUrl("cdn path")
	response.functionKey()
}
*/

export default {
	async form(getMethod, getUrl, getParams) {
		try {
			return await axios({
				method: getMethod,
				url: getUrl,
				params: getParams,
			})
		} catch (error) {
			console.error(error + "\n\t at axios.js")
		}
	},
	async get(url, params) {
		return await this.form("get", url, params)
	},
	async setJsFromUrl(url) {
		const response = await this.form("get", url, undefined)
		return new Function(response.data)()
	},
}

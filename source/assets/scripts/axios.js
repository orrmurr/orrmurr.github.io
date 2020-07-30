import axios from "axios"

export default {
	async form(getMethod, getUrl, getParams) {
		try {
			return await axios({
				method: getMethod,
				url: getUrl,
				params: getParams,
			})
		} catch (error) {
			console.error("axios.js error" + error)
		}
	},
	async get(url, params) {
		return await this.form("get", url, params)
	},
	async setJsFromUrl(url) {
		const response = await this.form("get", url, undefined)
		new Function(response.data)()
	},
}

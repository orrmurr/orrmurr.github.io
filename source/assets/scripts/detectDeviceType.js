/*
1. setting
import detectDeviceType from "@/assets/scripts/detectDeviceType"

2. usage
detectDeviceType() === "mobile"
detectDeviceType() === "tablet"
detectDeviceType() === "desktop"
*/

export default () => {
	try {
		const ua = navigator.userAgent
		if (
			/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
				ua
			)
		)
			return "mobile"
		else if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua))
			return "tablet"
		else return "desktop"
	} catch (error) {
		console.log(error + "\n\t at detectDeviceType.js")
	}
}

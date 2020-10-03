/*
1. setting
import { initialize as initializeLocale } from "@/assets/scripts/locale"
import { set as setLocale } from "@/assets/scripts/locale"
import { toggle as toggleLocale } from "@/assets/scripts/locale"

2. usage
beforeMount() {
	initializeLocale()
},

setLocale("en")

toggleLocale("en", "ko", "jp", ...)
*/

export function initialize() {
	const locale = sessionStorage.getItem("locale")
	if (!locale) {
		let getBrowserLanguage = navigator.language || navigator.userLanguage
		getBrowserLanguage = getBrowserLanguage.substring(0, 2)
		sessionStorage.setItem("locale", getBrowserLanguage)
		window.$nuxt.$i18n.locale = getBrowserLanguage
	} else window.$nuxt.$i18n.locale = locale
}

export function set(locale) {
	window.$nuxt.$i18n.locale = locale
	sessionStorage.setItem("locale", locale)
}

export function toggle() {
	for (let i = 0; i < arguments.length; i++) {
		if (sessionStorage.getItem("locale") === arguments[i])
			if (i === arguments.length - 1) return set(arguments[0])
			else return set(arguments[i + 1])
		else set(arguments[0])
	}
}

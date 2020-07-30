export function initialize() {
	const getLocale = sessionStorage.getItem("locale")
	if (!getLocale) {
		let getBrowserLanguage = navigator.language || navigator.userLanguage
		getBrowserLanguage = getBrowserLanguage.substring(0, 2)
		sessionStorage.setItem("locale", getBrowserLanguage)
		window.$nuxt.$i18n.locale = getBrowserLanguage
	} else window.$nuxt.$i18n.locale = getLocale
}

export function set(getLocale) {
	window.$nuxt.$i18n.locale = getLocale
	sessionStorage.setItem("locale", getLocale)
}

export function toggleEnKo() {
	if (sessionStorage.getItem("locale") === "en") set("ko")
	else set("en")
}

export function setLang(getList, textKey, text) {
	for (let i = 0; i < getList.length; i++)
		getList[i][text] = window.$nuxt.$t(getList[i][textKey])
}

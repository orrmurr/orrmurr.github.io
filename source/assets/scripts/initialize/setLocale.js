export default () => {
	const getLocale = sessionStorage.getItem("locale")
	if (!getLocale) {
		let getBrowserLanguage = navigator.language || navigator.userLanguage
		getBrowserLanguage = getBrowserLanguage.substring(0, 2)
		sessionStorage.setItem("locale", getBrowserLanguage)
		window.$nuxt.$i18n.locale = getBrowserLanguage
	} else window.$nuxt.$i18n.locale = getLocale
}

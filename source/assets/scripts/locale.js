export default {
	set() {
		const getLocale = sessionStorage.getItem("locale")
		if (!getLocale) {
			let getBrowserLanguage = navigator.language || navigator.userLanguage
			getBrowserLanguage = getBrowserLanguage.substring(0, 2)
			sessionStorage.setItem("locale", getBrowserLanguage)
			window.$nuxt.$i18n.locale = getBrowserLanguage
		} else window.$nuxt.$i18n.locale = getLocale
	},
	switch(getLocale) {
		window.$nuxt.$i18n.locale = getLocale
		sessionStorage.setItem("locale", getLocale)
	},
	toggleEnKo() {
		if (sessionStorage.getItem("locale") === "en") this.switch("ko")
		else this.switch("en")
	},
	setLang(getList, textKey, text) {
		for (let i = 0; i < getList.length; i++)
			getList[i][text] = window.$nuxt.$t(getList[i][textKey])
	},
}

export default {
	/*
	 ** Nuxt rendering mode
	 ** See https://nuxtjs.org/api/configuration-mode
	 */
	mode: "universal",
	/*
	 ** Nuxt target
	 ** See https://nuxtjs.org/api/configuration-target
	 */
	target: "static",
	/*
	 ** Headers of the page
	 ** See https://nuxtjs.org/api/configuration-head
	 */
	head: {
		title: process.env.npm_package_name || "",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: process.env.npm_package_description || "",
			},
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/ice-water.svg" },
			{
				rel: "stylesheet",
				type: "text/css",
				href: "https://cdn.jsdelivr.net/npm/quasar@1.8.5/dist/quasar.min.css",
			},
			{
				rel: "stylesheet",
				type: "text/css",
				href: "https://fonts.googleapis.com/css?family=Material+Icons",
			},
			{
				rel: "stylesheet",
				type: "text/css",
				href: "https://use.fontawesome.com/releases/v5.0.13/css/all.css",
			},
			{
				rel: "stylesheet",
				type: "text/css",
				href:
					"https://cdn.jsdelivr.net/gh/moonspam/NanumSquare@1.0/nanumsquare.css",
			},
		],
	},
	/*
	 ** Global CSS
	 */
	css: [
		"@assets/styles/initialize",
		"@assets/styles/font",
		"@assets/styles/nuxt",
	],
	/*
	 ** Plugins to load before mounting the App
	 ** https://nuxtjs.org/guide/plugins
	 */
	plugins: [
		"@plugins/globalComponents",
		"@plugins/globalDirectives",
		"@plugins/globalMethods",
		"@plugins/quasar",
		"@plugins/serverInitialize",
	],
	/*
	 ** Auto import components
	 ** See https://nuxtjs.org/api/configuration-components
	 */
	components: true,
	/*
	 ** Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/eslint-module
		"@nuxtjs/eslint-module",
	],
	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		"@nuxtjs/axios",
		"@nuxtjs/style-resources",
		[
			"nuxt-vuex-localstorage",
			{
				mode: "debug", // 제거 시 암호화
			},
		],
		["nuxt-i18n", require("./assets/scripts/initialize/locales.js")],
		"@assets/scripts/modules/logs",
	],
	/*
	 ** Axios module configuration
	 ** See https://axios.nuxtjs.org/options
	 */
	axios: {
		baseURL: "/",
	},
	/*
	 ** Build configuration
	 ** See https://nuxtjs.org/api/configuration-build/
	 */
	build: {},
	styleResources: {
		sass: ["@assets/styles/initialize.sass"],
	},
	router: {
		base: "/",
	},
}

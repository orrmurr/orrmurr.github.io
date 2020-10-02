export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
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

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
		"@assets/styles/initialize",
		"@assets/styles/font",
		"@assets/styles/nuxt",
	],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
		"@plugins/globalComponents",
		"@plugins/globalDirectives",
		"@plugins/globalMethods",
		"@plugins/quasar",
		"@plugins/serverInitialize",
	],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
		'@nuxtjs/axios',
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

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
		baseURL: "/",
	},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
	build: {},
	styleResources: {
		sass: ["@assets/styles/initialize.sass"],
	},
	router: {
		base: "/",
	},
}

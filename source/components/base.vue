<template lang="pug">
.base.row.content-start
	.col-12 base
</template>

<script>
export default {
	layout: "main",
	props: {
		compData: {
			type: Array,
			required: true,
		},
	},
	head() {
		return {
			title: "",
			meta: [{ hid: "", name: "", content: "" }],
			link: [{ rel: "stylesheet", type: "text/css", href: "" }],
			script: [{ type: "text/javascript", src: "" }],
		}
	},
	data() {
		return {}
	},
	methods: {},
}
</script>

<style lang="sass" scoped>
.base
	width: 100%
</style>

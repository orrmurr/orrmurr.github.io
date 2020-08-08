const path = require("path")

export default function (moduleOptions) {
	this.addPlugin({
		src: path.resolve(__dirname, "template.js"),
		moduleOptions,
	})
}

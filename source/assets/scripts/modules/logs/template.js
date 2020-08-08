export default (ctx, inject) => {
	const logs = (...args) => {
		console.log(...args)
	}

	inject("log", logs)
}

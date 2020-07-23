import Vue from "vue"

export default () => {
	Vue.directive("click-outside", {
		bind(el, binding, vnode) {
			el.clickOutsideEvent = event => {
				if (!(el === event.target || el.contains(event.target))) {
					vnode.context[binding.expression](event)
				}
			}
			el.addEventListener("click", binding.def.stopProp)
			document.body.addEventListener("click", el.clickOutsideEvent)
		},
		unbind(el, binding) {
			el.removeEventListener("click", binding.def.stopProp)
			document.body.removeEventListener("click", el.clickOutsideEvent)
		},

		stopProp(event) {
			event.stopPropagation()
		},
	})
}

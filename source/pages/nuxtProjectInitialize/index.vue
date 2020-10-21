<template lang="pug">
.row.justify-center.content-center
	h2.col-12.text-center Responsive Web CSS
	.flex-break
	span(style="font-size: 1rem") html { font-size: 10px /* default: 16px */ }, body { font-size: 14px /* default */ }
	.flex-break
	span(style="font-size: 1rem") font-size: 1rem === font-size: 10px
	.flex-break
	span(style="font-size: 1.8rem") font-size: 1.8rem === font-size: 18px
	.flex-break
	div(style="font-size: 1em")
		span(style="font-size: 1.29em") 1em > 1.29em (14px > 18.06px)
	.flex-break
	button.q-px-md.q-py-xs button
	.flex-break
	textarea(placeholder="textarea", style="border: 1px solid gray; padding: 6px")
	.flex-break
	input(placeholder="input", style="border: 1px solid gray; padding: 6px")
	.flex-break
	label.row.items-center
		input(type="checkbox" value="checkbox1")
		span.q-pl-sm checkbox1
	label.row.items-center.q-pl-md
		input(type="checkbox" value="checkbox2")
		span.q-pl-sm checkbox2
	label.row.items-center.q-pl-md
		input(type="checkbox" value="checkbox3")
		span.q-pl-sm checkbox3
	.flex-break
	label.row.items-center
		input(type="radio", name="radio" value="radio1")
		span.q-pl-sm radio1
	label.row.items-center.q-pl-md
		input(type="radio", name="radio" value="radio2")
		span.q-pl-sm radio2
	label.row.items-center.q-pl-md
		input(type="radio", name="radio" value="radio3")
		span.q-pl-sm radio3
	.flex-break
	select(style="border: 1px solid gray; padding: 2px 10px")
		option select 1
		option select 2
		option select 3
	.flex-break
	table(style="width: 100px; height: 70px")
		tbody
			tr
				td.text-center 1
				td.text-center 2
				td.text-center 3
			tr
				td.text-center 4
				td.text-center 5
				td.text-center 6
	.flex-break
	span(style="padding: 1rem") padding: 1rem
	span(style="margin: 1rem") margin: 1rem
	span
</template>

<script>
export default {
	layout: "main",
}
</script>

<style lang="sass" scoped>
.flex-break
	margin-top: 2rem

::-webkit-scrollbar-thumb
	background: red
	border-radius: 10px
</style>

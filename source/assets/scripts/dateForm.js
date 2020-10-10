/*
1. setting
// import dateForm from "@/assets/scripts/dateForm"

2. usage
dateForm.set()
console.log(dateForm.today)
*/

const dateForm = {}

function set() {
	dateForm.today = new Date()
	dateForm.dd = dateForm.today.getDate()
	dateForm.dd2 = dateForm.dd > 9 ? dateForm.dd : "0" + dateForm.dd
	dateForm.mm = dateForm.today.getMonth() + 1
	dateForm.mm2 = dateForm.mm > 9 ? dateForm.mm : "0" + dateForm.mm
	dateForm.yyyy = dateForm.today.getFullYear()
	dateForm.hours = dateForm.today.getHours()
	dateForm.hours2 = dateForm.hours < 12 ? dateForm.hours : dateForm.hours - 12
	dateForm.hours3 = dateForm.hours < 12 ? dateForm.hours : "0" + (dateForm.hours - 12)
	dateForm.minutes = dateForm.today.getMinutes()
	dateForm.seconds = dateForm.today.getSeconds()
	dateForm.milliseconds = dateForm.today.getMilliseconds()
	dateForm.day = [
		dateForm.yyyy + "-" + dateForm.mm + "-" + dateForm.dd,
		dateForm.yyyy + "-" + dateForm.mm2 + "-" + dateForm.dd,
		dateForm.yyyy + "/" + dateForm.mm + "/" + dateForm.dd,
		dateForm.yyyy + "/" + dateForm.mm2 + "/" + dateForm.dd,
	]
	dateForm.time = [
		dateForm.hours + ":" + dateForm.minutes + ":" + dateForm.seconds,
		dateForm.hours2 + ":" + dateForm.minutes + ":" + dateForm.seconds,
		dateForm.hours3 + ":" + dateForm.minutes + ":" + dateForm.seconds,
	]
}

export default dateForm

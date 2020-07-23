// import date from "@/assets/scripts/date"

export default () => {
	const _today = new Date()
	const _dd = _today.getDate()
	const _dd2 = _dd > 9 ? _dd : "0" + _dd
	const _mm = _today.getMonth() + 1
	const _mm2 = _mm > 9 ? _mm : "0" + _mm
	const _yyyy = _today.getFullYear()
	const _hours = _today.getHours()
	const _hours2 = _hours < 12 ? _hours : _hours - 12
	const _hours3 = _hours < 12 ? _hours : "0" + (_hours - 12)
	const _minutes = _today.getMinutes()
	const _seconds = _today.getSeconds()
	const _milliseconds = _today.getMilliseconds()

	return {
		today: _today,
		dd: _dd,
		dd2: _dd2,
		mm: _mm,
		mm2: _mm2,
		yyyy: _yyyy,
		hours: _hours,
		hours2: _hours2,
		hours3: _hours3,
		minutes: _minutes,
		seconds: _seconds,
		milliseconds: _milliseconds,
		day: [
			_yyyy + "-" + _mm + "-" + _dd,
			_yyyy + "-" + _mm2 + "-" + _dd,
			_yyyy + "/" + _mm + "/" + _dd,
			_yyyy + "/" + _mm2 + "/" + _dd,
		],
		time: [
			_hours + ":" + _minutes + ":" + _seconds,
			_hours2 + ":" + _minutes + ":" + _seconds,
			_hours3 + ":" + _minutes + ":" + _seconds,
		],
	}
}

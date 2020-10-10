/*
1. setting
import chunkArray from "@/assets/scripts/chunkArray"

2. usage
const result = chunkArray(array, 10)
*/

export default (array, size) => {
	const result = []
	for (let i = 0, j = array.length; i < j; i += size)
		result.push(array.slice(i, i + size))
	return result
}

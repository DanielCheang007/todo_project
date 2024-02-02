const getItem = key => {
	const d = localStorage.getItem(key)
	return d ? JSON.parse(d) : null
}

const setItem = (key, value) => localStorage.setItem(key, JSON.stringify(value))

const loadItems = (storageKey, ModelClass) => {
	const itemsData = getItem(storageKey) || []
	return itemsData.map(data => {
		const obj = new ModelClass()
		Object.assign(obj, data)
		return obj
	})
}

export {
	getItem,
	setItem,
	loadItems
}
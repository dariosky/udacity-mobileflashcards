import {AsyncStorage} from 'react-native'
import {DECK_STORAGE_KEY, formatData} from './_deck'

export function getData() {
	return AsyncStorage.getItem(DECK_STORAGE_KEY)
		.then(formatData)
}

export function submitEntry({entry, key}) {
	return AsyncStorage.mergeItem(DECK_STORAGE_KEY,
		JSON.stringify({[key]: entry}))
}

export function removeEntry(key) {
	return AsyncStorage.getItem(DECK_STORAGE_KEY)
		.then((results) => {
			const data = JSON.parse(results)
			data[key] = undefined
			delete data[key]
			AsyncStorage.setItem(DECK_STORAGE_KEY,
				JSON.stringify(data))
		})
}

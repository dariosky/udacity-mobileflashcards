import {AsyncStorage} from 'react-native'

export const DECK_STORAGE_KEY = 'dvarotto:udadeck'

function getRandomNumber(max, min = 0) {
	return Math.floor(Math.random() * max) + min
}

function setDummyData() {
	const now = Date.now()

	let dummyData = {
		decks: {
			'udacicards': {
				title: 'udacicards',
				creation_time: now,
				cards: [
					{
						question: 'Does React Native works with Android?',
						answer: 'Yes!',
					},
				],
			},
			'Fruits and Veggies': {
				title: 'Fruits and Veggies',
				creation_time: now,
				cards: [
					{
						question: 'Is the orange green?',
						answer: 'No',
					},
					{
						question: 'Is the potato a vegetable?',
						answer: 'No, it\' a tuber',
					},
					{
						question: 'Did Snowhite ate broccoli?',
						answer: 'No, she ate an apple',
					},
				],
			},
		},
	}
	AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyData))

	return dummyData
}

export function formatData(results) {
	if (results === null) {
		console.log("Starting with default data")
		return setDummyData()
	}
	else {
		return JSON.parse(results)
	}
}

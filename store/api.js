import {AsyncStorage} from 'react-native'
import {DECK_STORAGE_KEY, formatData} from './_deck'


export function getDecks() {
	// enable to clear the storage and start from defaults
	// clearAll()
	return AsyncStorage.getItem(DECK_STORAGE_KEY)
		.then(formatData)
}

export function clearAll() {
	return AsyncStorage.removeItem(DECK_STORAGE_KEY)
		.then(console.log('Storage cleared'))
}

export function addCardToDeck(title, card) {
	// console.log("API add card", card)
	return AsyncStorage.getItem(DECK_STORAGE_KEY)
		.then((results) => {
				const data = JSON.parse(results),
					deck = data.decks[title],
					newDeck = {
						...deck,
						cards: [...deck.cards, card],
					}

				AsyncStorage.mergeItem(DECK_STORAGE_KEY,
					JSON.stringify({
						decks: {
							[title]: newDeck,
						},
					}))
				return newDeck
			},
		)
}

export function saveDeck(deck) {
	// console.log("Save deck", deck)
	return AsyncStorage.getItem(DECK_STORAGE_KEY)
		.then((results) => {
				const data = JSON.parse(results),
					title = deck.title
				AsyncStorage.mergeItem(DECK_STORAGE_KEY,
					JSON.stringify({
						decks: {
							[title]: deck,
						},
					}))
				return deck
			},
		)
}

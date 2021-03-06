import * as api from '../store/api'
import {DECK_UPDATED, GET_DECKS} from './types'

export function gotDecks(decks) {
	return {
		type: GET_DECKS,
		decks,
	}
}

export function getDecks() {
	// async thunk
	return dispatch => {
		api.getDecks()
			.then(
				data => dispatch(gotDecks(data.decks)),
			)
	}
}

export function addCard(title, card) {
	return dispatch => {
		api.addCardToDeck(title, card).then(
			deck => dispatch(
				deckUpdated(deck),
			),
		)
	}
}

export function newDeck(deck) {
	return dispatch => {
		api.saveDeck(deck).then(
			deck => dispatch(
				deckUpdated(deck),
			),
		)
	}
}

export function deckUpdated(deck) {
	return {
		type: DECK_UPDATED,
		deck,
	}
}

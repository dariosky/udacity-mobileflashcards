import * as api from '../store/api'

export const GET_DECKS = 'GET_DECKS'

export function gotDecks(decks) {
	// console.log("got decks", decks)
	return {
		type: GET_DECKS,
		decks,
	}
}

export function getDecks() {
	// async thunk
	return dispatch => {
		api.getData()
			.then(
				data => dispatch(gotDecks(data.decks)),
			)
	}
}


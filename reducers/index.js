import * as actions from '../actions'

const reducer = (state = {}, action) => {
	switch (action.type) {
		case actions.GET_DECKS: {
			const {decks} = action
			return {
				...state,
				decks,
			}
		}
		case actions.DECK_UPDATED: {
			const {deck} = action
			return {
				...state,
				decks: {
					...state.decks,
					[deck.title]: deck,
				},
			}
		}
		default:
			return state
	}
}

export default reducer

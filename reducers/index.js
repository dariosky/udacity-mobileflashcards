import * as actions from '../actions'
import * as actionType from '../actions/types'

const reducer = (state = {}, action) => {
	switch (action.type) {
		case actionType.GET_DECKS: {
			const {decks} = action
			return {
				...state,
				decks,
			}
		}
		case actionType.DECK_UPDATED: {
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

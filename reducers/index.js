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
		default:
			return state
	}
}

export default reducer

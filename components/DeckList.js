import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'

class DeckList extends React.Component {
	componentDidMount() {
		this.props.dispatch(
			actions.getDecks(),
		)
	}

	render() {
		const {decks} = this.props
		{/*<Text>{JSON.stringify(decks)}</Text>*/
		}
		return <View style={stylesList.container}>
			{!decks ?
				<Text>
					No decks of card yet!
					Create one tapping 'NEW DECK'
				</Text>
				: decks.map(deck => <Deck deck={deck}
				                          key={deck.name}/>)
			}
		</View>
	}
}

const stylesList = StyleSheet.create({
	container: {
		// flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'flex-start',
	},
})

export default connect(
	state => {
		const {decks} = state
		return {decks}
	},
)(DeckList)


class Deck extends React.Component {
	render() {
		const {name, cards} = this.props.deck
		const len = cards.length
		return <View style={styleDeck.container}>
			<Text style={styleDeck.title}>{name}</Text>
			<Text>
				{len === 1 ? '1 card' : `${len} cards`}
			</Text>
		</View>
	}
}

const styleDeck = StyleSheet.create({
	container: {
		alignItems: 'center',
		height: 100,
		padding: 30,
		borderWidth: 0.5,
		borderColor: '#d6d7da',
	},
	title: {
		fontSize: 25,
	},
})

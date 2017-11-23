import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import styles from './styles'
import sortBy from 'sort-by'

class DeckList extends React.Component {
	componentDidMount() {
		this.props.dispatch(
			actions.getDecks(),
		)
	}

	onClick = (deck) => {
		const {navigate} = this.props.navigation
		navigate(
			'DeckDetail',
			{title: deck.title},
		)
	}

	render() {
		// console.log("Decklist props", Object.keys(this.props))
		const {decks} = this.props
		let content
		if (!decks) content = <Text style={styles.full}>
			No decks of card yet!
			Create one tapping 'NEW DECK'
		</Text>
		else {
			const sortedDecks = Object.values(decks).sort(sortBy('-creation_time'))
			content = <FlatList
				data={sortedDecks}
				keyExtractor={item => item.title}
				renderItem={({item}) => {
					return <Deck deck={item}
					             onClick={() => this.onClick(item)}
					             key={item.title}/>
				}}
			/>
		}

		return <View style={stylesList.container}>
			{content}
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
		// console.log("Deck props", Object.keys(this.props))
		const {title, cards} = this.props.deck
		const len = cards.length
		return <TouchableOpacity
			onPress={this.props.onClick}>
			<View style={styleDeck.container}>
				<Text style={styleDeck.title}>{title}</Text>
				<Text>
					{len === 1 ? '1 card' : `${len} cards`}
				</Text>
			</View>
		</TouchableOpacity>
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

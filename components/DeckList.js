import {FlatList, Text, TouchableOpacity, View} from 'react-native'
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

		return <View style={styles.full}>
			{content}
		</View>
	}
}

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
			<View style={styles.deck}>
				<Text style={styles.text}>{title}</Text>
				<Text>
					{len === 1 ? '1 card' : `${len} cards`}
				</Text>
			</View>
		</TouchableOpacity>
	}
}

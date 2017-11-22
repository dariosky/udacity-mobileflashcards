import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import styles from './styles'

class DeckMenu extends React.Component {
	addCard = () => {
		const deckName = this.props.name
		const {navigate} = this.props.navigation
		console.log("Adding card to", deckName)
		navigate(
			'AddCard',
			{name: deckName},
		)
	}

	startQuiz = () => {
	}

	render() {
		return <View>
			<TouchableOpacity
				onPress={this.addCard}>
				<View style={[styles.menuButton]}>
					<Text style={styles.text}>
						Add Card
					</Text>
				</View>
			</TouchableOpacity>
			<TouchableOpacity
				onPress={this.startQuiz}>
				<View style={[styles.menuButton, styles.menuButtonDefault]}>
					<Text style={[styles.text, styles.buttonTextDefault]}>
						Start Quiz
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	}
}

class DeckDetail extends React.Component {
	static navigationOptions = ({navigation}) => ({
		title: navigation.state.params.name,
	})

	render() {
		const {name} = this.props.navigation.state.params,
			decks = this.props.decks.filter(deck => deck.name === name)
		if (decks.length === 0)
			return null
		const deck = decks[0],
			tot = deck.cards.length,
			cardSize = tot === 1 ? `1 card` : `${tot} cards`
		return <View style={styles.container}>
			<View>
				<Text style={styles.title}>{name}</Text>
				<Text style={styles.subtitle}>{cardSize}</Text>
			</View>
			<DeckMenu navigation={this.props.navigation}
			          name={name}/>
		</View>
	}
}

export default connect(state => {
	return {decks: state.decks}
})(DeckDetail)

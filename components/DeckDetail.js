import {StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		height: 100,
		padding: 30,
		borderWidth: 0.5,
		borderColor: '#d6d7da',
	},
	title: {
		textAlign: 'center',
		fontSize: 25,
	},
})

class DeckDetail extends React.Component {
	static navigationOptions = ({navigation}) => ({
		title: navigation.state.params.name,
	})

	render() {
		const {name} = this.props.navigation.state.params,
			decks = this.props.decks.filter(deck => deck.name === name)
		if (decks.length === 0)
			return null
		const deck = decks[0]
		// console.log(this.props)
		console.log(this.props.decks)

		const tot = deck.cards.length,
			cardSize = tot === 1 ? `1 card` : `${tot} cards`
		return <View>
			<Text style={styles.title}>{cardSize}</Text>
			<Text></Text>
		</View>
	}
}

export default connect(state => {
	return {decks: state.decks}
})(DeckDetail)

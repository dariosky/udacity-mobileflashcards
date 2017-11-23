import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'
import React from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import styles from './styles'
import * as api from '../store/api'

const addCardStyle = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'space-around',
	},
	inputError: {backgroundColor: '#fdd'},
})

class AddCard extends React.Component {
	state = {
		errors: {}, valid: false,
		question: '',
		answer: '',
	}
	static navigationOptions = ({navigation}) => ({
		title: 'Add a card',
	})

	validate = () => {
		const {question, answer} = this.state
		let errors = {}
		if (question.trim() === '') errors.question = 'missing value'
		if (answer.trim() === '') errors.answer = 'missing value'
		const valid = Object.keys(errors).length === 0
		this.setState({errors, valid})
	}

	saveCard = () => {
		if (!this.state.valid) {
			console.log("invalid return")
			return
		}
		const {question, answer} = this.state
		const {title} = this.props.navigation.state.params
		const card = {question, answer}


		console.log("Saving card")
		api.addCardToDeck(title, card)

		const {navigation} = this.props
		// navigation.goBack() // TODO: re-enable
	}

	onChange = (field, value) => {
		this.setState({[field]: value}, this.validate)
	}

	render() {
		const {title} = this.props.navigation.state.params,
			deck = this.props.decks[title],
			tot = deck.cards.length,
			cardSize = tot === 1 ? `1 card` : `${tot} cards`,
			{errors} = this.state
		return <View style={addCardStyle.container}>
			<View style={[styles.inputBox, errors.question ? addCardStyle.inputError : null]}>
				<TextInput style={[styles.text, styles.input]}
				           placeholder='Type a question'
				           onChangeText={value => this.onChange('question', value)}
				           value={this.state.question}
				/>
			</View>

			<View style={[styles.inputBox, errors.answer ? addCardStyle.inputError : null]}>
				<TextInput style={[styles.text, styles.input]}
				           placeholder='Type the answer'
				           onChangeText={value => this.onChange('answer', value)}
				           value={this.state.answer}
				/>
			</View>

			<TouchableOpacity onPress={this.saveCard} disabled={!this.state.valid}>
				<View style={[styles.menuButton, styles.menuButtonDefault]}>
					<Text style={[styles.text, styles.buttonTextDefault]}>Submit</Text>
				</View>
			</TouchableOpacity>
		</View>
	}
}

export default connect(state => {
	return {decks: state.decks}
})(AddCard)

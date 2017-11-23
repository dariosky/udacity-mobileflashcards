import {Text, TextInput, TouchableOpacity, View,} from 'react-native'
import React from 'react'
import * as actions from '../actions'
import {connect} from 'react-redux'
import styles from './styles'

const initialState = {
	errors: {}, valid: false,
	title: '',
}

class NewDeck extends React.Component {
	state = initialState

	validate = () => {
		const {title} = this.state,
			{decks} = this.props
		let errors = {}

		if (title.trim() === '') errors.title = 'missing value'
		if (decks[title] !== undefined) errors.title = 'already exists'
		const valid = Object.keys(errors).length === 0
		this.setState({errors, valid})
	}

	saveDeck = () => {
		if (!this.state.valid) {
			console.log("invalid deck name")
			return
		}
		const {title} = this.state,
			now = Date.now()

		this.props.dispatch(
			actions.newDeck({
				title,
				creation_time: now,
				cards: [],
			}),
		)

		const {navigation} = this.props
		this.setState(initialState)

		navigation.navigate('Decks')
	}

	onChange = (field, value) => {
		this.setState({[field]: value}, this.validate)
	}

	render() {
		const {errors} = this.state
		return <View style={styles.form}>
			<Text style={styles.text}>What's the title of your new Deck?</Text>
			<View style={[styles.inputBox, errors.title ? styles.error : null]}>
				<TextInput style={[styles.text, styles.input]}
				           placeholder='Type a question'
				           onChangeText={value => this.onChange('title', value)}
				           value={this.state.title}
				/>
			</View>

			<TouchableOpacity onPress={this.saveDeck} disabled={!this.state.valid}>
				<View style={[styles.menuButton, styles.menuButtonDefault]}>
					<Text style={[styles.text, styles.buttonTextDefault]}>
						Submit
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	}
}

export default connect(state => {
	return {decks: state.decks}
})(NewDeck)

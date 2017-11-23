import {Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {connect} from 'react-redux'
import styles from './styles'

class DeckMenu extends React.Component {
	addCard = () => {
		const title = this.props.title
		const {navigate} = this.props.navigation
		// console.log("Adding card to", title)
		navigate(
			'AddCard',
			{title: title},
		)
	}

	startQuiz = () => {
		const title = this.props.title
		const {navigate} = this.props.navigation
		// console.log("Start quiz", title)
		navigate(
			'Quiz',
			{title: title},
		)
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
		title: navigation.state.params.title,
	})

	render() {
		const {title} = this.props.navigation.state.params,
			{decks}=this.props,
			deck = this.props.decks[title]
		const tot = deck.cards.length,
			cardSize = tot === 1 ? `1 card` : `${tot} cards`
		return <View style={styles.container}>
			<View>
				<Text style={styles.title}>{title}</Text>
				<Text style={styles.subtitle}>{cardSize}</Text>
			</View>
			<DeckMenu navigation={this.props.navigation}
			          title={title}/>
		</View>
	}
}

export default connect(state => {
	return {decks: state.decks}
})(DeckDetail)

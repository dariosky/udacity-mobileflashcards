import {Text, TouchableOpacity, View} from 'react-native'
import React from 'react'
import {connect} from 'react-redux'
import styles from './styles'
import {Entypo, Octicons} from '@expo/vector-icons'

function shuffle(a) {
	// shuffle: by sorting via a random key
	return a.sort(function () {
		return 0.5 - Math.random()
	})
}

class Quiz extends React.Component {
	componentWillMount() {
		this.reset()
	}

	reset() {
		const {title} = this.props.navigation.state.params,
			deck = this.props.decks[title]
		let shuffledCards = shuffle([...deck.cards])
		this.setState({
			correct: 0,
			incorrect: 0,

			current: 1,
			total: shuffledCards.length,
			cards: shuffledCards,
			cardView: 'question',
		})
	}


	static navigationOptions = ({navigation}) => {
		const {title} = navigation.state.params
		return {title: `Quiz: ${title}`}
	}

	onCorrect = () => {
		// console.log("CORRECT")
		this.setState((state) => {
			const {current, correct} = state
			return {
				cardView: 'question',
				current: current + 1,
				correct: correct + 1,
			}
		})
	}
	onIncorrect = () => {
		// console.log("INCORRECT")
		this.setState((state) => {
			const {current, incorrect} = state
			return {
				cardView: 'question',
				current: current + 1,
				incorrect: incorrect + 1,
			}
		})
	}
	onDone = () => {
		const {navigate} = this.props.navigation
		navigate('Decks')
	}

	render() {
		const {current, total, correct, incorrect, cardView} = this.state,
			card = this.state.cards[current - 1]
		// console.log(current, total, correct, incorrect)
		if (current > total) {
			const props = {
				navigation: this.props.navigation,
				total,
				correct, incorrect,
				onDone: this.onDone,
			}
			return <View style={styles.full}>
				<Summary {...props}/>
			</View>
		}
		return <View style={styles.full}>
			<Text style={[styles.text]}>{current}/{total}</Text>
			<Card {...{
				onCorrect: this.onCorrect,
				onIncorrect: this.onIncorrect,
				view: cardView,
				card,
			}}/>
		</View>
	}
}

class Card extends React.Component {
	state = {view: 'question'}

	componentWillReceiveProps(nextProps) {
		this.setState({view: nextProps.view})
	}

	flip = () => {
		let {view} = this.state
		if (view === 'question') view = 'answer'
		else view = 'question'
		this.setState({view})
	}

	render() {
		const {card, onCorrect, onIncorrect} = this.props
		const {view} = this.state
		// return <Text>Hola {view} {card.question}</Text>

		const face = view === 'question' ?
			<View style={styles.centered}>
				<TouchableOpacity
					onPress={this.flip}>
					<Text style={[styles.text, styles.textBig, styles.textCentered]}>
						{card.question}
					</Text>
					<Text style={[styles.textSmall, styles.textPrimary, styles.textCentered]}>
						Click to see the answer
					</Text>

				</TouchableOpacity>
			</View>
			: <View style={styles.centered}>
				<View style={styles.centered}>
					<TouchableOpacity
						onPress={this.flip}>

						<Text style={[styles.text, styles.textBig, styles.textCentered]}>
							{card.answer}
						</Text>
						<Text style={[styles.textSmall, styles.textPrimary, styles.textCentered]}>
							Click to see the question
						</Text>
					</TouchableOpacity>
				</View>
				<TouchableOpacity
					onPress={onCorrect}>
					<View style={[styles.menuButton, styles.buttonCorrect]}>
						<Text style={[styles.text, styles.buttonText]}>
							Correct
						</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity
					onPress={onIncorrect}>
					<View style={[styles.menuButton, styles.buttonIncorrect]}>
						<Text style={[styles.text, styles.buttonText]}>
							Incorrect
						</Text>
					</View>
				</TouchableOpacity>
			</View>

		return <View style={styles.full}>
			{face}
		</View>
	}
}

class Summary extends React.Component {
	render() {
		const {correct, incorrect, total, onDone} = this.props
		const percent = Math.round(correct * 100 / total)
		let emoji, score
		if (percent === 100) {
			emoji = 'emoji-happy'
			score = 'PERFECT !!!'
		}
		else if (percent > 80) {
			emoji = 'emoji-happy'
			score = 'Well done!'
		}
		else if (percent >= 60) {
			emoji = 'emoji-neutral'
			score = 'Not bad, but you can do better.'
		}
		else if (percent >= 20) {
			emoji = 'emoji-sad'
			score = 'You will do better next time, keep practicing'
		}
		else {
			emoji = 'emoji-sad'
			score = 'A total failure! Use the force young padawan'
		}

		const content = total === 0 ?
			<View style={styles.centered}>
				<Octicons
					name='question'
					size={26}
					style={{color: 'black'}}
				/>
				<Text style={[styles.text, styles.textCentered]}>
					There's still not much to do with this deck
				</Text>
			</View> :

			<View style={styles.centered}>
				<Entypo
					name={emoji}
					size={65}
					style={{color: 'black'}}
				/>
				<Text>
					{percent}%
				</Text>

				<Text style={[styles.text, styles.textCentered]}>
					{score}
				</Text>
			</View>

		return <View style={[styles.full, styles.centered]}>
			{content}
			<TouchableOpacity
				onPress={onDone}>
				<View style={[styles.menuButton, styles.menuButtonDefault]}>
					<Text style={[styles.text, styles.buttonText,
						styles.buttonTextDefault]}>
						Continue
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	}
}

export default connect(state => {
	return {decks: state.decks}
})(Quiz)


import {StyleSheet} from 'react-native'

export const primaryColor = '#c50014'
export const primaryColorBk = '#FFF'
export const secondaryColor = '#333'

const styles = StyleSheet.create({
	full: {
		flex: 1,
	},
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	title: {
		fontSize: 30,
		textAlign: 'center',
	},
	subtitle: {
		fontSize: 20,
		color: '#aaa',
		textAlign: 'center',
	},
	menuButton: {
		padding: 20,
		margin: 10,
		borderRadius: 5,
		borderColor: '#222',
		borderWidth: 0.5,
	},
	menuButtonDefault: {
		backgroundColor: primaryColor,
	},
	buttonText: {
		textAlign: 'center',
	},
	buttonTextDefault: {
		textAlign: 'center',
		color: primaryColorBk,
	},

	inputBox: {
		padding: 20,
		margin: 10,
		borderRadius: 5,
		borderColor: '#222',
		borderWidth: 0.5,
	},
	text: {
		fontSize: 25,
	},
	textBig: {
		fontSize: 35,
	},
	textSmall: {
		fontSize: 15,
		color: '#444',
	},
	textCentered: {
		textAlign: 'center',
	},
	form: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'space-around',
	},
	error: {
		backgroundColor: '#fdd',
	},
	centered: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textPrimary: {
		color: primaryColor,
	},

	buttonCorrect: {
		backgroundColor: 'green',
	},
	buttonIncorrect: {
		backgroundColor: 'red',
	},
	deck: {
		alignItems: 'center',
		height: 100,
		padding: 30,
		borderWidth: 0.5,
		borderColor: '#d6d7da',
	},
})

export default styles

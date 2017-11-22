import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
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
		backgroundColor: '#222',
	},
	buttonTextDefault: {
		textAlign: 'center',
		color: '#fff',
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
})

export default styles

import {StyleSheet, Text, View} from 'react-native'
import React from 'react'

// import {connect} from 'react-redux'

class DeckList extends React.Component {
	componetDidMount() {
		const {dispatch} = this.props
	}

	render() {
		return <View style={styles.container}>

			<Text>Mobile Flash Cards</Text>
			<Text>by Dario Varotto</Text>
		</View>

	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	header: {},
})

// export default connect()(DeckList)
export default DeckList

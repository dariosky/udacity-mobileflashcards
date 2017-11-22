import React from 'react'
import {StackNavigator, TabNavigator} from 'react-navigation'
import DeckList from './components/DeckList'
import {StatusBar, StyleSheet, Text, View} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {Provider} from 'react-redux'
import store from './store'
import DeckDetail from './components/DeckDetail'
import AddCard from './components/AddCard'


const styles = StyleSheet.create({
	app: {
		flex: 1,
	},
	about: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
})

const About = () => <View style={styles.about}>
	<Text style={{fontSize: 35}}>Mobile Flash Cards</Text>
	<Text>by Dario Varotto</Text>
</View>


const TabNav = TabNavigator({
	Decks: {
		screen: DeckList,
		navigationOptions: {
			tabBarLabel: 'UdaDecks',
			tabBarIcon: ({tintColor, focused}) => (
				<Ionicons
					name='ios-albums-outline'
					size={26}
					style={{color: tintColor}}
				/>
			),
		},
	},

	NewDeck: {
		screen: About,
		navigationOptions: {
			tabBarLabel: 'New Deck',
			tabBarIcon: ({tintColor, focused}) => (
				<Ionicons
					name='ios-add-circle-outline'
					size={26}
					style={{color: tintColor}}
				/>
			),
		},
	},

	About: {
		screen: About,
		navigationOptions: {
			tabBarLabel: 'About',
			tabBarIcon: ({tintColor, focused}) => (
				<Ionicons
					name='ios-information-circle-outline'
					size={26}
					style={{color: tintColor}}
				/>
			),
		},
	},

}, {
	navigationOptions: {
		header: null,
	},
})

const MainNavigator = StackNavigator({
	Home: {
		screen: TabNav,
	},

	DeckDetail: {
		screen: DeckDetail,
		navigationOptions: {
			headerTintColor: '#FFF',
			headerStyle: {
				backgroundColor: '#00F',
			},
		},
	},

	AddCard: {
		screen: AddCard,
		navigationOptions: {
			tabBarLabel: 'Add card',
			tabBarIcon: ({tintColor, focused}) => (
				<Ionicons
					name='ios-add-circle-outline'
					size={26}
					style={{color: tintColor}}
				/>
			),
		},
	},
})


const App = () => {
	return <Provider store={store}>
		<View style={styles.app}>
			<StatusBar hidden={true}/>
			<MainNavigator/>
		</View>
	</Provider>
}


export default App

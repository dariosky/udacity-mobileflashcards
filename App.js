import React from 'react'
import {StackNavigator, TabNavigator} from 'react-navigation'
import DeckList from './components/DeckList'
import {StatusBar, Text, View} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {Provider} from 'react-redux'
import store from './store'
import DeckDetail from './components/DeckDetail'
import AddCard from './components/AddCard'
import NewDeck from './components/NewDeck'
import Quiz from './components/Quiz'
import styles, {primaryColor, primaryColorBk} from './components/styles'


const About = () => <View style={styles.centered}>
	<Text style={{fontSize: 35}}>Mobile Flash Cards</Text>
	<Text>by Dario Varotto</Text>
</View>

const navigationOptions = {
	headerTintColor: primaryColorBk,
	headerStyle: {
		backgroundColor: primaryColor,
	},
}

const TabNav = TabNavigator({
	Decks: {
		screen: DeckList,
		navigationOptions: {
			tabBarLabel: 'UdaDecks',
			tabBarIcon: ({tintColor, focused}) => (
				<Ionicons
					name='ios-albums-outline'
					size={30}
					style={{color: primaryColorBk}}
				/>
			),
			...navigationOptions
		},
	},

	NewDeck: {
		screen: NewDeck,
		navigationOptions: {
			tabBarLabel: 'New Deck',
			tabBarIcon: ({tintColor, focused}) => (
				<Ionicons
					name='ios-add-outline'
					size={30}
					style={{color: primaryColorBk}}
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
					size={30}
					style={{color: tintColor}}
				/>
			),
		},
	},

}, {
	navigationOptions: {
		header: null,
	},
	tabBarOptions: {
		activeTintColor: 'white',
		inactiveTintColor: 'lightgray',
		labelStyle: {
			fontSize: 12,
		},
		style: {
			backgroundColor: primaryColor,
		},
	},

})

const MainNavigator = StackNavigator({
	Home: {
		screen: TabNav,
	},

	DeckDetail: {
		screen: DeckDetail,
		navigationOptions: {
			...navigationOptions
		},
	},

	AddCard: {
		screen: AddCard,
		navigationOptions: {
			tabBarIcon: ({tintColor, focused}) => (
				<Ionicons
					name='ios-add-circle-outline'
					size={26}
					style={{color: tintColor}}
				/>
			),
			...navigationOptions
		},
	},

	Quiz: {
		screen: Quiz,
		navigationOptions: {
			tabBarIcon: ({tintColor, focused}) => (
				<Ionicons
					name='ios-add-circle-outline'
					size={26}
					style={{color: tintColor}}
				/>
			),
			...navigationOptions
		},
	},
})


const App = () => {
	return <Provider store={store}>
		<View style={styles.full}>
			<StatusBar hidden={true}/>
			<MainNavigator/>
		</View>
	</Provider>
}


export default App

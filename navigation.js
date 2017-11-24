import React from 'react'
import {StackNavigator, TabNavigator} from 'react-navigation'
import NewDeck from './components/NewDeck'
import DeckDetail from './components/DeckDetail'
import {primaryColor, primaryColorBk} from './components/styles'
import DeckList from './components/DeckList'
import Quiz from './components/Quiz'
import AddCard from './components/AddCard'
import {About} from './components/About'

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

export const MainNavigator = StackNavigator({
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


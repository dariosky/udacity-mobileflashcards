import React from 'react'
import {TabNavigator} from 'react-navigation'
import DeckList from './components/DeckList'
import {StatusBar, StyleSheet, View} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'

const styles = StyleSheet.create({
	app: {
		flex: 1,
	},
})

const TabNav = TabNavigator({
	Decks: {
		screen: DeckList,
		navigationOptions: {
			tabBarLabel: 'UdaDecks',
			tabBarIcon: ({tintColor, focused}) => (
				<Ionicons
					name='ion-ios-albums-outline'
					size={26}
					style={{color: tintColor}}
				/>
			),
		},
	},
})

const App = () => {
	return <Provider store={createStore(reducer)}>
		<View style={styles.app}>
			<StatusBar hidden={true}/>
			<TabNav/>
		</View>
	</Provider>
}


export default App

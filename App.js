import React from 'react'
import {StatusBar, View} from 'react-native'
import {Provider} from 'react-redux'
import store from './store'
import styles from './components/styles'
import {setLocalNotification} from './store/notifications'
import {MainNavigator} from './navigation'


class App extends React.Component {
	componentDidMount() {
		setLocalNotification()
	}

	render() {
		return <Provider store={store}>
			<View style={styles.full}>
				<StatusBar hidden={true}/>
				<MainNavigator/>
			</View>
		</Provider>
	}
}

export default App

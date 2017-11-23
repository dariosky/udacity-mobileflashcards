import {Notifications, Permissions} from 'expo'
import {AsyncStorage} from 'react-native'
import {DECK_STORAGE_KEY} from './_deck'

const NOTIFICATION_KEY = `${DECK_STORAGE_KEY}:notifications`
const TEST_SHORT_NOTIFICATION = false

export function clearLocalNotification() {
	return AsyncStorage.removeItem(NOTIFICATION_KEY)
		.then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
	return {
		title: 'Study your cards!',
		body: "👋 don't forget to study your cards today",
		ios: {
			sound: true,
		},
		android: {
			sound: true,
			priority: 'high',
			sticky: false,
			vibrate: true,
		},
	}
}

export function setLocalNotification() {
	AsyncStorage.getItem(NOTIFICATION_KEY)
		.then(JSON.parse)
		.then((data) => {
			console.log("Notification data", data)
			if (data === null) {
				Permissions.askAsync(Permissions.NOTIFICATIONS)
					.then(({status}) => {
						if (status === 'granted') {
							Notifications.cancelAllScheduledNotificationsAsync()

							let tomorrow = new Date()
							if (TEST_SHORT_NOTIFICATION) {
								tomorrow.setSeconds(tomorrow.getSeconds() + 10)
							}
							else {
								// notify tomorrow evening
								tomorrow.setDate(tomorrow.getDate() + 1)
								tomorrow.setHours(19)
								tomorrow.setMinutes(0)
								tomorrow.setSeconds(0)
							}
							console.log("Setting local notification at", tomorrow)
							Notifications.scheduleLocalNotificationAsync(
								createNotification(),
								{
									time: tomorrow,
									repeat: 'day',
								},
							)

							AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
						}
					})
			}
		})
}

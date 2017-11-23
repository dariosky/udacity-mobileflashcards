Mobile Flash Cards
==================
### Udacity React ND project 3 - by Dario Varotto

---------------------
## Summary

This project is about building a mobile application
 that allows users to study collections of flashcards.


## Installation notes

The project is bootstrapped with `create-react-native-app`, so as usual
you can start it by:

* installing the dependencies - `yarn`
* running the development server - `yarn start`

## Notes

All specs have been implemented, I tried to keep the api simple:
data is catched from the device AsyncStorage and stored in the Redux store.

When a quiz starts, the cards are shuffled.

Development has been made in an Android emulator, but the application
has been tested in both an IOS Ipad and an Android real device, using
Expo.

To test the notifications, it may be useful to set 
`notifications.js TEST_SHORT_NOTIFICATION` to `True` and then complete a quiz
to receive a notification after 10 seconds, otherwise
the reminder is made at 19 of the day after the last Quiz completion.

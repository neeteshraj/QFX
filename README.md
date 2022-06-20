# QFX

## _React Native Application to Test QFX cinemas api_

QFX is an reactnative application built to test the staging apis of QFX cinemas.

## Features and Implementation

- Implementaion of path aliases
- Usage of TypeScript
- Implementation of redux/saga to store and fetch movie data
- Implementation of cryptojs to store the encrypt and decrypt the token while storing and fetching access token from AsyncStorage.
- Login Session maintained with the use of context.
- Proper folder structure has been followed.
- QR code generation in profile screen

## Cloning and Installation

QFX requires [Node.js](https://nodejs.org/) to run.

Clone QFX

```sh
git clone https://github.com/neeteshraj/QFX.git
```

Install the dependencies and devDependencies and run the application.

```sh
cd QFX
npm install
npx react-native run-android
```

Or

```sh
yarn android
```

## Application Flow

- QFX mobile application starts up with an splash screen that checks the installed app version with latest app version available. If any new updates are available in server then it alerts a message to update the application.
- When Update is pressed:
- If the device is android it will be redirected into PlayStore to update the application and if the device is ios then it will be redirected into the AppStore to update the application.
- If the device is emulator then in ios it wont be redirected to AppStore instead it will be redirected to Safari or any default browser.(Browser in iphone doesn't support AppStore links, It gives an error in browser with a message "Safari cannot open the page because the address is invalid."). And if the device is an android emulator then it will be redirected to Chrome Browser with the application update link.
- Nothing happens if cancel button is pressed. The popup message is discarded and the application continues to run.
- Application then lands into HomeScreen that displays NowShowing movies.
- The home screen has three tabs.
  a) Now Showing
  b) Coming Soon
  c) Cinemas
- When a movie is clicked it displays the movie details in a new screen (MovieDetails).
- Movie Details screen has MovieTrailer, Movie title, rating, genre, runtime, director, cast ,annotation and Buy/Reserve ticket option.
- The buy/reserve screen (Show Selection) contains information about movie with movie show time in corresponding cinema hall.
- The show information in (Show Selection Screen) is pressable and when the show information is pressed, if the user is logged in then it will pop up an Alert box showing that feature will be available soon. If the user is not logged in then it will redirect the user to login screen.
- My Profile screen contains the information about the QFX account identity.
- Application has Drawer as a main navigator to navigate between different screens.

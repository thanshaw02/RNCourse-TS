To run this project you will need to know how to traverse through the Expo environment using the Expo app on eiterh a physical iOs/Android device **or** on a emulated iOS/Android device.

Simply run *npm install* to install all currently required dependancies then run *npm start* to start up the Expo service.

__Running app on a physical iOS device:__
1. Download the **Expo App** from the **App Store**
2. Either create a new Expo account or login
3. After running the *npm start* command from above you should see a QR code printed in the console, scan this QR code using your camera app on your iOS device
4. Follow the prompts to start listening to your Expo service from the Expo iOS app

__Running app on a physical Android device:__
1. Download the **Expo App** from the **Google Play Store**
2. Either create a new Expo account or login
3. After running the *npm start* command from above you should see a QR code printed in the console, scan this QR code using the built in camera option from within the **Expo App**
4. Follow the prompts to start listening to your Expo service from the Expo Android app

__Running app on an emulated iOS device:__
1. Install **XCode** viua the **App Store** and install an iOS emulator that has access to the **App Store**
2. After running both the *npm install* and *npm start* commands from above you should see a list of options printed in the console
3. Type in `i` into the console to allow for the Expo app to be installed and configured onto your iOS emulator
  - Note: I believe if you don't have an iOS emulator currently running but installed then Expo will be able to locate this installed emulator and start this setup automatically

*Note: This option is only available when using an iOS device (i.e a Mac)*

__Running app on an emulated Android device:__
1. Install **Android Studio** and follow the prompts to download an Android emulator of your choosing
  - Note: You need to download an emulator that has access to the *Google Play Store*
2. After running both the *npm install* and *npm start* commands from above you should see a list of options printed in the console
3. Type in `a` into the console to allow for the Expo app to be installed and configured onto your Android emulator
  - Note: I believe if you don't have an Android emulator currently running but installed then Expo will be able to locate this installed emulator and start this setup automatically

This repo is a playground for me to familiarize myself with *React Native* and what the environment setup looks like compared to the normal *React* environment setup.
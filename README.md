# PointsGame
A simple Ionic/AngularJS project, using Karma and Mocha/Chai for automated testing.

## Requirements to get up and running
These are required to start developing:

* Node.js
* Gulp
* Bower
* Cordova (The project should run fine without)
* Ionic
* Karma CLI (for running tests)

### Installation
After you have installed latest version of [node.js](https://nodejs.org/en/), boot up a command prompt and run the following (make sure to use sudo, if you are on mac/linux):

    npm install -g gulp
    npm install -g bower
    npm install -g cordova
    npm install -g ionic
    npm install -g karma-cli

## Getting Started
1. Run `npm install`
2. Run `ionic serve` to start development server and launch app in browser

## To run tests
On command prompt in project root folder run `npm test` or `karma start`

## To view on iOS/Android device via Ionic View
1. Download Ionic View from app store
2. Make account
3. Press eye icon for preview shared app and enter app ID `67C120CD`

## Production deployment ios
1. `ionic platform add ios`
2. `ionic build ios`
3. The resulting Xcode project can be signed with proper keys
4. To run in emulator `ionic emulate ios`

## Production deployment android
1. `ionic platform add android`
2. `ionic build android`
3. Resulting in apk
4. To run on connected device: `ionic run android`
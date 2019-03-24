# Dari - customizable communication software for children with ASD

## Concept 

The idea of the software is to use personalized data to allow people with ASD to communicate with other people. The software can be configured with words that are relevant to their everyday life, voices the people like, images that mean something to them.
The words can be put in one or more arbitrary cusomizable categories.

## Requirements

The software works with Android version 5.1.1 (api level 22) and up at the moment but it should be possible to work with iOS

On your computer you need 
* Node.js
* Android Studio
* SDK 28
* Java SDK (JDK) 8

Configure environment variables: 
* JAVA_HOME to point to JDK (`C:\Program Files\Java\jdk1.8.0_201`), 
* ANDROID_HOME to point to the android SDK (`C:\Users\<username>\AppData\Local\Android\Sdk`)
* PATH to include the tools folders in the SDK


## How to run

Install cordova and ionic with `npm install -g cordova ionic`

Install dependencies with `npm install`

Enable development and USB debugging on your phone and connect it to your computer

Run `ionic cordova run android --list` to see the id of your device

Run `ionic cordova run android --target="<your phone ID>"`. This rebuilds the project and starts it on your device. 

## How to personalize / customize

At the moment everything is hardcoded in `src/data/DefaultConfig.ts`. You can open it and edit the combinations.
A word can be put in one or more categories (it's an array of category IDs)

All the resources are in `src/assets/images` and `src/assets/audio`



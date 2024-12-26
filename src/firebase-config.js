/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
    apiKey: "AIzaSyC4FLAaETwYFt7F9WfSCGgssTxmaDTutkw",
    authDomain: "kanjine-dev.firebaseapp.com",
    projectId: "kanjine-dev",
    storageBucket: "kanjine-dev.firebasestorage.app",
    messagingSenderId: "213621290954",
    appId: "1:213621290954:web:e7abb44d026cde6e4c0133",
    measurementId: "G-R13D4DB4RR"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
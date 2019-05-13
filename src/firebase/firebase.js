import * as firebase from 'firebase'


  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyD8upzGpvjiY5Il2C7oNVCJ7mHwMQCYZLE",
    authDomain: "expensify-1b6e9.firebaseapp.com",
    databaseURL: "https://expensify-1b6e9.firebaseio.com",
    projectId: "expensify-1b6e9",
    storageBucket: "expensify-1b6e9.appspot.com",
    messagingSenderId: "864798334319",
    appId: "1:864798334319:web:97620b076b2d9511"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.database().ref().set({
    name: 'Barney Rubble'
  })
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

  const database = firebase.database

  database().ref().set('This is my data')

  database().ref().set({
    name: 'Barney Rubble',
    age: 0,
    email: 'barney@dogs.com',
    isSingle: true,
    location: {
      city: 'Winchester',
      country: "UK"
    }
  })

  database().ref('age').set(7)
  database().ref('location/city').set('East Grinstead')
  database().ref('attributes/color').set('black & tan')
  database().ref('attributes/eyes').set('brown')
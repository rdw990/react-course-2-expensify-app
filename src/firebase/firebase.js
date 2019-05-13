import * as firebase from 'firebase'

  // Your web app's Firebase configuration


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.database().ref().set({
    name: 'Barney Rubble'
  })
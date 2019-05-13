import * as firebase from 'firebase'



  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.database().ref().set({
    name: 'Barney Rubble'
  })
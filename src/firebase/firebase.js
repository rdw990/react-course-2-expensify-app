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

  const database = firebase.database()

  // child_removed event
  database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  })

  // child_changed
  database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  })

  // child_added
  database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
  })

  database.ref('expenses').push({
    description: 'tickets',
    note: '',
    amount: 45.00,
    createdAt:  '10'
  })


// database.ref('expenses')
//  .on('value', (snapshot) => {
//   const expenses = []
  
//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     })
//   })

//   console.log(expenses)
//  })

 
    
    






  // database.ref('notes').push({
  //   title: 'To Do',
  //   body: 'Go for a run'
  // })

  // database.ref('notes').push({
  //   title: 'Course topics',
  //   body: 'React, PHP, Wordpress'
  // })

  // database.ref('notes/-LevDU224Cu9B7T0QRzZ').update({
  //   body: 'Buy food'
  //  })

  // database.ref('notes/-LevDU224Cu9B7T0QRzZ').remove()

  // const firebaseNotes = {
  //   notes: {
  //     randomidjgsjgojd: {
  //       title: 'First note',
  //       body: 'This is my note'
  //     },
  //     randomidjgsnnpsad: {
  //       title: 'Another note',
  //       body: 'This is my note'
  //     },
  //   }
  // }

  // const notes = [{
  //   id: '12',
  //   title: 'First note',
  //   body: 'This is my note'
  // }, {
  //   id: '761ase',
  //   title: 'Another note',
  //   body: 'This is my note'
  // }]

  // database.ref('notes').set(notes)

  // database.ref().set('This is my data')







  // database.ref().set({
  //   name: 'Barney Rubble',
  //   birthplace: 'Winchester',
  //   age: 0,
  //   stressLevel: 6,
  //   email: 'barney@dogs.com',
  //   job: {
  //     title: 'cheese chaser', 
  //     company: 'dogs in the barn'
  //   },
  //   isSingle: true,
  //   location: {
  //     city: 'Winchester',
  //     country: "UK"
  //   }
  // }).then( () => {
  //   console.log('data is saved!');
  // }).catch((e) => {
  //   console.log('this failed', e);
  // })


  // add new fields

  // database().ref('age').set(7)
  // database().ref('location/city').set('East Grinstead')

  // You can add attributes individually or together
  //database().ref('attributes/color').set('black & tan')
  //database().ref('attributes/eyes').set('brown')
  
  // database().ref('attributes').set({
  //   eyes: "brown",
  //   color: "black & tan"
  // }).then( () => {
  //   console.log("second set call worked");
  // }).catch( (e) => {
  //   console.log('this failed again', e);
  // })

  

/*
  //remove one item

  database().ref('isSingle').remove()
  .then( () => {
    console.log('data was removed');
  }).catch((e) => {
    console.log('did not remove data', e);
  })

  //remove everything

  database().ref().remove()
  .then( () => {
    console.log('data was removed');
  }).catch((e) => {
    console.log('did not remove data', e);
  })

  // you can also use set with null
  database().ref('isSingle').set(null)

  */

  // updating the data
  // database().ref().update({
  //   stressLevel: 2,
  //   age: 6.5,
  //   'job/title': 'squirrel hunter',
  //   'job/company': 'Woolfie hounds',
  //   'location/city': 'East Grinstead',
  //   birthplace: null
  // })


  // reading the data a single time

  // database.ref().once('value')
  // .then((snapshot) => {
  //   const val = snapshot.val()
  //   console.log(val);
  // })
  // .catch((e) => {
  //   console.log('Error fething data', e);
  // })

  // database.ref('location/city').once('value')
  // .then((snapshot) => {
  //   const val = snapshot.val()
  //   console.log(val);
  // })
  // .catch((e) => {
  //   console.log('Error fething data', e);
  // })

  // reading the data and subscribing to updates
  // const onValueChange = database.ref().on('value', (snapshot) => { 
  //   const val = snapshot.val()
  //   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);

  //  }, (e) => {
  //    console.log('Error with data fetching', e);
  // })

  // setTimeout( () => {
  //   database.ref('age').set(6)
  // }, 3500)

  // setTimeout( () => {
  //   database.ref().off('value', onValueChange)
  // }, 7000)

  // setTimeout( () => {
  //   database.ref('age').set(7)
  // }, 10500)


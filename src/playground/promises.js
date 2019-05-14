const promise = new Promise((resolve, reject) => {
  setTimeout( () => {
    // resolve('this is my resolved data')
    // resolve({ name: 'Barney', age:7 })
    reject('something went wrong!')
  }, 5000)
  
})

promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('error: ', error);
})


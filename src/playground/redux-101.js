import { createStore } from 'redux';

// Action Generators
const incrementCount = ( {incrementBy = 1} = {} ) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ( {decrementBy = 1} = {} ) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ( {count} ) => ({
  type: 'SET',
  count
})

const resetCount = () => ({
  type: 'RESET'
})

// Reducers
// pure functions - they return a value, not modify
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type){
    case 'INCREMENT' : 
      return { count: state.count + action.incrementBy  }
    case 'DECREMENT' : 
      return { count: state.count - action.decrementBy  }
    case 'RESET' :
    return { count: 0 }
    case 'SET' :
    return { count: action.count  }
    default: 
      return state;
  }
}

const store = createStore(countReducer)

// every time there is a change - store.subscribe()
const unsubscribe = store.subscribe(() => {
  console.log(store.getState()); 
})
// unsubscribe()

// #################################################
// Actions - an object that gets sent to the store
store.dispatch(incrementCount( {incrementBy: 5}));
store.dispatch(incrementCount());
store.dispatch(decrementCount());
store.dispatch(decrementCount( {decrementBy: 10} ));
store.dispatch(resetCount());
store.dispatch(setCount( {count: -101 }));


//##############################################
// const book = {
  //   title: 'Ego is the Enemy',
  //   author: 'Ryan Holiday',
  //   publisher: {
    //     name: 'Penguin'
    //   }
    // }
    
    // const { name: publisherName = 'Self-published' } = book.publisher;
    // console.log(publisherName);
//##############################################
// const item = ['coffee (hot)', '$2.00', '$2.50', '$2.75']
// const [coffee, , med ] = item

// console.log(`a medium ${coffee} costs ${med}`);
//##############################################
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import './firebase/firebase';
//import './firebase/firebase2';

const store = configureStore()

// store.subscribe( () => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// })
 
// store.dispatch(addExpense({ description: 'Water Bill', amount: 4500 }))
// store.dispatch(addExpense({ description: 'Gas Bill', createdAt: 1000 }))
// store.dispatch(addExpense({ description: 'Rent', amount: 109500 }))

// store.dispatch(setTextFilter('water'))
// setTimeout( () => {
//   store.dispatch(setTextFilter('Bill'))
// }, 3200 )

// you can call this here without store.subscribe
// the output will only happen on the console.log
// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
      <AppRouter />
  </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'))
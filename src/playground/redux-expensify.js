import { createStore, combineReducers } from 'redux';
import uuid from 'uuid'

//###############################################
//Action Generators

const addExpense = ( {description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// Filters
const setTextFilter = (text) => ({
  type: 'SET_TEXT_FILTER',
  text
})
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
})
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})                // we don't need startDate = undefined as it is default
const setStartDate = (startDate ) => ({
  type: 'SET_START_DATE',
  startDate
})
const setEndDate = (endDate ) => ({
  type: 'SET_END_DATE',
  endDate
})

//#########################################
//Reducers
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type){
    case 'ADD_EXPENSE': 
      //return state.concat(action.expense)
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':     // we can use {id} & not expense.id
      return state.filter(( {id}) =>  id !== action.id )
    case 'EDIT_EXPENSE':
        return state.map( expense => {
          if (expense.id === action.id) {
            return { ...expense, ...action.updates }
          } else { return expense}
        })
    default: return state;
  }
}
// #######
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}
const filtersReducer = ( state = filtersReducerDefaultState, action) => {
  switch(action.type){
    case 'SET_TEXT_FILTER': 
      return {...state , text: action.text}
    case 'SORT_BY_AMOUNT':
      return {...state, sortBy: 'amount' }
    case 'SORT_BY_DATE':
      return {...state, sortBy: 'date' }
    case 'SET_START_DATE':
      return {...state, startDate: action.startDate}
    case 'SET_END_DATE':
      return {...state, endDate: action.endDate}
    default: return state;
  }
}

//#########################################
// Get Visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {
  return expenses.filter( (expense) => {
    
    // check that the startData & endDate are not undefined
    // you could use the following line instead
    // const startDateMatch = typeof startDate === 'undefined' || expense.createdAt >= startDate;

    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
    
    // if all of the above return true, the item will be displayed
    // if any of the above return false, the item will be filtered out
    return startDateMatch && endDateMatch && textMatch
  }).sort( (a, b) => {
    if (sortBy === 'date'){
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount'){
      return a.amount < b.amount ? 1 : -1;
    }
  })
}

//#########################################
// Create Store

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  }) 
)

store.subscribe( () => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

//#########################################
// Actions
const expenseOne = store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000}))
const expenseTwo = store.dispatch(addExpense({description: 'Coffee', amount: 300, createdAt: -1000}))
// // console.log(expenseOne);

// store.dispatch(removeExpense({id: expenseOne.expense.id  }))
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}))
//store.dispatch(setTextFilter('rent'))
// store.dispatch(setTextFilter(''))
store.dispatch(sortByAmount())
// store.dispatch(sortByDate())
// store.dispatch(setStartDate(0))
// store.dispatch(setStartDate())
//store.dispatch(setEndDate(1250))
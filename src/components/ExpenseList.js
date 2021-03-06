import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

const ExpenseList = (props) => (
  <div>

    {/* 
    {props.name}
    {props.filters.text}
    {props.expenses.length}
    */}

    <h1>Expense List</h1>
    {props.expenses.map( (expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />
    })}
    
  </div>
)

const mapStateToProps = (state) => {
  return {
    // name: 'Richard',
    // expenses: state.expenses,
    // filters: state.filters
    expenses: selectExpenses(state.expenses, state.filters)
  }
}
export default connect(mapStateToProps)(ExpenseList)
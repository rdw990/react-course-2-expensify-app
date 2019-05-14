import React from 'react'
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

const ExpensesSummary = ({expenseCount, expenseTotal}) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses'
  return(
    <div>
      <h1>Viewing {expenseCount} {expenseWord}, totalling {expenseTotal} </h1>
    </div>
  )
}

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return{
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses)
  }
}

export default connect(mapStateToProps)(ExpensesSummary)
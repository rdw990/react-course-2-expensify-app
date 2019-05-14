import React from 'react'

const expensesList = [{
  id: '1',
  description: 'Gum',
  note: '',
  amount: 195,
  createdAt: 0
},{
  id: '2',
  description: 'Rent',
  note: '',
  amount: 109500,
  createdAt: 125
},{
  id: '3',
  description: 'Credit Card',
  note: '',
  amount: 4500,
  createdAt: 225
}]

 class GetExpenseTotal extends React.Component{
  constructor(){
    super()
    this.state = {
        expenses: expensesList
    }
  }

   render(){
    console.log(this.state.expenses)
    const expenseWord = this.state.expenses.length === 1 ? 'expense' : 'expenses'
    return(
      <div>
      { this.state.expenses.length > 0 && <h2>You have {this.state.expenses.length} {expenseWord} </h2>}
      <h2>Total Expenses: 
        {  this.state.expenses.reduce( (acc, cur) =>  acc + cur.amount, 0  )  }
        </h2>
      </div>
    )
   }
}

export default GetExpenseTotal
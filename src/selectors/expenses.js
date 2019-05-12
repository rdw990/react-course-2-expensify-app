import moment from 'moment'
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate }) => {
  return expenses.filter( (expense) => {
    
    // check that the startData & endDate are not undefined
    // you could use the following line instead
    // const startDateMatch = typeof startDate === 'undefined' || expense.createdAt >= startDate;
    const createdAtMoment = moment(expense.createdAt)
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
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

export default getVisibleExpenses
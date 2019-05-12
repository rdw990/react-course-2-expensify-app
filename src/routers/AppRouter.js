import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage  from '../components/HelpPage'
import NotFoundPage from '../components/NotFoundPage'
import Header  from '../components/Header'

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>   {/* Switch is like a f/w ruleset */}
        {/* set exact match for / otherwise it matches every page*/}
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
)

export default AppRouter;
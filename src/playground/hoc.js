import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => {
  return(
    <div>
    <h1>Info</h1>
    <p>The info is {props.info}</p>
    {!props.isAuthenticated && <p>This is private info. Please don't share!</p> }
    </div>
  )
}

// regular function
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
    {props.isAuthenticated ? <WrappedComponent {...props} />
     : <p>Not Authorised</p> }
    </div>
  )
}

const AuthInfo = requireAuthentication(Info)

ReactDOM.render(<AuthInfo isAuthenticated={true} info="secret details" />, document.getElementById('app'))
import React from 'react'
import {Link} from 'react-router-dom'

const NotFoundPage = () => (
  <div>
    {/* the stnd link would cause a full page refresh 
          404 - <a href="/">Go home</a>   */ }
    {/* use the following Link - linking within the app*/}
    404 - <Link to="/">Go home</Link>
  </div>
)

export default NotFoundPage
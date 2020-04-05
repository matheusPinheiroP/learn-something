import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route';

import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'
import About from '../pages/About'
import Forgot from '../pages/Forgot'
import RecoverPassword from '../pages/RecoverPassword'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={About} />
      <Route path='/login' component={SignIn} />
      <Route path='/register' component={SignUp} />
      <Route path='/forgot' component={Forgot} />
      <Route path='/recover' component={RecoverPassword} />

      <Route path='/home' component={Home} isPrivate/>

      <Route
        path='/'
        component={() => <h1>ops, this address doe's not exists, it's just sadness...</h1>}
      />
    </Switch>
  )
}

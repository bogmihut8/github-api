import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import Repositories from './Repositories'
import Organizations from './Organizations'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/repositories' component={Repositories}/>
      <Route path='/organizations' component={Organizations}/>
    </Switch>
  </main>
)

export default Main

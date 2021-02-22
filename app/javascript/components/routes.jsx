import React from 'react'
import { HashRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Property from './pages/Property'
import ExerciseThree from './pages/ExerciseThree'
import ExerciseFour from './pages/ExerciseFour'

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" exact component={ Home } />
        <Route path="/properties" exact component={ Property } />
        <Route path="/exercise_three" exact component={ ExerciseThree } />
        <Route path="/exercise_four" exact component={ ExerciseFour } />
        <Route path="*" component={ () => <h1>404 Not Found</h1> } />
      </Switch>
    </HashRouter>
  )
}

export default Routes
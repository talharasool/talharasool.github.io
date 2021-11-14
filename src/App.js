import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import './App.css'
import Compare from './pages/Compare/Compare'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import NavBar from './components/NavBar/NavBar'
import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  return (
    <Router base>
      <NavBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/compare" component={Compare} />
        <Route exact path="/details" component={ProductDetails} />
        <Route>
          <h3 style={{ textAlign: 'center' }}>Are you lost baby girl?</h3>
        </Route>
      </Switch>
    </Router>
  )
}

export default App

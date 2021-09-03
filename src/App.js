import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation'

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact={true} component={Navigation} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
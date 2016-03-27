import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, Link } from 'react-router'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <Link to="form/kopkap">Form</Link>
      </div>
    )
  }
}

class Forms extends Component {
  render() {
    return (
      <div>
        <h1>Form</h1>
        <p>{this.props.params.user}</p>
        <Link to="/">Back</Link>
      </div>
    )
  }
}


class TestRouter extends Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}/>
          <Route path="form/:user" component={Forms} />
      </Router>
    )
  }
}

ReactDOM.render(<TestRouter/>, document.getElementById('app'));

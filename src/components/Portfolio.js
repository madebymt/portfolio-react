import React , {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'

class Portfolio extends Component {
  render () {
    return (
      <div className="container">
        <div>
          <h2>My portfolio</h2>
        </div>
        <div>
          <h2>Please take a look at my <a href="rubycodes.com">My work Here</a> to see my portfolio</h2>
        </div>
        <div>
            <h3> Contact Me <a href="mailto:hi@rubycodes.com"></a>here</h3>
        </div>
      {this.props.children}
      </div>
    )
  }
}
export default Portfolio;

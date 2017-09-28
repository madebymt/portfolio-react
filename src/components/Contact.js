import React , {Component} from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom'
import '../style/contact.css'

class Contact extends Component {
  render () {
    return (
      <div className="container">
        <div>
          <h2>Say Hi</h2>
        </div>
        <div>
         <h3> Contact Me <a href="mailto:hi@rubycodes.com">here</a></h3>
        </div>
      {this.props.children}
      </div>
    )
  }
}
export default Contact;
